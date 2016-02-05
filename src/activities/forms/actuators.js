'use strict';
import {Forms} from './forms.js';
import {WizardHome} from './views/wizardHome.js';

const changeView = (store, view) => {
  store.select ('app').set ('view', view);
};


export default {
  START_WIZARD: (store) => changeView (store, WizardHome),
  GO_HOME: (store) => changeView (store, Forms)
};
