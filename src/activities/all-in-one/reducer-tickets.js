'use strict';

function replaceTicket (state, index, ticket) {
  state[index] = ticket;
  return state;
}

function addTicket (state, index, ticket) {
  state.splice (index, 0, ticket);
  return state;
}

function deleteTicket (state, ticket) {
  const i = state.indexOf (ticket);
  if (i !== -1) {
    state.splice (i, 1);
  }
  return state;
}

export default function Polypheme (state = {}, action = {}) {
  switch (action.type) {
    case 'REPLACE_TICKET':
      state.dispatch = replaceTicket (state, action.index, action.ticket);
      break;
    case 'ADD_TICKET':
      state.dispatch = addTicket (state, action.index, action.ticket);
      break;
    case 'DELETE_TICKET':
      state.dispatch = deleteTicket (state, action.ticket);
      break;
  }
  return state;
}
