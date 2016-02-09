'use strict';

import {startActivity, switchActivity} from './actions.js';

/******************************************************************************/

export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this._store
      .select ('am')
      .set (this)
      .set ('currentActivityId', null);
    this._generation = store.generation;
  }

  get store () {
    return this._store;
  }

  get state () {
    return this.store.select ('am');
  }

  get activities () {
    return this.state.select ('activities');
  }

  get registry () {
    return this.state.select ('registry');
  }

  get currentActivity () {
    return this.activities.select (this.currentActivityId);
  }

  get currentActivityId () {
    return this.state.get ('currentActivityId');
  }

  set currentActivityId (activityId) {
    if (!activityId) {
      throw new Error (`You must provide an activity id`);
    }
    this.state.set ('currentActivityId', activityId);
  }

  registerActivity (name, activityCreator) {
    if (this.registry.find (name)) {
      throw new Error (`Activity already registered: ${name}`);
    }
    this.registry.select (name).set (activityCreator);
    this.state.select ('launchable').add ().set ('name', name);
    console.log (`Activity registered: ${name}`);
  }

  startActivity (name) {
    const creator  = this.registry.find (name).get ();
    const activity = creator ();
    // Map actuators
    const state = this.activities.select (activity.id).set (activity);
    activity.setup (state);
    console.log (activity.id);
    console.log (activity.actuators);
    // Add activity id in running list
    this.state.select ('running').add ().set ('aid', activity.id);
    // set current activity id
    this.currentActivityId = activity.id;
    console.log (`Activity ${name} started with id: ${activity.id}`);
  }

  doActionInActivity (state, action) {
    const activity = state.get ();
    const actuator = activity.actuators[action.type];
    if (actuator) {
      console.log (`do ${action.type} in ${this.currentActivityId}`);
      actuator (state, action);
    } else {
      console.log (`cannot do ${action.type} in ${this.currentActivityId}`);
    }
  }

  dispatch (props, message) {
    const {state, action} = props;
    console.log (`id=${state.id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      switch (action.type) {
        case 'SWITCH_ACTIVITY': {
          this.currentActivityId = action.id;
          break;
        }
        case 'START_ACTIVITY': {
          this.startActivity (action.name);
          break;
        }
        default:
          this.doActionInActivity (state, action);
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
