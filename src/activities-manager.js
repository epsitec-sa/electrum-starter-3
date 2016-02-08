'use strict';
import {State} from 'electrum-store';
import createAction from './create-action.js';
/******************************************************************************/
const initialState = State.create ('am', {
  currentActivityId: null,
  activities: {},
  registry: {}
});

export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this._store.setState (initialState);
    this._generation = store.generation;
    this._runningCounter = 0;
    this._launchableCounter = 0;
  }

  static startActivity (activityName) {
    return createAction ('START_ACTIVITY', {
      name: activityName
    });
  }

  static switchActivity (activityId) {
    return createAction ('SWITCH_ACTIVITY', {
      id: activityId
    });
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

  get currentActivityId () {
    return this.state.get ('currentActivityId');
  }

  set currentActivityId (activityId) {
    if (!activityId) {
      throw new Error (`You must provide an activity id`);
    }
    this.state.set ('currentActivityId', activityId);
    const activity = this.activities[activityId];
    this.state.set  ('currentActivity', activity);
  }

  registerActivity (name, activityCreator) {
    if (this.registry[name]) {
      throw new Error (`Activity already registered: ${name}`);
    }
    this.registry[name] = activityCreator;
    this.state.select ('launchable.' + this._launchableCounter++).set ('name', name);
    console.log (`Activity registered: ${name}`);
  }

  startActivity (name) {
    const activity = this.registry[name] ();
    // Map actuators
    this.activities[activity.id] = activity;
    // Initialize activity state
    this.store.setState (activity.state);
    // Add activity id in running list
    this.state.select ('running.' + this._runningCounter++).set ('aid', activity.id);
    // set current activity id
    this.currentActivityId = activity.id;
    console.log (`Activity ${name} started with id: ${activity.id}`);
  }

  doActionInActivity (action) {
    if (!this.currentActivityId) {
      throw new Error (`Please set a current activity before running action in your app`);
    }
    if (this.activities[this.currentActivityId].actuators[action.type]) {
      console.log (`do ${action.type} in ${this.currentActivityId}`);
      this.activities[this.currentActivityId].actuators[action.type] (
        this.store.select (this.currentActivityId),
        action,
        this.store,
        this.store,
        this.doActionInActivity
      );
    } else {
      console.log (`cannot do ${action.type} in ${this.currentActivityId}`);
    }
  }

  dispatch (props, message) {
    const {id, action} = props;
    console.log (`id=${id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      switch (action.type)
      {
      case 'SWITCH_ACTIVITY': {
        this.currentActivityId = action.id;
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
