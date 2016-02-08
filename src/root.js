'use strict';
import Electrum from 'electrum';
import React from 'react';
import {BasicList} from 'electrum-arc';
import {ActivityViewer, CurrentActivityInfo, Button} from './all-components.js';
import ActivitiesManager from './activities-manager.js';

const switchActivity = ActivitiesManager.switchActivity;

const startActivity = ActivitiesManager.startActivity;

class _Root extends React.Component {
  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  render () {
    const {state} = this.props;
    const am = state.select ('am');
    const currentActivityId = am.get ('currentActivityId');
    const activities = am.get ('activities');
    const registry = am.get ('registry');
    const registeredActivitiesCount = Object.keys (registry).length;
    const runningActivitiesCount = Object.keys (activities).length;
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
        <ActivityViewer  {...this.link (currentActivityId)} />
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

export const Root = Electrum.wrap ('Root', _Root);
