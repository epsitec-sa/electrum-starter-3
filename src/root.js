'use strict';
import Electrum from 'electrum';
import React from 'react';
import {BasicList} from 'electrum-arc';
import {ActivityViewer, CurrentActivityInfo, Button} from './all-components.js';
import ActivitiesManager from './activities-manager.js';
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
    const amState = state.select ('activity-manager');
    const am = amState.get ('am');
    console.log (state);
    return (
      <ActivityViewer  {...this.link ('activity-manager.' + am.mainActivityPath)} />
    );
  }
}

export const Root = Electrum.wrap ('Root', _Root);
