'use strict';
import Electrum from 'electrum';
import React from 'react';
import {Viewer} from './all-components.js';

class _Root extends React.Component {
  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  render () {
    return (<Viewer {...this.link ('demo')}></Viewer>);
  }
}

export const Root = Electrum.wrap ('Root', _Root);
