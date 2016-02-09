'use strict';

import {Forms} from './forms.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = state => state.set ('view', Forms);

export default () => {
  return new Activity ('forms', initialState, actuators);
};
