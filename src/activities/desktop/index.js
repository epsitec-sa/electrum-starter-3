'use strict';
import {Desktop} from './desktop.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  state
    .set ('width', 960)
    .set ('height', 500);
  state
    .select ('layout')
    .set ('cHeight', 64)
    .set ('lWidth', 128);

  // const activityManager = state.getInherited ('am');
  // activityManager.startActivity (state, 'launcher', 'widgets', true);
  // activityManager.startActivity (state, 'contextualizer', 'widgets', true);
};

export default Activity.Create ('desktop', Desktop, actuators, onInit);
