'use strict';

import {Poc} from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';
const initialState = {
  name: '<nobody>',
  view: Poc
};
export const PocActivity = new Activity ('poc', initialState, actuators);
