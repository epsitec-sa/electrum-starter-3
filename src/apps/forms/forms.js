'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Button} from '../../all-components';
import createAction from '../../create-action.js';

class _Forms extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <div>
        <h1>Forms</h1>
      </div>
    );
  }
}

export const Forms = Electrum.wrap ('Forms', _Forms);
