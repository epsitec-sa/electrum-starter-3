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
    this._id = activityGuid (name);
    this._stateHandlers = stateHandlers;
    this._actuators = actuators;
    this._parent = parent;
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

  get actuators () {
    return this._actuators;
  }

  init (store) {
    this._store = store;
    this.onInit (this.state);
    this.state.set ('aid', this.id);
    this.state.set ('activity', this);
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
}

/******************************************************************************/
