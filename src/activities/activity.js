'use strict';
import Electrum from 'electrum';
import React from 'react';
export default class Activity {
  constructor (name, stateHandlers, actuators, parent) {
    this._id = Symbol.for ('[' + name + ']');
    this._stateHandlers = stateHandlers;
    this._actuators = actuators;
    this._parent = parent;
    this._callerPath = this._parent;
    this._store = null;
    this._state = null;
    console.log (`Activity ${this.id} constructed from ${this._parent}`);
  }

  get status () {
    this.state.get ('status');
  }

  set status (status) {
    this.state.set ('status', status);
  }

  get store () {
    return this._store;
  }

  get state () {
    return this.store.select (this.path);
  }

  get id () {
    return Symbol.keyFor (this._id);
  }

  get path () {
    if (this.parent) {
      return this.parent + '.' + this.id;
    } else {
      return 'activity-manager.' + this.id;
    }
  }

  get onInit () {
    return this._onEvent ('onInit');
  }

  get onRun () {
    return this._onEvent ('onRun');
  }

  get onKill () {
    return this._onEvent ('onKill');
  }

  get parent () {
    return this._parent;
  }

  get callerPath () {
    return this._callerPath;
  }

  set callerPath (path) {
    this._callerPath = path;
  }

  get actuators () {
    return this._actuators;
  }

  set view (component) {
    const view = Electrum.wrap (component.name, component);
    this.state.set ('view', view);
  }

  get view () {
    return (props) => {
      const {state} = props;
      console.log ('#AV:', state.id);
      console.dir (state);
      const MainView = state.get ('view');
      const viewerStyle = {
        color: '#222222',
        backgroundColor: '#f5f5f5',
        width: '100%'
      };
      if (MainView) {
        return (
          <section style={viewerStyle} data-activity={state.id}>
            <MainView {...Electrum.link (props)} />
          </section>
        );
      } else {
        return (
          <section style={viewerStyle} data-activity="No activity">
            <small>Unable to mount activity view for {state.id}</small>
          </section>
        );
      }
    };
  }

  init (store) {
    this._store = store;
    this.state.set (this);
    this.onInit (this.state);
    this.status = 'initialized';
  }

  run () {
    this.status = 'running';
    this.onRun (this.state);
  }

  kill () {
    // ? disposer ();
    this.status = 'killing';
    this.onKill (this.state);
  }

  _onEvent (eventName) {
    if (this._stateHandlers[eventName]) {
      if (typeof this._stateHandlers[eventName] !== 'function') {
        throw new Error (`Provided stateHandlers: ${eventName} is not a function`);
      }
      return this._stateHandlers[eventName];
    } else {
      return () => {};
    }
  }

  static RegisterNotifiers (state, onChange, onFocus, onDefocus) {
    state
      .set ('onChange', (value, state) => onChange (value, state))
      .set ('onFocus', (value, state) => onFocus (value, state))
      .set ('onDefocus', (value, state) => onDefocus (value, state));
  }

  static Create (name, mainView, actuators, _onInit, _onRun, _onKill) {
    const handlers = {
      onInit: (state) => {
        const view = Electrum.wrap (mainView.name, mainView);
        const initialState = state.set ('view', view);
        if (typeof _onInit === 'function') {
          _onInit (initialState);
        }
        console.log (`${state.id} initialized!`);
      },
      onRun: (state) => {
        if (typeof _onRun === 'function') {
          _onRun (state);
        }
        console.log (`${state.id} running!`);
      },
      onKill: (state) => {
        if (typeof _onKill === 'function') {
          _onKill (state);
        }
        console.log (`${state.id} killed!`);
      }
    };
    return (parent) => {
      return new Activity (name, handlers, actuators, parent);
    };
  }
}

/******************************************************************************/
