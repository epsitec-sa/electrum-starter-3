'use strict';

import reducerTickets from './reducer-tickets.js';

function searchTicket (root, items, type, id, ownerId) {
  if (id) {
    for (var i = 0, len = items.length; i < len; i++) {
      const ticket = items[i];
      if (ticket.id === id) {
        return {
          ownerId: root.id,
          type:    type,
          tickets: items,
          ticket:  ticket,
          index:   i,
        };
      }
    }
  } else if (root.id === ownerId) {
    // If id is undefined, destination is after the last element.
    const length = items.length;
    const ticket = (length === 0) ? null : items[length - 1];
    return {
      ownerId: root.id,
      type:    type,
      tickets: items,
      ticket:  ticket,
      index:   items.length,
    };
  }
  return null;
}

function searchId (state, id, ownerId) {
  const m = searchTicket (state, state.Roadbooks, 'roadbooks', id, ownerId);
  if (m) {
    return m;
  }
  const r = searchTicket (state.Backlog, state.Backlog.Tickets, 'backlog', id, ownerId);
  if (r) {
    return r;
  }
  for (var roadbook of state.Roadbooks) {
    const result = searchTicket (roadbook, roadbook.Tickets, 'roadbook', id, ownerId);
    if (result) {
      return result;
    }
  }
  for (var tray of state.Desk) {
    const result = searchTicket (tray, tray.Tickets, 'tray', id, ownerId);
    if (result) {
      return result;
    }
  }
  throw new Error (`Id not found for ${id}`);
}

function getRoadbookTickets (state, roadbookId) {
  for (var readbook of state.Roadbooks) {
    if (readbook.id === roadbookId) {
      return readbook.Tickets;
    }
  }
  throw new Error (`Roadbook ${roadbookId} does not exist`);
}

function addTicket (tickets, index, ticket) {
  tickets = reducerTickets (tickets, {
    type:   'ADD_TICKET',
    index:  index,
    ticket: ticket,
  });
}

function deleteTicket (tickets, ticket) {
  tickets = reducerTickets (tickets, {
    type:   'DELETE_TICKET',
    ticket: ticket,
  });
}

function getTicketsFromMissionId (tickets, missionId) {
  const result = [];
  for (var ticket of tickets) {
    if (ticket.Trip.MissionId === missionId) {
      result.push (ticket);
    }
  }
  return result;
}

// Return a new random guid.
// See http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function getNewId () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace (/[xy]/g, function (c) {
      var r = Math.random () * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString (16);
    });
}

// Return a deep copy of ticket, with new ids.
function clone (ticket) {
  const n = JSON.parse (JSON.stringify (ticket));
  n.id = getNewId ();
  n.Trip.id = getNewId ();
  n.Trip.Pick.id = getNewId ();
  n.Trip.Drop.id = getNewId ();
  return n;
}

function normalize (ticket) {
  if (ticket.Selected !== 'true') {
    ticket.Selected = 'false';
  }
  if (ticket.Flash !== 'true') {
    ticket.Flash = 'false';
  }
  if (!ticket.Warning) {
    ticket.Warning = null;
  }
  return ticket;
}

// Search all tickets into Roadbooks and Desk.
function isTicketIntoTray (state, missionId) {
  for (var tray of state.Desk) {
    for (var ticket2 of tray.Tickets) {
      if (ticket2.Trip.MissionId === missionId) {
        return true;
      }
    }
  }
  return false;
}

