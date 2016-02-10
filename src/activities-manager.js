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

  initActivity (name, parent) {
    // instantiate via registry
    console.log ('#####', parent);
    const creator  = this.registry.find (name).get ();
    const activity = creator (parent);
    // Initialize activity
    activity.init (this.store);
    return activity;
  }

  startActivity (state, name, collection) {
    const node = state.select (collection)
                      .add ();
    const activity = this.initActivity (name, node.id);
    state.store
      .find (node.id)
      .set (activity);
    activity.run ();
    return activity;
  }

  startMainActivity (name) {
    const runningActivity = this.startActivity (this.state, name, 'activities');
    // set current activity id
    this.mainActivityPath = runningActivity.path;
    return runningActivity;
  }

  dispatch (props, message) {
    const {state, action} = props;
    if (message === 'action' && typeof action === 'function') {
      action.run (state);
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
