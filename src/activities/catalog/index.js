'use strict';

import Catalog from './catalog.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  const list = state.select ('list');
  list.add ().set ('title', '1.');
  list.add ().set ('title', '2.');
  list.add ().set ('title', '3.');
  list.add ().set ('title', '4.');
  list.add ().set ('title', '5.');
};

export default Activity.Create ('catalog', Catalog, actuators, onInit);
