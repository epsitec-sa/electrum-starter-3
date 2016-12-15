'use strict';

import reducerTickets from './reducer-tickets.js';

function getOwner (state, ownerId) {
  if (ownerId === 'messengers') {
    return {
      type:    'messengers',
      id:      state.id,
      tickets: state.Roadbooks,
    };
  }
  for (var roadbook of state.Roadbooks) {
    if (roadbook.id === ownerId) {
      return {
        type:    'roadbooks',
        id:      roadbook.id,
        tickets: roadbook.Tickets,
      };
    }
  }
  for (var tray of state.TicketsTrays) {
    if (tray.id === ownerId) {
      return {
        type:    'desk',
        id:      tray.id,
        tickets: tray.Tickets,
      };
    }
  }
  if (state.Backlog.id === ownerId) {
    return {
      type:    'backlog',
      id:      state.Backlog.id,
      tickets: state.Backlog.Tickets,
    };
  }
  throw new Error (`Owner not found for ${ownerId}`);
}

function getRoadbookTickets (state, roadbookId) {
  for (var readbook of state.Roadbooks) {
    if (readbook.id === roadbookId) {
      return readbook.Tickets;
    }
  }
  throw new Error (`Roadbook ${roadbookId} does not exist`);
}

function getTrayTickets (state, trayId) {
  for (var tray of state.TicketsTrays) {
    if (tray.id === trayId) {
      return tray.Tickets;
    }
  }
  throw new Error (`Tray ${trayId} does not exist`);
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

function getTicketOrder (tickets, id) {
  var order = 0;
  for (var ticket of tickets) {
    if (ticket.id === id) {
      return order;
    }
    order++;
  }
  return -1;
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

// Search all tickets into Roadbooks and TicketsTrays.
function isTicketIntoTray (state, missionId) {
  for (var tray of state.TicketsTrays) {
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
  n.Flash = 'true';
  return n;
}

// Create a transit if a ticket is alone for a roadbook.
function createTransit (state, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 1 && !isTicketIntoTray (state, ticket.Trip.MissionId)) {
      const newTicket = getNewTransit (ticket);
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

function createTransits (state, warnings) {
  for (var readbook of state.Roadbooks) {
    createTransit (state, warnings, readbook.id);
  }
}

// Delete if there are unnecessary transits for a roadbook.
// By example, if a transit is alone, it's unnecessary.
// If there are 3 tickets, including 2 unnecessary, delete the 2 unnecessary tickets.
function deleteTransit (state, warnings, roadbookId) {
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

function deleteTransits (state, warnings) {
  for (var readbook of state.Roadbooks) {
    deleteTransit (state, warnings, readbook.id);
  }
}

// Check if un pick is under a drop, and set the field 'warning'.
function checkOrder (state, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 2 && same[0].Type.startsWith ('drop') && same[1].Type.startsWith ('pick')) {
      warnings.push ({id: same[0].id, text: 'Drop avant pick'});
      warnings.push ({id: same[1].id, text: 'Pick après drop'});
    }
  }
}

function checkOrders (state, warnings) {
  for (var readbook of state.Roadbooks) {
    checkOrder (state, warnings, readbook.id);
  }
}

function checkAlone (state, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 1) {
      const text = ticket.Type.startsWith ('pick') ? 'Il manque le drop' : 'Il manque le pick';
      warnings.push ({id: ticket.id, text: text});
    }
  }
}

function checkAlones (state, warnings) {
  for (var readbook of state.Roadbooks) {
    checkAlone (state, warnings, readbook.id);
  }
}

// If 2 tickets into tray are pick following by drop, merge it.
// If it's drop following by pick, merge also.
function mergeTray (state, warnings, trayId) {
  const tickets = getTrayTickets (state, trayId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 2 && (
        (same[0].Type.startsWith ('pick') && same[1].Type.startsWith ('drop')) ||
        (same[0].Type.startsWith ('drop') && same[1].Type.startsWith ('pick')))) {
      const index = tickets.indexOf (same[0]);
      deleteTicket (tickets, same[0]);
      deleteTicket (tickets, same[1]);
      const merged = clone (same[0]);
      merged.Type = 'pair';
      addTicket (tickets, index, merged);
    }
  }
}

