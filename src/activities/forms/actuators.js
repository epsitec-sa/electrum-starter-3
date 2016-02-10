'use strict';
import {Forms} from './forms.js';
import {WizardHome} from './views/wizardHome.js';
import Command from 'electrum-command';

const changeView = ({view}) => {
  state.set ('view', view);
};

export default {
  START_WIZARD: Command ('START_WIZARD', changeView) ({view: WizardHome}),
  GO_HOME: Command ('GO_HOME', changeView) ({view: Forms})
};
