'use strict';
import Electrum from 'electrum';
import React from 'react';

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
    const mainActivity = state.select (am.mainActivityPath).get ();
    console.log (mainActivity)
    const View = mainActivity.view;
    const mainContainer = {
      display: 'flex',
      background: '#000',
      minHeight: '100%',
      minWidth: '100%',
      alignItems: 'stretch'
    };
    console.log (state);
    return (
      <main style={mainContainer} data-main-activity={am.mainActivityPath}>
        <View  {...this.link (am.mainActivityPath)} />
      </main>
    );
  }
}

export const Root = Electrum.wrap ('Root', _Root);
