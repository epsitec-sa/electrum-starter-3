'use strict';

import reducerTickets from './reducer-tickets.js';

function getMessengerOrder (state, messengerId) {
  var order = 0;
  for (var messengersBook of state.MessengersBooks) {
    if (messengersBook.id === messengerId) {
      return order;
    }
    order++;
  }
  return -1;
}

function getTicketsForMessenger (state, messengerId) {
  const i = getMessengerOrder (state, messengerId);
  return state.MessengersBooks[i].Tickets;
}

function addTicket (tickets, index, ticket) {
  reducerTickets (tickets, {
    type:   'ADD_TICKET',
    index:  index,
    ticket: ticket,
  });
}

function deleteTicket (tickets, ticket) {
  reducerTickets (tickets, {
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

function getNewId () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace (/[xy]/g, function (c) {
      var r = Math.random () * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString (16);
    });
}

function clone (ticket) {
  const n = JSON.parse (JSON.stringify (ticket));
  n.id = getNewId ();
  n.Trip.id = getNewId ();
  n.Trip.Pick.id = getNewId ();
  n.Trip.Drop.id = getNewId ();
  return n;
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
  return n;
}

// Create a transit if a ticket is alone for a messenger.
function createTransit (state, messengerId) {
  const tickets = getTicketsForMessenger (state, messengerId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 1) {
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
  for (var messengersBook of state.MessengersBooks) {
    createTransit (state, messengersBook.id);
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
  for (var messengersBook of state.MessengersBooks) {
    deleteTransit (state, messengersBook.id);
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

function checkOrders (state) {
  for (var messengersBook of state.MessengersBooks) {
    checkOrder (state, messengersBook.id);
  }
}

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

  const i = getTicketOrder (state.TicketsToDispatch.Tickets, fromId);
  const ticket = state.TicketsToDispatch.Tickets[i];
  deleteTicket (state.TicketsToDispatch.Tickets, ticket);

  ticket.OwnerId = toMessengerId;
  const pick = clone (ticket);
  const drop = clone (ticket);
  pick.Type = 'pick';
  drop.Type = 'drop';
  addTicket (toTickets, toOrder, drop);  // first drop, for have pick/drop in this order
  addTicket (toTickets, toOrder, pick);
}

function changeToDispatch (state, element, target, source, sibling) {
  const sourceType = source.dataset.dragSource;
  if (sourceType === 'dispatch') {
    changeDispatchToDispatch (state, element, target, source, sibling);
  } else if (sourceType === 'missions') {
    changeMissionsToDispatch (state, element, target, source, sibling);
  } else if (sourceType === 'desk') {
    // changeDeskToDispatch (state, element, target, source, sibling);
  }
}

function drag (state, element, target, source, sibling) {
  const targetType = target.dataset.dragSource;
  if (targetType === 'dispatch') {
    changeToDispatch (state, element, target, source, sibling);
  } else if (targetType === 'missions') {
    // changeToMissions (element, target, source, sibling);
  } else if (targetType === 'desk') {
    // changeToDesk (element, target, source, sibling);
  }
}

export default function Drag (state = {}, action = {}) {
  switch (action.type) {
    case 'DRAG':
      state.dispatch = drag (state, action.element, action.target, action.source, action.sibling);
      break;
  }
  return state;
}
