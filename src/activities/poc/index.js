'use strict';

import {Poc} from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';
const initialState = (state) => {
  state.set ('name', '<nobody>');
  state.set ('view', Poc);
};
export default (parent) => {
  return new Activity ('poc', initialState, actuators, parent);
};
