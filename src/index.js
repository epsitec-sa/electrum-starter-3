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
    this.store = store;
    this.actuators = actuators;
  }

  dispatch (props, message) {
    const {id, action} = props;
    const oldGen = this.store.generation;
    console.log (`id=${id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      if (this.actuators[action.type]) {
        this.actuators[action.type] (this.store, action);
        console.log (this.store);
      }
    }
    if (this.store.generation !== oldGen) {
      this.update ();
    }
  }

  notify (props, value, ...states) {
    console.log (`notify value=${value}`);
  }

  update () {
    if (this._root) {
      this._root.forceUpdate ();
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
store.select ('demo').set ('name', 'Paul');
store.select ('demo').set ('main', Poc);

// import {theme} from './theme.js';

Electrum.reset ();
Electrum.useBus (bus);
if (process.env.NODE_ENV === 'development') {
  Electrum.configureLog ('shouldComponentUpdate',
    function (component, nextProps, nextState, result) {
      console.log (`shouldComponentUpdate=${result} on <${
        component.constructor.displayName}>, path="${component.props.state.id}"`);
    });
}

/******************************************************************************/

import {init as initStyleReload} from 'electrum-style-reload';

initStyleReload ();

/******************************************************************************/

import {Root} from './root.js';

ReactDOM.render (<Root state={store.root} theme={theme}/>,
  document.getElementById ('root'));
