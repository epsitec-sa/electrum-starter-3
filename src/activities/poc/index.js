'use strict';

import {Poc} from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  state.set ('name', '<nobody>');
};

export default Activity.Create ('poc', Poc, actuators, onInit);
