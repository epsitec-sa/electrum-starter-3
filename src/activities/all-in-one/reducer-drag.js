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

function getTicket (tickets, order) {
  return tickets[order];
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

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId          = element.dataset.id;
  const fromMessengerId = element.dataset.ownerId;
  const toMessengerId   = target.dataset.id;
  if (fromMessengerId === toMessengerId) {  // inside same messenger ?
    const tickets = getTicketsForMessenger (state, fromMessengerId);
    const fromOrder = getTicketOrder (tickets, fromId);
    const toOrder = getToOrder (tickets, target, sibling, fromOrder);
    const ticket = getTicket (tickets, fromOrder);
    deleteTicket (tickets, ticket);
    addTicket (tickets, toOrder, ticket);
  } else {  // from a messenger to another ?
    const fromTickets = getTicketsForMessenger (state, fromMessengerId);
    const toTickets = getTicketsForMessenger (state, toMessengerId);
    const fromOrder = getTicketOrder (fromTickets, fromId);
    const toOrder = getToOrder (toTickets, target, sibling);
    const ticket = getTicket (fromTickets, fromOrder);
    deleteTicket (fromTickets, ticket);
    ticket.OwnerId = toMessengerId;
    addTicket (toTickets, toOrder, ticket);
  }
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
