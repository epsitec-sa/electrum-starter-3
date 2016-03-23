'use strict';

import Catalog from './catalog.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  const field = state.select ('field');
  field
    .set ('', '')
    .set ('floatingLabelText', 'TextField example')
    .set ('hintText', 'placeholder text')
    .set ('errorText', '');

  const fieldWithError = state.select ('fieldWithError');
  fieldWithError
    .set ('', 'i love banana')
    .set ('floatingLabelText', 'With error')
    .set ('hintText', 'placeholder/hint text')
    .set ('errorText', 'oops... error');

  const multilineField = state.select ('multilineField');
  multilineField
    .set ('', `Hello,\ni am a multiline field!\nbye bye :)`)
    .set ('multiLine', true)
    .set ('rows', 2)
    .set ('rowsMax', 10)
    .set ('floatingLabelText', 'Mutliline example')
    .set ('hintText', 'placeholder text')
    .set ('errorText', '');

  const radioRed = state.select ('radioRed');
  radioRed
    .set ('checked', true);

  const checkRed = state.select ('checkRed');
  checkRed
    .set ('checked', true);

  const toggle1 = state.select ('toggle1');
  toggle1
    .set ('labelPosition', 'right')
    .set ('toggled', true);

  const toggle2 = state.select ('toggle2');
  toggle2
    .set ('labelPosition', 'right');

  const datePicker = state.select ('datePicker');
  datePicker
    .set ('defaultDate', '3/31/2016');

  const basiclist = state.select ('basiclist');
  basiclist.add ().set ('title', '1.');
  basiclist.add ().set ('title', '2.');
  basiclist.add ().set ('title', '3.');
  basiclist.add ().set ('title', '4.');
  basiclist.add ().set ('title', '5.');
};

export default Activity.Create ('catalog', Catalog, actuators, onInit);
