'use strict';

import Polypheme from './polypheme.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  const field = state.select ('field');
  field
    .set ('value', '')
    .set ('floatingLabelText', 'TextField example')
    .set ('hintText', 'placeholder text')
    .set ('errorText', '');
};

export default Activity.Create ('polypheme', Polypheme, actuators, onInit);
