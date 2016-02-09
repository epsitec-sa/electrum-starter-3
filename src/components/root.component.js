'use strict';

import Electrum from 'electrum';
import React from 'react';

import {BasicList} from 'electrum-arc';
import {ActivityViewer, CurrentActivityInfo, Button} from '../all-components.js';

import ActivitiesManager from '../activities-manager.js';

const switchActivity = ActivitiesManager.switchActivity;
const startActivity  = ActivitiesManager.startActivity;

export default class Root extends React.Component {
  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  render () {
    const am = Electrum.bus;
    const currentActivityId = am.currentActivityId;
    const registeredActivitiesCount = am.registry.keys.length;
    const runningActivitiesCount = am.activities.keys.length;
    const runningTemplate = (state) => {
      const aid = state.get ('aid');
      return (
        <li key={aid}>
          <Button action={switchActivity (aid)} {...this.link ()}>
            Show {aid}
          </Button>
        </li>
      );
    };

    const launchableTemplate = (state) => {
      const name = state.get ('name');
      return (
        <li key={name}>
          <Button action={startActivity (name)} {...this.link ()}>
            Start {name}
          </Button>
        </li>
      );
    };
    return (
    <div>
      <header>
        <h1>Electrum Starter</h1>
        <nav>
          <section style={{float: 'left', margin: '0 140 0 0'}}>
            <BasicList {...this.link ('am.launchable')} template={launchableTemplate} />
          </section>
          <section style={{float: 'right'}}>
            <BasicList {...this.link ('am.running')} template={runningTemplate} />
          </section>
        </nav>
      </header>
      <section style={{height: '50%'}}>
        <ActivityViewer  {...this.link ('am.activities.' + currentActivityId)} />
      </section>
      <aside style={{float: 'right'}}>
        <CurrentActivityInfo {...this.link ('am')} />
      </aside>
      <footer>
        <p>registered: {registeredActivitiesCount}</p>
        <p>running: {runningActivitiesCount}</p>
      </footer>
    </div>);
  }
}
