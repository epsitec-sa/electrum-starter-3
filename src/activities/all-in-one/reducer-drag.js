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

function getInvertedType (type) {
  if (type.startsWith ('pick')) {
    return 'drop' + type.substring (4, type.length);
  } else if (type.startsWith ('drop')) {
    return 'pick' + type.substring (4, type.length);
  } else {
    throw new Error (`Invalid type ${type}`);
  }
}

function getNewId (currentId) {
  return currentId + '-bis';
}

function getNewTransit (ticket) {
  const n = Object.assign ({}, ticket);
  if (n.Type === 'pick') {
    n.Type = 'drop-transit';
    n.Trip.Drop.LongDescription = 'Zone de transit à définir...';
    n.Trip.Drop.ShortDescription = 'Transit';
    n.Trip.Drop.PlanedTime = ticket.Trip.Pick.PlanedTime;
  } else if (n.Type === 'drop') {
    n.Type = 'pick-transit';
    n.Trip.Pick.LongDescription = 'Zone de transit à définir...';
    n.Trip.Pick.ShortDescription = 'Transit';
    n.Trip.Pick.PlanedTime = ticket.Trip.Drop.PlanedTime;
  }
  n.id = getNewId (n.id);
  return n;
}

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

function checkOrders (state, messengerId) {
  const tickets = getTicketsForMessenger (state, messengerId);
  for (var ticket of tickets) {
    const same = getTicketsFromMissionId (tickets, ticket.Trip.MissionId);
    if (same.length === 2 && same[0].Type === 'drop' && same[1].Type === 'pick') {
      same[0].Warning = 'reverse-pick-drop';
      same[1].Warning = 'reverse-pick-drop';
    } else {
      ticket.Warning = '';
    }
  }
}

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId          = element.dataset.id;
  const fromMessengerId = element.dataset.ownerId;
  const toMessengerId   = target.dataset.id;
  if (fromMessengerId === toMessengerId) {  // inside same messenger ?
    const tickets = getTicketsForMessenger (state, fromMessengerId);
    const fromOrder = getTicketOrder (tickets, fromId);
    const toOrder = getToOrder (tickets, target, sibling, fromOrder);
    const ticket = tickets[fromOrder];
    deleteTicket (tickets, ticket);
    addTicket (tickets, toOrder, ticket);
    checkOrders (state, fromMessengerId);
  } else {  // from a messenger to another ?
    const fromTickets = getTicketsForMessenger (state, fromMessengerId);
    const toTickets = getTicketsForMessenger (state, toMessengerId);
    const fromOrder = getTicketOrder (fromTickets, fromId);
    const toOrder = getToOrder (toTickets, target, sibling);
    const ticket = fromTickets[fromOrder];
    deleteTicket (fromTickets, ticket);
    ticket.OwnerId = toMessengerId;
    addTicket (toTickets, toOrder, ticket);
    checkOrders (state, fromMessengerId);
    checkOrders (state, toMessengerId);
  }
  createTransits (state);
}

function changeToDispatch (state, element, target, source, sibling) {
  const sourceType = source.dataset.dragSource;
  if (sourceType === 'dispatch') {
    changeDispatchToDispatch (state, element, target, source, sibling);
  } else if (sourceType === 'missions') {
    // changeMissionsToDispatch (state, element, target, source, sibling);
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
