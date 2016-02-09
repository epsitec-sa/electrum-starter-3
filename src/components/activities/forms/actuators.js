'use strict';

import {Forms} from 'electrum-starter-3';
import {WizardHome} from 'electrum-starter-3';

const changeView = (state, view) => {
  state.set ('view', view);
};


export default {
  START_WIZARD: (store) => changeView (store, WizardHome),
  GO_HOME: (store) => changeView (store, Forms)
};
