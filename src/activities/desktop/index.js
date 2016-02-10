'use strict';
import {Desktop} from './desktop.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const handlers = {
  onInit: (state) => {
    state.set ('view', Desktop);
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
  return new Activity ('desktop', handlers, actuators, parent);
};
