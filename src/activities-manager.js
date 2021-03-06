/******************************************************************************/
export default class ActivitiesManager {
  constructor (store) {
    this._store = store;
    this._generation = store.generation;
    this.state
      .set ('mainActivityPath', null);
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
      throw new Error ('You must provide an activity path');
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

  startActivity (state, name, nodePath, isSingle) {
    let node = state.select (nodePath);
    if (!isSingle) {
      node = node.add ();
    }
    const activity = this.initActivity (name, node.id);
    state.store
      .find (node.id)
      .set (activity);
    activity.run ();
    return activity;
  }

  startMainActivity (name) {
    const runningActivity = this.startActivity (this.state, name, 'main', true);
    // set current activity id
    this.mainActivityPath = runningActivity.path;
    return runningActivity;
  }

  dispatch (props, message) {
    const {state, action} = props;
    if (message === 'action' && typeof action === 'function') {
      if (action.run) {
        action.run (state);
      } else {
        action ();
      }
    }
    this.update ();
  }

  notify (props, source, value, ...states) {
    console.log (`notify source=${source.type} value=${value}`);
    const state = props.state;
    if (source.type === 'change') {
      const notifier = state.get ('onChange');
      if (notifier) {
        notifier (value, props.state);
        this.update ();
      }
      return;
    }

    if (source.type === 'focus') {
      const notifier = state.get ('onFocus');
      if (notifier) {
        notifier (value, props.state);
        this.update ();
      }
      return;
    }

    if (source.type === 'defocus') {
      const notifier = state.get ('onDefocus');
      if (notifier) {
        notifier (value, props.state);
        this.update ();
      }
      return;
    }
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