function mergeTrays (state, warnings) {
  for (var tray of state.TicketsTrays) {
    mergeTray (state, warnings, tray.id);
  }
}

function getWarning (warnings, id) {
  for (var warning of warnings) {
    if (warning.id === id) {
      return warning.text;
    }
  }
  return null;
}

function setWarning (state, warnings, roadbookId) {
  const tickets = getRoadbookTickets (state, roadbookId);
  for (var ticket of tickets) {
    ticket.Warning = getWarning (warnings, ticket.id);
  }
}

function setWarnings (state, warnings) {
  for (var readbook of state.Roadbooks) {
    setWarning (state, warnings, readbook.id);
  }
  for (var tray of state.TicketsTrays) {
    const tickets = getTrayTickets (state, tray.id);
    for (var ticket of tickets) {
      ticket.Warning = null;
    }
  }
}

// Delete all residual tickets into Roadbooks and TicketsTrays.
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
  for (var tray of state.TicketsTrays) {
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

// ------------------------------------------------------------------------------------------

function setListFlash (list, ids) {
  for (let i = 0; i < list.Tickets.length; i++) {
    const ticket = list.Tickets[i];
    if (ids.indexOf (ticket.id) !== -1) {
      if (ticket.Flash !== 'true') {
        ticket.Flash = 'true';
        list.Tickets[i] = clone (ticket);
      }
    } else {
      if (ticket.Flash === 'true') {
        ticket.Flash = 'false';
        list.Tickets[i] = clone (ticket);
      }
    }
  }
}
// Set flash mode to all modified tickets.
// Note: Currently, flash mode is permanent. Eventually, it should only appear temporarily
// and disappear gradually.
function setFlash (state, ids) {
  for (var readbook of state.Roadbooks) {
    setListFlash (readbook, ids);
  }
  for (var tray of state.TicketsTrays) {
    setListFlash (tray, ids);
  }
}

function changeGeneric (state, warnings, fromId, fromOwner, toId, toOwner, toPosition) {
  let fromOrder = getTicketOrder (fromOwner.tickets, fromId);
  let toOrder   = getTicketOrder (toOwner.tickets, toId);
  if (fromOwner.id === toOwner.id && toOrder > fromOrder) {
    toOrder--;
  }
  if (toPosition === 'after') {
    toOrder++;
  }

  const ticket = fromOwner.tickets[fromOrder];
  if ((toOwner.type === 'backlog' || toOwner.type === 'desk') && ticket.Type.endsWith ('-transit')) {
    // Transit ticket does not move into backlog or desk.
    return;
  }

  // Delete the source.
  if (toOwner.type === 'backlog' && ticket.Type !== 'pair') {
    deleteMission (state, ticket.Trip.MissionId);
  } else {
    deleteTicket (fromOwner.tickets, ticket);
  }

  // Set the destination.
  ticket.OwnerId = toOwner.id;
  if (toOwner.type === 'roadbooks' && ticket.Type === 'pair') {
    const pick = clone (ticket);
    const drop = clone (ticket);
    pick.Type = 'pick';
    drop.Type = 'drop';
    addTicket (toOwner.tickets, toOrder, drop);  // first drop, for have pick/drop in this order
    addTicket (toOwner.tickets, toOrder, pick);
    setFlash (state, [pick.id, drop.id]);
  } else if (toOwner.type === 'backlog' && ticket.Type !== 'pair') {
    ticket.Type = 'pair';
    ticket.Status = 'pre-dispatched';
    addTicket (toOwner.tickets, toOrder, ticket);
    setFlash (state, [ticket.id]);
  } else {
    addTicket (toOwner.tickets, toOrder, ticket);
    setFlash (state, [ticket.id]);
  }
}

// ------------------------------------------------------------------------------------------

function drop (state, fromId, fromOwnerId, toId, toOwnerId, toPosition) {
  console.log ('Reducer.drop');
  const fromOwner = getOwner (state, fromOwnerId);
  const toOwner   = getOwner (state, toOwnerId);
  const warnings = [];
  changeGeneric (state, warnings, fromId, fromOwner, toId, toOwner, toPosition);
  if (toOwner.type === 'roadbooks') {
    deleteTransits (state, warnings);
    createTransits (state, warnings);
    checkOrders (state, warnings);
  } else if (toOwner.type === 'desk') {
    mergeTrays (state, warnings);
  }
  checkAlones (state, warnings);
  setWarnings (state, warnings);
  return state;
}

// Indicates whether the operation 'drop' will perform on a useful action.
// If destination is near source, the operation is not useful.
function isUseful (state, fromId, fromOwnerId, toId, toOwnerId, toPosition) {
  const fromOwner = getOwner (state, fromOwnerId);
  const toOwner   = getOwner (state, toOwnerId);
  if (fromOwner.id === toOwner.id) {
    let fromOrder = getTicketOrder (fromOwner.tickets, fromId);
    let toOrder   = getTicketOrder (toOwner.tickets, toId);
    if (fromOrder === toOrder) {
      state.isUseful = false;
    } else if (fromOrder === toOrder + 1 && toPosition === 'after') {
      state.isUseful = false;
    } else if (fromOrder === toOrder - 1 && toPosition === 'before') {
      state.isUseful = false;
    } else {
      state.isUseful = true;
    }
  } else {
    state.isUseful = true;
  }
  return state;
}

// This trick is necessary for update the UI !!!
function cloneAll (state) {
  for (var readbook of state.Roadbooks) {
    for (let i = 0; i < readbook.Tickets.length; i++) {
      const ticket = readbook.Tickets[i];
      readbook.Tickets[i] = clone (ticket);
    }
  }
  return state;
}

function swapSelected (state, id, ownerId) {
  const owner = getOwner (state, ownerId);
  let order = getTicketOrder (owner.tickets, id);
  owner.tickets[order].Selected = (owner.tickets[order].Selected === 'true') ? 'false' : 'true';
  setFlash (state, []);
  return state;
}

function swapExtended (state, id, ownerId) {
  const owner = getOwner (state, ownerId);
  let order = getTicketOrder (owner.tickets, id);
  owner.tickets[order].Extended = (owner.tickets[order].Extended === 'true') ? 'false' : 'true';
  setFlash (state, []);
  return state;
}

function swapStatus (state, id, ownerId) {
  const owner = getOwner (state, ownerId);
  let order = getTicketOrder (owner.tickets, id);
  if (owner.tickets[order].Status === 'dispatched') {
    owner.tickets[order].Status = 'pre-dispatched';
  } else {
    owner.tickets[order].Status = 'dispatched';
  }
  setFlash (state, []);
  return state;
}

// ------------------------------------------------------------------------------------------

export default function Reducer (state = {}, action = {}) {
  switch (action.type) {
    case 'DROP':
      state = drop (state, action.fromId, action.fromOwnerId, action.toId, action.toOwnerId, action.toPosition);
      break;
    case 'IS_USEFUL':
      state = isUseful (state, action.fromId, action.fromOwnerId, action.toId, action.toOwnerId, action.toPosition);
      break;
    case 'CLONE':
      state = cloneAll (state);
      break;
    case 'SWAP_SELECTED':
      state = swapSelected (state, action.id, action.ownerId);
      break;
    case 'SWAP_EXTENDED':
      state = swapExtended (state, action.id, action.ownerId);
      break;
    case 'SWAP_STATUS':
      state = swapStatus (state, action.id, action.ownerId);
      break;
  }
  return state;
}
