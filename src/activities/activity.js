'use strict';
/******************************************************************************/
function activityGuid (id) {
  function s4 () {
    return Math.floor ((1 + Math.random ()) * 0x10000)
      .toString (16)
      .substring (1);
  }
  return id + '::' + s4 () + s4 () + s4 ();
}
/******************************************************************************/

export default class Activity {
  constructor (name, stateHandlers, actuators, parent) {
    this._id = name;
    this._stateHandlers = stateHandlers;
    this._actuators = actuators;
    this._parent = parent;
    this._callerPath = this._parent;
    this._store = null;
    this._state = null;
    console.log (`Activity ${this._id} constructed from ${this._parent}`);
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
    return this._id;
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

  static Create (name, mainView, actuators, _onInit, _onRun, _onKill) {
    const handlers = {
      onInit: (state) => {
        const initialState = state.set ('view', mainView);
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
