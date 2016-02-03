'use strict';

import Electrum from 'electrum';
import {Store} from 'electrum-store';
import {Theme} from 'electrum-theme';

/******************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import {Poc} from './views/poc.js';
import actuators from './actuators.js';
import 'babel-polyfill';

/******************************************************************************/

class Bus {
  constructor (store, actuators) {
    this._store = store;
    this._actuators = actuators;
    this._generation = store.generation;
  }

  get store () {
    return this._store;
  }

  get actuators () {
    return this._actuators;
  }

  dispatch (props, message) {
    const {id, action} = props;
    console.log (`id=${id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      if (this.actuators[action.type]) {
        this.actuators[action.type] (this.store, action);
        console.log (this.store);
      }
    }
    this.update ();
  }

  notify (props, value, ...states) {
    console.log (`notify value=${value}`);
  }

  update () {
    if (this._root) {
      if (this._generation !== this._store.generation) {
        this._root.forceUpdate ();
        this._generation = this._store.generation;
      }
    }
  }

  attach (root) {
    if (this._root) {
      console.log ('Bus.attach called multiple times');
    }
    this._root = root;
  }

  detach (root) {
    if (this._root === root) {
      this._root = null;
    } else {
      console.log ('Bus.detach called with unexpected root');
    }
  }
}

/******************************************************************************/

const theme = Theme.create ('default');
const store = Store.create ();
const bus = new Bus (store, actuators);
store.select ('demo').set ('name', '<nobody>');
store.select ('demo').set ('main', Poc);

// import {theme} from './theme.js';

Electrum.reset ();
Electrum.useBus (bus);
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

import {Root} from './root.js';

ReactDOM.render (<Root state={store.root} theme={theme}/>,
  document.getElementById ('root'));
