'use strict';
import {Desktop} from './desktop.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = (state) => {
  state.set ('view', Desktop);
};

export default (parent) => {
  return new Activity ('desktop', initialState, actuators, parent);
};
