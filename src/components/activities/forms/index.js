'use strict';

import {Forms} from 'electrum-starter-3';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = state => state.set ('view', Forms);

export default () => {
  return new Activity ('forms', initialState, actuators);
};
