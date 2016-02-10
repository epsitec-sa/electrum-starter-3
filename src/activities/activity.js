'use strict';
import {State} from 'electrum-store';

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
  constructor (name, initializer, actuators, parent) {
    this._id = activityGuid (name);
    if (typeof initializer !== 'function') {
      throw new Error (`Provided initializer is not a function`);
    }
    this._initializer = initializer;
    this._actuators = actuators;
    this._parent = parent ? parent : '';
    this._store = null;
    this._state = null;
  }

  initialize (store) {
    this._store = store;
    this.initializer (this.state);
    this.state.set ('aid', this.id);
    this.state.set ('activity', this);
    this.status = 'initialized';
    console.log ('Activity initialized');
  }

  run () {
    this.status = 'running';
  }

  kill () {
    // ? disposer ();
    this.status = 'killing';
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
    return this.store.select ('activity-manager.' + this.path);
  }

  get id () {
    return this._id;
  }

  get path () {
    if (this.parent) {
      return this.parent.path + '.' + this.id;
    } else {
      return this.id;
    }
  }

  get initializer () {
    return this._initializer;
  }

  get parent () {
    return this._parent;
  }

  get actuators () {
    return this._actuators;
  }
}

/******************************************************************************/
