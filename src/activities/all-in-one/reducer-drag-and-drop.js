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

function getTicketsForMessenger (state, messengerId) {
  for (var readbook of state.Roadbooks) {
    if (readbook.id === messengerId) {
      return readbook.Tickets;
    }
  }
  throw new Error (`Messenger ${messengerId} does not exist`);
}

function getTicketsForTray (state, trayId) {
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

function getToOrder (tickets, target, sibling, fromOrder) {
  let toOrder = -1;
  if (sibling === null) {
    toOrder = target.children.length - 1;  // if no sibling, use last element
  } else {
    toOrder = getTicketOrder (tickets, sibling.dataset.id);
    if (fromOrder && toOrder > fromOrder) {
      toOrder--;  // if target under source, count as if the source was not there
    }
  }
  return toOrder;
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

// Search all tickets into Roadbooks and TicketsTrays.
function getTicketOwners (state, missionId) {
  const result = [];
  for (var roadbook of state.Roadbooks) {
    for (var ticket1 of roadbook.Tickets) {
      if (ticket1.Trip.MissionId === missionId) {
        result.push (roadbook.id);
      }
    }
  }
  for (var tray of state.TicketsTrays) {
    for (var ticket2 of tray.Tickets) {
      if (ticket2.Trip.MissionId === missionId) {
        result.push (tray.id);
      }
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
    n.Trip.Drop.ShortDescription = 'Transit à définir';
    n.Trip.Drop.Zone = null;
  } else if (n.Type.startsWith ('drop')) {
    n.Type = 'pick-transit';
    n.Trip.Pick.LongDescription = null;
    n.Trip.Pick.Notes = [];
    n.Trip.Pick.PlanedTime = ticket.Trip.Drop.PlanedTime;
    n.Trip.Pick.ShortDescription = 'Transit à définir';
    n.Trip.Pick.Zone = null;
  }
  n.Flash = 'true';
  return n;
}

// Create a transit if a ticket is alone for a messenger.
function createTransit (state, messengerId) {
  const tickets = getTicketsForMessenger (state, messengerId);
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
    }
  }
}

function createTransits (state) {
  for (var readbook of state.Roadbooks) {
    createTransit (state, readbook.id);
  }
}

// Delete if there are unnecessary transits for a messenger.
// By example, if a transit is alone, it's unnecessary.
// If there are 3 tickets, including 2 unnecessary, delete the 2 unnecessary tickets.
function deleteTransit (state, messengerId) {
  const tickets = getTicketsForMessenger (state, messengerId);
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

function deleteTransits (state) {
  for (var readbook of state.Roadbooks) {
    deleteTransit (state, readbook.id);
  }
}

// Check if un pick is under a drop, and set the field 'warning'.
function checkOrder (state, messengerId) {
  const tickets = getTicketsForMessenger (state, messengerId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 2 && same[0].Type.startsWith ('drop') && same[1].Type.startsWith ('pick')) {
      same[0].Warning = 'reverse-pick-drop';
      same[1].Warning = 'reverse-pick-drop';
    } else {
      ticket.Warning = '';
    }
  }
}

// If 2 tickets into tray are pick following by drop, merge it.
// If it's drop following by pick, merge also.
function mergeTray (state, trayId) {
  const tickets = getTicketsForTray (state, trayId);
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

function mergeTrays (state) {
  for (var tray of state.TicketsTrays) {
    mergeTray (state, tray.id);
  }
}

function checkOrders (state) {
  for (var readbook of state.Roadbooks) {
    checkOrder (state, readbook.id);
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

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId          = element.dataset.id;
  const fromMessengerId = element.dataset.ownerId;
  const toMessengerId   = target.dataset.id;
  if (fromMessengerId === toMessengerId) {  // inside same messenger ?
    const tickets   = getTicketsForMessenger (state, fromMessengerId);
    const fromOrder = getTicketOrder (tickets, fromId);
    const toOrder   = getToOrder (tickets, target, sibling, fromOrder);
    const ticket    = tickets[fromOrder];
    deleteTicket (tickets, ticket);
    addTicket (tickets, toOrder, ticket);
  } else {  // from a messenger to another ?
    const fromTickets = getTicketsForMessenger (state, fromMessengerId);
    const toTickets   = getTicketsForMessenger (state, toMessengerId);
    const fromOrder   = getTicketOrder (fromTickets, fromId);
    const toOrder     = getToOrder (toTickets, target, sibling);
    const ticket      = fromTickets[fromOrder];
    deleteTicket (fromTickets, ticket);
    ticket.OwnerId = toMessengerId;
    addTicket (toTickets, toOrder, ticket);
  }
  deleteTransits (state);
  createTransits (state);
  checkOrders (state);
}

function changeMissionsToDispatch (state, element, target, source, sibling) {
  const fromId        = element.dataset.id;
  const toMessengerId = target.dataset.id;
  const toTickets     = getTicketsForMessenger (state, toMessengerId);
  const toOrder       = getToOrder (toTickets, target, sibling);

  // Delete the original ticket in shared collection Backlog.
  const i = getTicketOrder (state.Backlog.Tickets, fromId);
  const ticket = state.Backlog.Tickets[i];
  deleteTicket (state.Backlog.Tickets, ticket);

  // Split the original ticket (with Type = pair) in 2 tickets (with Types = pick/drop).
  ticket.OwnerId = toMessengerId;
  const pick = clone (ticket);
  const drop = clone (ticket);
  pick.Type = 'pick';
  drop.Type = 'drop';
  addTicket (toTickets, toOrder, drop);  // first drop, for have pick/drop in this order
  addTicket (toTickets, toOrder, pick);
}

function changeDeskToDispatch (state, element, target, source, sibling) {
  const fromId        = element.dataset.id;
  const fromTrayId    = source.dataset.id;
  const fromTickets   = getTicketsForTray (state, fromTrayId);
  const toMessengerId = target.dataset.id;
  const toTickets     = getTicketsForMessenger (state, toMessengerId);
  const toOrder       = getToOrder (toTickets, target, sibling);

  // Delete the original ticket in tray.
  const i = getTicketOrder (fromTickets, fromId);
  const ticket = fromTickets[i];
  deleteTicket (fromTickets, ticket);

  if (ticket.Type === 'pair') {
    // Split the original ticket (with Type = pair) in 2 tickets (with Types = pick/drop) into messenger.
    ticket.OwnerId = toMessengerId;
    const pick = clone (ticket);
    const drop = clone (ticket);
    pick.Type = 'pick';
    drop.Type = 'drop';
    addTicket (toTickets, toOrder, drop);  // first drop, for have pick/drop in this order
    addTicket (toTickets, toOrder, pick);
  } else {
    // Simply move the original ticket (pick or drop) into messenger.
    ticket.OwnerId = toMessengerId;
    addTicket (toTickets, toOrder, ticket);
    deleteTransits (state);
    createTransits (state);
  }
}

function changeDispatchToMissions (state, element, target, source, sibling) {
  const fromId          = element.dataset.id;
  const fromMessengerId = element.dataset.ownerId;
  const fromTickets     = getTicketsForMessenger (state, fromMessengerId);
  const fromOrder       = getTicketOrder (fromTickets, fromId);
  const ticket          = fromTickets[fromOrder];
  deleteMission (state, ticket.Trip.MissionId);

  // Put the mission to shared collection Backlog.
  const toTickets = state.Backlog.Tickets;
  const toOrder   = getToOrder (toTickets, target, sibling);
  const n = clone (ticket);
  n.Type = 'pair';
  addTicket (toTickets, toOrder, n);
}

function changeMissionsToMissions (state, element, target, source, sibling) {
  // Operation prohibited !
}

function changeDeskToMissions (state, element, target, source, sibling) {
  const fromId      = element.dataset.id;
  const fromTrayId  = source.dataset.id;
  const fromTickets = getTicketsForTray (state, fromTrayId);
  const fromOrder   = getTicketOrder (fromTickets, fromId);
  const ticket      = fromTickets[fromOrder];
  deleteMission (state, ticket.Trip.MissionId);

  // Put the mission to shared collection Backlog.
  const toTickets = state.Backlog.Tickets;
  const toOrder   = getToOrder (toTickets, target, sibling);
  const n = clone (ticket);
  n.Type = 'pair';
  addTicket (toTickets, toOrder, n);
}

function changeDispatchToDesk (state, element, target, source, sibling) {
  const fromId          = element.dataset.id;
  const fromMessengerId = element.dataset.ownerId;
  const fromTickets     = getTicketsForMessenger (state, fromMessengerId);
  const fromOrder       = getTicketOrder (fromTickets, fromId);
  const ticket          = fromTickets[fromOrder];

  if (!ticket.Type.endsWith ('-transit')) {
    // Delete the ticket in source messenger.
    deleteTicket (fromTickets, ticket);

    // Put the ticket in destination tray.
    const toTrayId  = target.dataset.id;
    const toTickets = getTicketsForTray (state, toTrayId);
    const toOrder   = getToOrder (toTickets, target, sibling);
    addTicket (toTickets, toOrder, ticket);

    mergeTray (state, toTrayId);
    deleteTransits (state);
    createTransits (state);
    checkOrders (state);
  }
}

function changeMissionsToDesk (state, element, target, source, sibling) {
  const fromId    = element.dataset.id;
  const toTrayId  = target.dataset.id;
  const toTickets = getTicketsForTray (state, toTrayId);
  const toOrder   = getToOrder (toTickets, target, sibling);

  // Delete the original ticket in shared collection Backlog.
  const i = getTicketOrder (state.Backlog.Tickets, fromId);
  const ticket = state.Backlog.Tickets[i];
  deleteTicket (state.Backlog.Tickets, ticket);

  // Put the ticket to tray.
  addTicket (toTickets, toOrder, ticket);
}

function changeDeskToDesk (state, element, target, source, sibling) {
  const fromId     = element.dataset.id;
  const fromTrayId = source.dataset.id;

  // Delete the ticket in source tray.
  const fromTickets = getTicketsForTray (state, fromTrayId);
  const i = getTicketOrder (fromTickets, fromId);
  const ticket = fromTickets[i];
  deleteTicket (fromTickets, ticket);

  // Put the ticket in destination tray.
  const toTrayId  = target.dataset.id;
  const toTickets = getTicketsForTray (state, toTrayId);
  const toOrder   = getToOrder (toTickets, target, sibling);
  addTicket (toTickets, toOrder, ticket);

  mergeTray (state, toTrayId);
}

// ------------------------------------------------------------------------------------------

function setFlash (state, ids) {
  for (var readbook of state.Roadbooks) {
    for (let i = 0; i < readbook.Tickets.length; i++) {
      const ticket = readbook.Tickets[i];
      if (ids.indexOf (ticket.id) !== -1) {
        if (ticket.Flash !== 'true') {
          ticket.Flash = 'true';
          readbook.Tickets[i] = clone (ticket);
        }
      } else {
        if (ticket.Flash === 'true') {
          ticket.Flash = 'false';
          readbook.Tickets[i] = clone (ticket);
        }
      }
    }
  }
}

function changeGeneric (state, fromId, fromOwner, toId, toOwner, toPosition) {
  let fromOrder = getTicketOrder (fromOwner.tickets, fromId);
  let toOrder   = getTicketOrder (toOwner.tickets, toId);
  if (fromOwner.id === toOwner.id && toOrder > fromOrder) {
    toOrder--;
  }
  if (toPosition === 'after') {
    toOrder++;
  }
  const ticket = fromOwner.tickets[fromOrder];
  deleteTicket (fromOwner.tickets, ticket);
  ticket.OwnerId = toOwner.id;
  if (toOwner.type === 'roadbooks' && ticket.Type === 'pair') {
    const pick = clone (ticket);
    const drop = clone (ticket);
    pick.Type = 'pick';
    drop.Type = 'drop';
    addTicket (toOwner.tickets, toOrder, drop);  // first drop, for have pick/drop in this order
    addTicket (toOwner.tickets, toOrder, pick);
    setFlash (state, [pick.id, drop.id]);
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
  changeGeneric (state, fromId, fromOwner, toId, toOwner, toPosition);
  if (toOwner.type === 'roadbooks') {
    deleteTransits (state);
    createTransits (state);
    checkOrders (state);
  }
  return state;
}

function usefull (state, fromId, fromOwnerId, toId, toOwnerId, toPosition) {
  const fromOwner = getOwner (state, fromOwnerId);
  const toOwner   = getOwner (state, toOwnerId);
  if (fromOwner.id === toOwner.id) {
    let fromOrder = getTicketOrder (fromOwner.tickets, fromId);
    let toOrder   = getTicketOrder (toOwner.tickets, toId);
    if (fromOrder === toOrder) {
      state.usefull = false;
    } else if (fromOrder === toOrder + 1 && toPosition === 'after') {
      state.usefull = false;
    } else if (fromOrder === toOrder - 1 && toPosition === 'before') {
      state.usefull = false;
    } else {
      state.usefull = true;
    }
  } else {
    state.usefull = true;
  }
  return state;
}

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
    case 'USEFULL':
      state = usefull (state, action.fromId, action.fromOwnerId, action.toId, action.toOwnerId, action.toPosition);
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
