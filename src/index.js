'use strict';

export * from './all-components.js';
export createAction from './create-action.js';
export ActivitiesManager from './activities-manager.js';

/******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';

import {theme, store} from './setup.js';
import {Root} from './all-components.js';

ReactDOM.render (<Root state={store.root} theme={theme}/>,
  document.getElementById ('root'));

/******************************************************************************/
