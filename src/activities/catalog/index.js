'use strict';

import Catalog from './catalog.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onInit = (state) => {
  const field = state.select ('field');
  field
    .set ('', '')
    .set ('floating', 'TextField example')
    .set ('hint', 'placeholder text')
    .set ('error', '');

  const fieldWithError = state.select ('fieldWithError');
  fieldWithError
    .set ('', 'i love banana')
    .set ('floating', 'With error')
    .set ('hint', 'placeholder/hint text')
    .set ('error', 'oops... error');

    const multilineField = state.select ('multilineField');
    multilineField
      .set ('', `Hello,\ni am a multiline field!\nbye bye :)`)
      .set ('multiLine', true)
      .set ('rows', 2)
      .set ('rowsMax', 10)
      .set ('floating', 'Mutliline example')
      .set ('hint', 'placeholder text')
      .set ('error', '');

  const list = state.select ('list');
  list.add ().set ('title', '1.');
  list.add ().set ('title', '2.');
  list.add ().set ('title', '3.');
  list.add ().set ('title', '4.');
  list.add ().set ('title', '5.');
};

export default Activity.Create ('catalog', Catalog, actuators, onInit);
