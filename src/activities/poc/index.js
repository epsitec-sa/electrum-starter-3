'use strict';

import Poc from './poc.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {

  state.set ('name', '<nobody>');

  const store = state.store;
  const id    = state.id;

  store.select (id)
    .select ('icon')
    .set ('glyph', 'binoculars')
    .set ('size', '1x')
    .set ('active', '');

  store.select (id)
    .select ('badge')
    .set ('value', '666')
    .set ('active', '');

  store.select (id)
    .select ('icon-badge')
    .set ('glyph', 'binoculars')
    .set ('size', '1x')
    .set ('active', '');

  const activityManager = state.getInherited ('am');
  activityManager.startActivity (state, 'forms', 'wizard', true);
};

export default Activity.Create ('poc', Poc, actuators, onInit);
