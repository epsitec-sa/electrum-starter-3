'use strict';
import Electrum from 'electrum';
import React from 'react';
import {Viewer} from './all-components.js';

class _Root extends React.Component {
  render () {
    return (<Viewer {...this.link ('demo')}></Viewer>);
  }
}

export const Root = Electrum.wrap ('Root', _Root);
