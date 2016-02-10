'use strict';

import {Forms} from 'electrum-starter-3';
import {WizardHome} from 'electrum-starter-3';
import Command from 'electrum-command';

const changeView = (state, view) => {
  console.log (`changeView called ${view}`);
  state.set ('view', view);
};

export default {
  START_WIZARD: Command ('START_WIZARD', (cmd, state) => changeView (state, WizardHome)),
  GO_HOME: Command ('GO_HOME', (cmd, state) => changeView (state, Forms)),
  NEXT_PAGE: Command ('NEXT_PAGE', (cmd, state) => {})
};
