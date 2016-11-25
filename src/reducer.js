'use strict';

function addTrip (state, tripId, trip) {
  state[tripId] = trip;
  return state;
}

function deleteTrip (state, tripId) {
  delete state[tripId];
  return state;
}

function addMessengerTicket (state, ticketId, messenger) {
  const x = state[messenger];
  x.push (ticketId);
  return state;
}

function deleteMessengerTicket (state, ticketId, messenger) {
  const x = state[messenger];
  const i = x.indexOf (ticketId);
  x.splice (i, 1);
  return state;
}

function addTripBoxTicket (state, tripId) {
  state.push (tripId);
  return state;
}

function deleteTripBoxTicket (state, tripId) {
  const i = state.indexOf (tripId);
  state.splice (i, 1);
  return state;
}

function addGlueTicket (state, tripId) {
  for (var glue of state) {
    if (!glue.tripId) {
      glue.tripId = tripId;
    }
  }
  return state;
}

function deleteGlueTicket (state, tripId) {
  for (var glue of state) {
    if (glue.tripId === tripId) {
      delete glue.tripId;
    }
  }
  return state;
}

export default function Polypheme (state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_TRIP':
      state.trips = addTrip (state.trips, action.tripId, action.trip);
      break;
    case 'DELETE_TRIP':
      state.trips = deleteTrip (state.trips, action.tripId);
      break;
    case 'ADD_MESSENGER_TICKET':
      state.messengersContent = addMessengerTicket (state.messengersContent, action.ticketId, action.messenger);
      break;
    case 'DELETE_MESSENGER_TICKET':
      state.messengersContent = deleteMessengerTicket (state.messengersContent, action.ticketId, action.messenger);
      break;
    case 'ADD_TRIPBOX_TICKET':
      state.tripBoxContent = addTripBoxTicket (state.tripBoxContent, action.tripId);
      break;
    case 'DELETE_TRIPBOX_TICKET':
      state.tripBoxContent = deleteTripBoxTicket (state.tripBoxContent, action.tripId);
      break;
    case 'ADD_GLUE_TICKET':
      state.glueContent = addGlueTicket (state.glueContent, action.tripId);
      break;
    case 'DELETE_GLUE_TICKET':
      state.glueContent = deleteGlueTicket (state.glueContent, action.tripId);
      break;
  }
  return state;
}
