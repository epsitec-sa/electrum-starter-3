'use strict';
import {Login} from './login.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const handlers = {
  onInit: (state) => {
    state.set ('view', Login);
    console.log (`${state.id} initialized!`);
  },
  onRun: (state) => {
    console.log (`${state.id} running!`);
  },
  onKill: (state) => {
    console.log (`${state.id} killed!`);
  }
};

export default (parent) => {
  return new Activity ('login', handlers, actuators, parent);
};
