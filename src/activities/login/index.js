'use strict';
import {Login} from './login.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = (state) => {
  state.set ('view', Login);
};

export default (parent) => {
  return new Activity ('login', initialState, actuators, parent);
};
