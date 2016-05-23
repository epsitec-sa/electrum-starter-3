'use strict';

import Polypheme from './polypheme.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  const expDateModifier = state.select ('exp-date');
  expDateModifier.set ('onChange', (value, state) => {
    console.log (`CHANGE ${value}`);
    console.dir (state);
    state.set ('tooltip', `${value}`);
  }).set ('onFocus', (value, state) => {
    console.log (`ONFOCUS ${value}`);
    state.set ('tooltip', `${value}`);
    console.dir (state);
  }).set ('onDefocus', (value, state) => {
    console.log (`ONDEFOCUS ${value}`);
    state.set ('tooltip', null);
    console.dir (state);
  });

  const field = state.select ('field');
  field
    .set ('value', '')
    .set ('floatingLabelText', 'TextField example')
    .set ('hintText', 'placeholder text')
    .set ('errorText', '');
};

export default Activity.Create ('polypheme', Polypheme, actuators, onInit);
