'use strict';

import Synchro from './synchro.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
};

export default Activity.Create ('synchro', Synchro, actuators, onInit);
