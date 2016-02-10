'use strict';
import {SessionManager} from './session-manager.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = (state) => {
  state.set ('view', SessionManager);
};

export default (parent) => {
  return new Activity ('sessions', initialState, actuators, parent);
};
