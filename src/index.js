'use strict';

import Electrum from 'electrum';
import {Store} from 'electrum-store';
import {Theme} from 'electrum-theme';

/******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import PocActivity from './activities/poc/';
import FormsActivity from './activities/forms/';
import DesktopActivity from './activities/desktop/';
import LoginActivity from './activities/login/';
import SessionActivity from './activities/session/';
import CatalogActivity from './activities/catalog/';
import PolyphemeActivity from './activities/polypheme/';
import ActivitiesManager from './activities-manager.js';

import 'babel-polyfill';

const theme = Theme.create ('default');
const store = Store.create ();
const am = new ActivitiesManager (store);
am.registerActivity ('login', LoginActivity);
am.registerActivity ('session', SessionActivity);
am.registerActivity ('desktop', DesktopActivity);
am.registerActivity ('forms', FormsActivity);
am.registerActivity ('poc', PocActivity);
am.registerActivity ('catalog', CatalogActivity);
am.registerActivity ('polypheme', PolyphemeActivity);
am.startMainActivity ('catalog', true);
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
