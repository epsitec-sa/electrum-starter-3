'use strict';
import {State} from 'electrum-store';
/******************************************************************************/
const initialState = State.create ('am', {
  currentActivity: null,
  activities: {},
  registry: {}
});

export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this._store.setState (initialState);
    this._generation = store.generation;
  }

  get store () {
    return this._store;
  }

  get state () {
    return this._store.select ('am');
  }

  get activities () {
    return this.state.get ('activities');
  }

  get registry () {
    return this.state.get ('registry');
  }

  get currentActivity () {
    return this.state.get ('currentActivity');
  }

  set currentActivity (activityId) {
    if (!activityId) {
      throw new Error (`You must provide an activity id`);
    }
    this.state.set ('currentActivity', activityId);
  }

  registerActivity (name, activityCreator) {
    if (this.registry[name]) {
      throw new Error (`Activity already registered: ${name}`);
    }
    this.registry[name] = activityCreator;
    console.log (`Activity registered: ${name}`);
  }

  startActivity (name) {
    const activity = this.registry[name] ();
    this.activities[activity.id] = activity.actuators;
    this.store.setState (activity.state);
    this.currentActivity = activity.id;
    console.log (`Activity ${name} started with id: ${activity.id}`);
  }

  doActionInActivity (action) {
    if (!this.currentActivity) {
      throw new Error (`Please set a current activity before running action in your app`);
    }
    if (this.activities[this.currentActivity][action.type]) {
      console.log (`do ${action.type} in ${this.currentActivity}`);
      this.activities[this.currentActivity][action.type] (
        this.store.select (this.currentActivity),
        action,
        this.store,
        this.store,
        this.doActionInActivity
      );
    } else {
      console.log (`cannot do ${action.type} in ${this.currentActivity}`);
    }
  }

  dispatch (props, message) {
    const {id, action} = props;
    console.log (`id=${id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      switch (action.type)
      {
      case 'SWITCH_ACTIVITY': {
        this.currentActivity = action.id;
        break;
      }
      case 'START_ACTIVITY': {
        this.startActivity (action.name);
        break;
      }
      default:
        this.doActionInActivity (action);
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
        console.log ('UPDATE!');
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
