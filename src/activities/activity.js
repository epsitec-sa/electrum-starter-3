'use strict';
import {State} from 'electrum-store';

/******************************************************************************/
function activityGuid (id) {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return id + '::' + s4 () + s4 () + '-' + s4 () + '-' + s4 () + '-' +
    s4 () + '-' + s4 () + s4 () + s4 ();
}
/******************************************************************************/

export default class Activity {
  constructor (id, initialState, actuators) {
    this._id = activityGuid (id);
    this._state = State.create (this._id, initialState);
    this._actuators = actuators;
  }

  get id () {
    return this._id;
  }

  get state () {
    return this._state;
  }

  get actuators () {
    return this._actuators;
  }
}

/******************************************************************************/
