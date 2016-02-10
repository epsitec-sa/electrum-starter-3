'use strict';

import 'babel-core/register';
import 'babel-polyfill';

export * from './all-components.js';
export ActivitiesManager from './activities-manager.js';

/******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';

import {theme, store} from './setup.js';
import {Root} from './all-components.js';

ReactDOM.render (<Root state={store.root} theme={theme}/>,
  document.getElementById ('root'));

/******************************************************************************/
