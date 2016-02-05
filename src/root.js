'use strict';
import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer, Button} from './all-components.js';
import createAction from './create-action.js';
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
    const currentActivity = am.get ('currentActivity');
    const activities = am.get ('activities');
    const registry = am.get ('registry');
    const activityActions = Object.keys (activities[currentActivity]);
    const registeredActivitiesCount = Object.keys (registry).length;
    const runningActivitiesCount = Object.keys (activities).length;
    const start = (activityName) => createAction ('START_ACTIVITY', {
      name: activityName
    });
    const switchTo = (activityId) => createAction ('SWITCH_ACTIVITY', {
      id: activityId
    });
    return (
    <div>
      <header>
        <h1>Electrum Starter</h1>
        <nav>
          <ul style={{float: 'left', margin: '0 140 0 0'}}>
            <li><h1>Start new activities</h1></li>
            {Object.keys (registry).map ((activity) => {
              return (
                <li key={activity}>
                  <Button action={start (activity)} {...this.link ()}>
                    Start {activity}
                  </Button>
                </li>
              );
            })}
          </ul>
          <ul style={{float: 'right', margin: '0 140 0 0'}}>
            <li><h1>Switch</h1></li>
            {Object.keys (activities).map ((id) => {
              return (
                <li key={id}>
                  <Button action={switchTo (id)} {...this.link ()}>
                    Show {id}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <section style={{height: '50%'}}>
        <ActivityViewer  {...this.link (currentActivity)} />
      </section>
      <aside style={{float: 'right'}}>
        <p>current activity: <b>{currentActivity}</b></p>
        <p>actions:</p>
        <ul>
          {activityActions.map ((action) => {
            return (
              <li key={action}>{action}</li>
            );
          })}
        </ul>
      </aside>
      <footer>
        <p>registered: {registeredActivitiesCount}</p>
        <p>running: {runningActivitiesCount}</p>
      </footer>
    </div>);
  }
}

export const Root = Electrum.wrap ('Root', _Root);
