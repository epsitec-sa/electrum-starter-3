'use strict';

import {Forms} from './forms.js';
import actuators from './actuators.js';
import Activity from '../activity.js';
const initialState = {
  view: Forms
};
export const PocActivity = new Activity ('forms', initialState, actuators);
