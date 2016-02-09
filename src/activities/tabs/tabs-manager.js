'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Tabs} from './tabs.js';

class _TabsManager extends React.Component {
  render () {
    const {state} = this.props;
    const path = state.get ('path');
    return (
      <Tabs {...this.link (path)} active={state.select ('active')} />
    );
  }
}

export const TabsManager = Electrum.wrap ('TabsManager', _TabsManager);
