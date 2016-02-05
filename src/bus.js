'use strict';
/******************************************************************************/

export default class Bus {
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
