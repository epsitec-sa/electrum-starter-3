'use strict';
import {State} from 'electrum-store';
/******************************************************************************/

export default class Activity {
  constructor (id, initialState, actuators) {
    this._id = id;
    this._state = State.create (id, initialState);
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
