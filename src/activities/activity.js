'use strict';

/******************************************************************************/
function activityGuid (id) {
  function s4 () {
    return Math.floor ((1 + Math.random ()) * 0x10000)
      .toString (16)
      .substring (1);
  }
  return id + '::' + s4 () + s4 () + '-' + s4 () + '-' + s4 () + '-' +
    s4 () + '-' + s4 () + s4 () + s4 ();
}
/******************************************************************************/

export default class Activity {
  constructor (id, initialStateInitializer, actuators) {
    this._id = activityGuid (id);
    this._actuators = actuators;
    this._init = initialStateInitializer;
  }

  get id () {
    return this._id;
  }

  get actuators () {
    return this._actuators;
  }

  setup (state) {
    this._init (state);
  }
}

/******************************************************************************/
