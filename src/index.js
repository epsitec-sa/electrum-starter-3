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

import DefaultThemeConfig from '../../electrum-theme/src/themes/default.js';
import DefaultGreenThemeConfig from '../../electrum-theme/src/themes/default-green.js';
import DefaultPinkThemeConfig from '../../electrum-theme/src/themes/default-pink.js';
import SpecialGreenThemeConfig from '../../electrum-theme/src/themes/special-green.js';
import CompactPinkThemeConfig from '../../electrum-theme/src/themes/compact-pink.js';
import CompactMonoThemeConfig from '../../electrum-theme/src/themes/compact-mono.js';
const defaultTheme = Theme.create ('default', DefaultThemeConfig);
const defaultGreenTheme = Theme.create ('default', DefaultGreenThemeConfig);
const defaultPinkTheme = Theme.create ('default', DefaultPinkThemeConfig);
const specialGreenTheme = Theme.create ('default', SpecialGreenThemeConfig);
const compactPinkTheme = Theme.create ('default', CompactPinkThemeConfig);
const compactMonoTheme = Theme.create ('default', CompactMonoThemeConfig);

const themes = [
  defaultTheme,
  defaultGreenTheme,
  defaultPinkTheme,
  specialGreenTheme,
  compactPinkTheme,
  compactMonoTheme
];

const store = Store.create ();
const currentTheme = 0;
const am = new ActivitiesManager (store);
am.registerActivity ('login', LoginActivity);
am.registerActivity ('session', SessionActivity);
am.registerActivity ('desktop', DesktopActivity);
am.registerActivity ('forms', FormsActivity);
am.registerActivity ('poc', PocActivity);
am.registerActivity ('catalog', CatalogActivity);
am.registerActivity ('polypheme', PolyphemeActivity);
am.startMainActivity ('polypheme', true);
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

ReactDOM.render (<Root state={store.root} theme={themes[currentTheme]} />,
  document.getElementById ('root'));
