'use strict';

import 'babel-polyfill';

import Electrum from 'electrum';
import {Store} from 'electrum-store';
import {Theme} from 'electrum-theme';

/******************************************************************************/

import ActivitiesManager from './activities-manager.js';
import PocActivity from './components/activities/poc/';
import FormsActivity from './components/activities/forms/';

export const theme = Theme.create ('default');
export const store = Store.create ();

const am = new ActivitiesManager (store);
am.registerActivity ('forms', FormsActivity);
am.registerActivity ('poc', PocActivity);
am.startActivity ('poc');
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
        console.log (`shouldComponentUpdate=${result} on <${name}>, path="${state.id}"`);
      }
    });
}

/******************************************************************************/

import {init as initStyleReload} from 'electrum-style-reload';

initStyleReload ();

/******************************************************************************/
