'use strict';
import WizardHome from './views/wizard-home.js';
import Command from 'electrum-command';
import Forms from './forms.js';
const changeView = ({view}, state) => {
  if (view) {
    const activity = state.get ();
    activity.view = view;
  }
};

export default {
  START_WIZARD: Command ('START_WIZARD', changeView) ({view: WizardHome}),
  GO_HOME: Command ('GO_HOME', changeView) ({view: Forms})
};