// Return new ticket for transit. If it's a pick, create a drop zone for transit, and reverse.
function getNewTransit (ticket) {
  const n = clone (ticket);
  if (n.Type.startsWith ('pick')) {
    n.Type = 'drop-transit';
    n.Trip.Drop.LongDescription = null;
    n.Trip.Drop.Notes = [];
    n.Trip.Drop.PlanedTime = ticket.Trip.Pick.PlanedTime;
    n.Trip.Drop.ShortDescription = 'Inconnu';
    n.Trip.Drop.Zone = null;
  } else if (n.Type.startsWith ('drop')) {
    n.Type = 'pick-transit';
    n.Trip.Pick.LongDescription = null;
    n.Trip.Pick.Notes = [];
    n.Trip.Pick.PlanedTime = ticket.Trip.Drop.PlanedTime;
    n.Trip.Pick.ShortDescription = 'Inconnu';
    n.Trip.Pick.Zone = null;
  }
  return n;
}

// Create a transit if a ticket is alone for a roadbook.
function createTransit (state, flashes, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 1 && !isTicketIntoTray (state, ticket.Trip.MissionId)) {
      const newTicket = getNewTransit (ticket);
      flashes.push (newTicket.id);
      const index = tickets.indexOf (ticket);
      if (newTicket.Type.startsWith ('pick')) {
        addTicket (tickets, index, newTicket);
      } else {
        addTicket (tickets, index + 1, newTicket);
      }
      warnings.push ({id: newTicket.id, text: 'Transit à définir'});
    }
  }
}

function createTransits (state, flashes, warnings) {
  for (var readbook of state.Roadbooks) {
    createTransit (state, flashes, warnings, readbook.id);
  }
}

// Delete if there are unnecessary transits for a roadbook.
// By example, if a transit is alone, it's unnecessary.
// If there are 3 tickets, including 2 unnecessary, delete the 2 unnecessary tickets.
function deleteTransit (state, flashes, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length > 0 && same.length % 2 === 1) {  // odd number of tickets ?
      for (let i = 0; i < same.length; i++) {
        if (same[i].Type.endsWith ('-transit')) {
          deleteTicket (tickets, same[i]);
        }
      }
    }
  }
}

function deleteTransits (state, flashes, warnings) {
  for (var readbook of state.Roadbooks) {
    deleteTransit (state, flashes, warnings, readbook.id);
  }
}

// ------------------------------------------------------------------------------------------

// Check if un pick is under a drop, and set the field 'warning'.
function checkOrder (list, flashes, warnings) {
  for (let i = 0; i < list.Tickets.length; i++) {
    const ticket = list.Tickets[i];
    const same = getTicketsFromMissionId (list.Tickets, ticket.Trip.MissionId);
    if (same.length === 2 && same[0].Type.startsWith ('drop') && same[1].Type.startsWith ('pick')) {
      warnings.push ({id: same[0].id, text: 'Drop avant pick'});
      warnings.push ({id: same[1].id, text: 'Pick après drop'});
    }
  }
}

// Check if picks are under drops into all Roadbooks.
function checkOrders (state, flashes, warnings) {
  for (var readbook of state.Roadbooks) {
    checkOrder (readbook, flashes, warnings);
  }
  for (var tray of state.Desk) {
    checkOrder (tray, flashes, warnings);
  }
}

// ------------------------------------------------------------------------------------------

function checkAlone (state, flashes, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 1) {
      let text;
      if (ticket.Type.startsWith ('pick')) {
        text = 'Il manque le drop';
      } else if (ticket.Type.startsWith ('drop')) {
        text = 'Il manque le pick';
      } else {
        text = `Incorrect type = ${ticket.Type}`;
      }
      warnings.push ({id: ticket.id, text: text});
    }
  }
}

// Add a warning to all tickets into Roadbooks we are alone.
function checkAlones (state, flashes, warnings) {
  for (var readbook of state.Roadbooks) {
    checkAlone (state, flashes, warnings, readbook.id);
  }
}

// ------------------------------------------------------------------------------------------

