'use strict';

import {Poc} from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const handlers = {
  onInit: (state) => {
    state.set ('name', '<nobody>');
    state.set ('view', Poc);
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
  return new Activity ('poc', handlers, actuators, parent);
};
