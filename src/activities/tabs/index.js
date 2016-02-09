'use strict';
import {TabsManager} from './tabs-manager.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const initialState = (state) => {
  state.set ('view', TabsManager);
};

export default (parent) => {
  return new Activity ('tabs', initialState, actuators, parent);
};
