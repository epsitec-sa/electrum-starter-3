'use strict';

import Electrum from 'electrum';
import {Store} from 'electrum-store';
import {Theme} from 'electrum-theme';

/******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import PocActivity from './activities/poc/';
import FormsActivity from './activities/forms/';
import TabsActivity from './activities/tabs/';
import ActivitiesManager from './activities-manager.js';
import createAction from './create-action.js';
import 'babel-polyfill';

const theme = Theme.create ('default');
const store = Store.create ();
const am = new ActivitiesManager (store);
am.registerActivity ('forms', FormsActivity);
am.registerActivity ('poc', PocActivity);
am.registerActivity ('tabs', TabsActivity);
const mainActivity = am.startMainActivity ('tabs');
am.doActionInActivity (mainActivity.id, createAction ('TABS_SET_PATH', {path: mainActivity.path}));
Electrum.reset ();
Electrum.useBus (am);


if (process.env.NODE_ENV === 'development') {
  Electrum.configureLog ('shouldComponentUpdate',
    function (component, nextProps, nextState, result) {
      const {state, theme} = component.props;
      const name = component.constructor.displayName;
      if (!state || !theme) {
        console.error (`You forgot to link Electrum component <${name}>`);
      } else {
        // console.log (`shouldComponentUpdate=${result} on <${name}>, path="${state.id}"`);
      }
    });
}

/******************************************************************************/

import {init as initStyleReload} from 'electrum-style-reload';

initStyleReload ();

/******************************************************************************/

import {Root} from './root.js';

ReactDOM.render (<Root state={store.root} theme={theme}/>,
  document.getElementById ('root'));
