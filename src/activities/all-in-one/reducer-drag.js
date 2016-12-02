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

function addTicket (state, messengerId, index, ticket) {
  reducerTickets (getTicketsForMessenger (state, messengerId), {
    type:   'ADD_TICKET',
    index:  index,
    ticket: ticket,
  });
}

function deleteTicket (state, messengerId, ticket) {
  reducerTickets (getTicketsForMessenger (state, messengerId), {
    type:   'DELETE_TICKET',
    ticket: ticket,
  });
}

function getTicket (state, messengerId, order) {
  const tickets = getTicketsForMessenger (state, messengerId);
  return tickets[order];
}

function getTicketOrder (state, messengerId, id) {
  const tickets = getTicketsForMessenger (state, messengerId);
  var order = 0;
  for (var ticket of tickets) {
    if (ticket.id === id) {
      return order;
    }
    order++;
  }
  return -1;
}

function getToOrder (state, messengerId, target, sibling, fromOrder) {
  let toOrder = -1;
  if (sibling === null) {
    toOrder = target.children.length - 1;  // if no sibling, use last element
  } else {
    toOrder = getTicketOrder (state, messengerId, sibling.dataset.id);
    if (fromOrder && toOrder > fromOrder) {
      toOrder--;  // if target under source, count as if the source was not there
    }
  }
  return toOrder;
}

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId      = element.dataset.id;
  const messengerId = element.dataset.ownerId;
  const fromOrder = getTicketOrder (state, messengerId, fromId);
  const toOrder = getToOrder (state, messengerId, target, sibling, fromOrder);
  const ticket = getTicket (state, messengerId, fromOrder);
  deleteTicket (state, messengerId, ticket);
  addTicket (state, messengerId, toOrder, ticket);
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
