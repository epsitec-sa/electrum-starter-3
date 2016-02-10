'use strict';

import {Forms} from 'electrum-starter-3';
import {WizardHome} from 'electrum-starter-3';

import command from '../../../command.js';

const changeView = (state, view) => {
  console.log (`changeView called ${view}`);
  state.set ('view', view);
};

export default {
  START_WIZARD: command ('START_WIZARD', (cmd, state) => changeView (state, WizardHome)),
  GO_HOME: command ('GO_HOME', (cmd, state) => changeView (state, Forms)),
  NEXT_PAGE: command ('NEXT_PAGE', (cmd, state) => {})
};
