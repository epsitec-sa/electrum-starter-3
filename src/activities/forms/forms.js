'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Button} from '../../all-components';
import act from './actuators.js';

class _Forms extends React.Component {
  render () {
    return (
      <div>
        <h1>Forms Wizard Demo</h1>
        <Button {...this.link ()} action={act.START_WIZARD}>
          Start wizard...
        </Button>
      </div>
    );
  }
}

export const Forms = Electrum.wrap ('Forms', _Forms);
