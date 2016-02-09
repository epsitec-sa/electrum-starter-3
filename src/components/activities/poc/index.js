'use strict';

import {Poc} from 'electrum-starter-3';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = state => state.set ('name', '<nobody>', 'view', Poc);

export default () => {
  return new Activity ('poc', initialState, actuators);
};
