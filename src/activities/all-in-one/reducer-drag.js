'use strict';

import reducerTickets from './reducer-tickets.js';

function getTicketsForMessenger (state) {
  return state.MessengersBooks[0].Tickets;
}

function addTicket (state, index, ticket) {
  reducerTickets (getTicketsForMessenger (state), {
    type:   'ADD_TICKET',
    index:  index,
    ticket: ticket,
  });
}

function deleteTicket (state, ticket) {
  reducerTickets (getTicketsForMessenger (state), {
    type:   'DELETE_TICKET',
    ticket: ticket,
  });
}

function getTicket (state, order) {
  const tickets = getTicketsForMessenger (state);
  return tickets[order];
}

function getTicketOrder (state, id) {
  const tickets = getTicketsForMessenger (state);
  var order = 0;
  for (var ticket of tickets) {
    if (ticket.id === id) {
      return order;
    }
    order++;
  }
  return -1;
}

function getToOrder (state, target, sibling, fromOrder) {
  let toOrder = -1;
  if (sibling === null) {
    toOrder = target.children.length - 1;  // if no sibling, use last element
  } else {
    toOrder = getTicketOrder (state, sibling.dataset.id);
    if (fromOrder && toOrder > fromOrder) {
      toOrder--;  // if target under source, count as if the source was not there
    }
  }
  return toOrder;
}

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId = element.dataset.id;
  const fromOrder = getTicketOrder (state, fromId);
  const toOrder = getToOrder (state, target, sibling, fromOrder);
  const ticket = getTicket (state, fromOrder);
  deleteTicket (state, ticket);
  addTicket (state, toOrder, ticket);
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
