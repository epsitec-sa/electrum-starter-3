'use strict';
import {State} from 'electrum-store';
import createAction from './create-action.js';
/******************************************************************************/
const initialState = State.create ('am', {
  mainActivityId: null,
  actuators: {},
  registry: {}
});

export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this._store.setState (initialState);
    this._generation = store.generation;
    this._runningCounter = 0;
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

  get actuators () {
    return this.state.get ('actuators');
  }

  get registry () {
    return this.state.get ('registry');
  }

  get mainActivityId () {
    return this.state.get ('mainActivityId');
  }

  set mainActivityId (activityId) {
    if (!activityId) {
      throw new Error (`You must provide an activity id`);
    }
    this.state.set ('mainActivityId', activityId);
  }

  registerActivity (name, activityCreator) {
    if (this.registry[name]) {
      throw new Error (`Activity already registered: ${name}`);
    }
    this.registry[name] = activityCreator;
    this.state.select ('launchable').add ().set ('name', name);
    console.log (`Activity registered: ${name}`);
  }

  startActivity (name, parent) {
    // instantiate via registry
    const activity = this.registry[name] (parent);
    // Initialize activity
    activity.initialize (this.store);
    // run activity
    activity.run ();
    return activity;
  }

  startMainActivity (name) {
    const runningActivity = this.startActivity (name, '');
    // set current activity id
    this.mainActivityId = runningActivity.id;
    console.log (`Main activity ${name} started with id: ${runningActivity.id}`);
    return runningActivity;
  }

  doActionInActivity (id, action) {
    if (!id) {
     return;
    }
    if (this.store.select (id).get ('actuators')[action.type]) {
      console.log (`do ${action.type} in ${this.mainActivityId}`);
      this.store.select (id).get ('actuators')[action.type] (
        this.store.select (id),
        action,
        id,
        this.store,
        this.doActionInActivity
      );
    } else {
      console.log (`cannot do ${action.type} in ${this.mainActivityId}`);
    }
  }

  dispatch (props, message) {
    const {id, action} = props;
    console.log (`id=${id} message=${message} action=${JSON.stringify (action)}`);
    if (message === 'action') {
      switch (action.type)
      {
      case 'START_ACTIVITY': {
        this.startActivity (action.name, id ? id : '');
        break;
      }
      default:
        this.doActionInActivity (id, action);
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
