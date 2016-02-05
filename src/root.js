'use strict';
import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer} from './all-components.js';

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
    return (<ActivityViewer  {...this.link (currentActivity)} />);
  }
}

export const Root = Electrum.wrap ('Root', _Root);
