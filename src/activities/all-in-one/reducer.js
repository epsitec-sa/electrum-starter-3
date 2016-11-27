'use strict';

function addTrip (state, tripId, trip) {
  state[tripId] = trip;
  return state;
}

function deleteTrip (state, tripId) {
  delete state[tripId];
  return state;
}

function addDispatch (state, ticketId, messenger) {
  const x = state[messenger];
  x.push (ticketId);
  return state;
}

function deleteDispatch (state, ticketId, messenger) {
  const x = state[messenger];
  const i = x.indexOf (ticketId);
  x.splice (i, 1);
  return state;
}

function addMission (state, tripId) {
  state.push (tripId);
  return state;
}

function deleteMission (state, tripId) {
  const i = state.indexOf (tripId);
  state.splice (i, 1);
  return state;
}

function addDesk (state, tripId) {
  for (var glue of state) {
    if (glue.tripIds.length === 0) {
      glue.tripIds.push (tripId);
    }
  }
  return state;
}

function deleteDesk (state, tripId) {
  for (var glue of state) {
    const i = glue.tripIds.indexOf (tripId);
    if (i > -1) {
      glue.tripIds.splice (i, 1);
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
    case 'ADD_DISPATCH':
      state.dispatch = addDispatch (state.dispatch, action.ticketId, action.messenger);
      break;
    case 'DELETE_DISPATCH':
      state.dispatch = deleteDispatch (state.dispatch, action.ticketId, action.messenger);
      break;
    case 'ADD_MISSION':
      state.missions = addMission (state.missions, action.tripId);
      break;
    case 'DELETE_MISSION':
      state.missions = deleteMission (state.missions, action.tripId);
      break;
    case 'ADD_DESK':
      state.desk = addDesk (state.desk, action.tripId);
      break;
    case 'DELETE_DESK':
      state.desk = deleteDesk (state.desk, action.tripId);
      break;
  }
  return state;
}
