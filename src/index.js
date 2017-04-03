import Electrum from 'electrum';
import {Store} from 'electrum-store';
import {Theme} from 'electrum-theme';

/******************************************************************************/

import {React} from 'electrum';
import ReactDOM from 'react-dom';
import PocActivity from './activities/poc/';
import FormsActivity from './activities/forms/';
import DesktopActivity from './activities/desktop/';
import LoginActivity from './activities/login/';
import SessionActivity from './activities/session/';
import CatalogActivity from './activities/catalog/';
import SynchroActivity from './activities/synchro/';
import AllInOneActivity from './activities/all-in-one/';
import ActivitiesManager from './activities-manager.js';

import 'babel-polyfill';

const themes = [
  'default',
  'compact-mono',
  'default-green',
  'special-green',
  'smooth-green',
  'compact-pink',
  'default-pink',
];
const store = Store.create ();
store.root.set ('currentThemeIndex', 0);
const am = new ActivitiesManager (store);
am.registerActivity ('login', LoginActivity);
am.registerActivity ('session', SessionActivity);
am.registerActivity ('desktop', DesktopActivity);
am.registerActivity ('forms', FormsActivity);
am.registerActivity ('poc', PocActivity);
am.registerActivity ('catalog', CatalogActivity);
am.registerActivity ('synchro', SynchroActivity);
am.registerActivity ('all-in-one', AllInOneActivity);

// am.startMainActivity ('synchro', true);
am.startMainActivity ('all-in-one', true);

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

ReactDOM.render (<Root store={store} themes={themes} />,
  document.getElementById ('root'));