function updateShape (list) {
  for (let i = 0; i < list.Tickets.length; i++) {
    const ticket = list.Tickets[i];
    let shape = 'normal';
    if (i < list.Tickets.length - 1) {
      const other = list.Tickets[i + 1];
      if (ticket.Trip.MissionId === other.Trip.MissionId &&
        ticket.Type.startsWith ('pick') &&
        other.Type.startsWith ('drop')) {  // pick following by drop ?
        shape = 'first';
      }
    }
    if (i > 0) {
      const other = list.Tickets[i - 1];
      if (ticket.Trip.MissionId === other.Trip.MissionId &&
        ticket.Type.startsWith ('drop') &&
        other.Type.startsWith ('pick')) {  // drop preceded by pick ?
        shape = 'last';
      }
    }
    if (ticket.Shape !== shape) {  // changing ?
      ticket.Shape = shape;
      list.Tickets[i] = clone (ticket);  // Trick necessary for update UI !!!
    }
  }
}

// Update shapes to all tickets into Roadbooks and Desk, for showing pick directly following by drop.
function updateShapes (state) {
  for (var readbook of state.Roadbooks) {
    updateShape (readbook);
  }
  for (var tray of state.Desk) {
    updateShape (tray);
  }
}

// ------------------------------------------------------------------------------------------

function getTextWarning (warnings, id) {
  for (var warning of warnings) {
    if (warning.id === id) {
      return warning.text;
    }
  }
  return null;
}

function setMisc (list, flashes, warnings) {
  for (let i = 0; i < list.Tickets.length; i++) {
    const ticket = normalize (list.Tickets[i]);
    const w = getTextWarning (warnings, ticket.id);
    const f = (flashes.indexOf (ticket.id) === -1) ? 'false' : 'true';
    let s = ticket.Selected;
    if (f === 'true') {
      s = 'false';  // if flash -> deselect item
    }
    if (ticket.Warning !== w || ticket.Flash !== f || ticket.Selected !== s) {  // changing ?
      ticket.Warning  = w;  // set or clear warning message
      ticket.Flash    = f;  // set or clear flash mode
      ticket.Selected = s;  // select or deselect ticket
      list.Tickets[i] = clone (ticket);  // Trick necessary for update UI !!!
    }
  }
}

// Set flashes and warnings to all ticket into Roadbooks, Desk and Backlog.
function setMiscs (state, flashes, warnings) {
  for (var readbook of state.Roadbooks) {
    setMisc (readbook, flashes, warnings);
  }
  for (var tray of state.Desk) {
    setMisc (tray, flashes, warnings);
  }
  setMisc (state.Backlog, flashes, warnings);
}

// ------------------------------------------------------------------------------------------

// Delete all residual tickets into Roadbooks and Desk.
function deleteMission (state, missionId) {
  for (var roadbook of state.Roadbooks) {
    const array1 = [];
    for (var ticket1 of roadbook.Tickets) {
      if (ticket1.Trip.MissionId === missionId) {
        array1.push (ticket1);
      }
    }
    for (ticket1 of array1) {
      deleteTicket (roadbook.Tickets, ticket1);
    }
  }
  for (var tray of state.Desk) {
    const array2 = [];
    for (var ticket2 of tray.Tickets) {
      if (ticket2.Trip.MissionId === missionId) {
        array2.push (ticket2);
      }
    }
    for (ticket2 of array2) {
      deleteTicket (tray.Tickets, ticket2);
    }
  }
}

