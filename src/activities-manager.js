'use strict';
import {State} from 'electrum-store';
import createAction from './create-action.js';
/******************************************************************************/
export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this.state
      .set ('am', this)
      .set ('mainActivityPath', null);

    this._generation = store.generation;
  }

  get store () {
    return this._store;
  }

  get state () {
    return this._store.select ('activity-manager');
  }

  get registry () {
    return this.state.select ('registry');
  }

  get mainActivityPath () {
    return this.state.get ('mainActivityPath');
  }

  set mainActivityPath (path) {
    if (!path) {
      throw new Error (`You must provide an activity path`);
    }
    this.state.set ('mainActivityPath', path);
  }

  registerActivity (name, activityCreator) {
    if (this.registry.find (name)) {
      throw new Error (`Activity already registered: ${name}`);
    }
    this.registry.select (name).set (activityCreator);
    this.state.select ('launchable').add ().set ('name', name);
    console.log (`Activity registered: ${name}`);
  }

  switchActivity (id) {
    this.mainActivityPath = id;
  }

  startActivity (name, parent) {
    // instantiate via registry
    const creator  = this.registry.find (name).get ();
    const activity = creator (parent);
    // Initialize activity
    activity.initialize (this.store);
    // run activity
    activity.run ();
    return activity;
  }

  startMainActivity (name) {
    const runningActivity = this.startActivity (name, null);
    // set current activity id
    this.mainActivityPath = runningActivity.id;
    console.log (`Main activity ${name} started with id: ${runningActivity.id}`);
    return runningActivity;
  }

  dispatch (props, message) {
    const {state, action} = props;
    if (message === 'action' && typeof action === 'function') {
      action (state);
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
