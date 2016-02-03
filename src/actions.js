'use strict';
const curry = require ('ramda').curry;
const merge = require ('ramda').merge;

// Base action creator
const createCommand = (command) => ({type: command});
const setPayload = (action, payload) => merge (action, payload);

const createAction = curry (
  (command, payload) => setPayload (createCommand (command), payload)
);

export default createAction;