function changeGeneric (state, flashes, warnings, from, to) {
  const ticket = from.ticket;
  if ((to.type === 'backlog' || to.type === 'tray') && ticket.Type.endsWith ('-transit')) {
    // Transit ticket does not move into backlog or desk.
    return;
  }

  // Delete the source.
  if (to.type === 'backlog' && ticket.Type !== 'both') {
    deleteMission (state, ticket.Trip.MissionId);
  } else {
    deleteTicket (from.tickets, ticket);
    if (from.ownerId === to.ownerId && from.index < to.index) {
      to.index--;  // decrease to take account of the deleted item
    }
  }

  // Set the destination.
  ticket.OwnerId = to.ownerId;
  if ((to.type === 'roadbook' || to.type === 'tray') && ticket.Type === 'both') {
    const pick = clone (ticket);
    const drop = clone (ticket);
    pick.Type = 'pick';
    drop.Type = 'drop';
    addTicket (to.tickets, to.index, drop);  // first drop, for have pick/drop in this order
    addTicket (to.tickets, to.index, pick);
    flashes.push (pick.id);
    flashes.push (drop.id);
  } else if (to.type === 'backlog' && ticket.Type !== 'both') {
    ticket.Type = 'both';
    ticket.Status = 'pre-dispatched';
    addTicket (to.tickets, to.index, ticket);
    flashes.push (ticket.id);
  } else {
    addTicket (to.tickets, to.index, ticket);
    flashes.push (ticket.id);
  }
}

// ------------------------------------------------------------------------------------------

// fromId    -> id to item to move.
// toId      -> id before which it is necessary to insert. If it was null, insert after the last item.
// toOwnerId -> owner where it is necessary to insert. Useful when toId is null.
function drop (state, fromIds, toId, toOwnerId) {
  console.log ('Reducer.drop');
  const flashes = [];
  const warnings = [];
  const to = searchId (state, toId, toOwnerId);
  for (let i = fromIds.length - 1; i >= 0; i--) {
    const fromId = fromIds[i];
    const from = searchId (state, fromId);
    changeGeneric (state, flashes, warnings, from, to);
  }
  if (to.type === 'roadbook') {
    deleteTransits (state, flashes, warnings);
    createTransits (state, flashes, warnings);
  }
  checkOrders (state, flashes, warnings);
  checkAlones (state, flashes, warnings);
  setMiscs (state, flashes, warnings);
  updateShapes (state);
  return state;
}

function deselectAllList (list) {
  for (let i = 0; i < list.Tickets.length; i++) {
    const ticket = list.Tickets[i];
    if (ticket.Selected !== 'false') {  // changing ?
      ticket.Selected = 'false';
      list.Tickets[i] = clone (ticket);  // Trick necessary for update UI !!!
    }
  }
}

function deselectAll (state) {
  for (var readbook of state.Roadbooks) {
    deselectAllList (readbook);
  }
  for (var tray of state.Desk) {
    deselectAllList (tray);
  }
  deselectAllList (state.Backlog);
}

function swapSelected (state, id) {
  const search = searchId (state, id);
  const ticket = search.tickets[search.index];
  ticket.Selected = (ticket.Selected === 'true') ? 'false' : 'true';
  search.tickets[search.index] = clone (ticket);  // Trick necessary for update UI !!!
  return state;
}

function swapExtended (state, id) {
  const search = searchId (state, id);
  const ticket = search.tickets[search.index];
  ticket.Extended = (ticket.Extended === 'true') ? 'false' : 'true';
  search.tickets[search.index] = clone (ticket);  // Trick necessary for update UI !!!
  return state;
}

function swapStatus (state, id) {
  const search = searchId (state, id);
  const ticket = search.tickets[search.index];
  if (ticket.Status === 'dispatched') {
    ticket.Status = 'pre-dispatched';
  } else {
    ticket.Status = 'dispatched';
  }
  search.tickets[search.index] = clone (ticket);  // Trick necessary for update UI !!!
  return state;
}

// ------------------------------------------------------------------------------------------

export default function Reducer (state = {}, action = {}) {
  switch (action.type) {
    case 'DROP':
      state = drop (state, action.fromIds, action.toId, action.toOwnerId);
      break;
    case 'DESELECT_ALL':
      state = deselectAll (state);
      break;
    case 'SWAP_SELECTED':
      state = swapSelected (state, action.id);
      break;
    case 'SWAP_EXTENDED':
      state = swapExtended (state, action.id);
      break;
    case 'SWAP_STATUS':
      state = swapStatus (state, action.id);
      break;
  }
  return state;
}
