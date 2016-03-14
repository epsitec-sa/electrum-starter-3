'use strict';

import Poc from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  state.set ('name', '<nobody>')
    .set ('glyph', 'binoculars').set ('size', '5x')
    .set ('value', '12');
  const activityManager = state.getInherited ('am');
  activityManager.startActivity (state, 'forms', 'wizard', true);
};

export default Activity.Create ('poc', Poc, actuators, onInit);
