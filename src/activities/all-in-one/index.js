'use strict';

import AllInOne from './all-in-one.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
};

export default Activity.Create ('all-in-one', AllInOne, actuators, onInit);
