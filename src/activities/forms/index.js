'use strict';

import {Forms} from './forms.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const handlers = {
  onInit: (state) => {
    state.set ('view', Forms);
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
  return new Activity ('forms', handlers, actuators, parent);
};
