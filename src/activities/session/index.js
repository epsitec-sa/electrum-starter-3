'use strict';
import {SessionManager} from './session-manager.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const handlers = {
  onInit: (state) => {
    state.set ('view', SessionManager);
    console.log (`${state.id} initialized!`);
  },
  onRun: (state) => {
    state.set ('sessionManagerPath', state.id);
    console.log (`${state.id} running! sessionManagerPath=${state.id}`);
  },
  onKill: (state) => {
    console.log (`${state.id} killed!`);
  }
};

export default (parent) => {
  return new Activity ('session', handlers, actuators, parent);
};
