'use strict';

import reducerTickets from './reducer-tickets.js';

function addTicket (index, ticket) {
  reducerTickets (window.document.data.new.MessengersBooks[0].Tickets, {
    type:   'ADD_TICKET',
    index:  index,
    ticket: ticket,
  });
}

function deleteTicket (ticket) {
  reducerTickets (window.document.data.new.MessengersBooks[0].Tickets, {
    type:   'DELETE_TICKET',
    ticket: ticket,
  });
}

function getTicket (order) {
  const tickets = window.document.data.new.MessengersBooks[0].Tickets;
  return tickets[order];
}

function getTicketOrder (id) {
  const tickets = window.document.data.new.MessengersBooks[0].Tickets;
  var order = 0;
  for (var ticket of tickets) {
    if (ticket.id === id) {
      return order;
    }
    order++;
  }
  return -1;
}

function getToOrder (target, sibling, fromOrder) {
  let toOrder = -1;
  if (sibling === null) {
    toOrder = target.children.length - 1;  // if no sibling, use last element
  } else {
    toOrder = getTicketOrder (sibling.dataset.id);
    if (fromOrder && toOrder > fromOrder) {
      toOrder--;  // if target under source, count as if the source was not there
    }
  }
  return toOrder;
}

function changeDispatchToDispatch (state, element, target, source, sibling) {
  const fromId = element.dataset.id;
  const fromOrder = getTicketOrder (fromId);
  const toOrder = getToOrder (target, sibling, fromOrder);
  const ticket = getTicket (fromOrder);
  deleteTicket (ticket);
  addTicket (toOrder, ticket);
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
