'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Button} from '../../../all-components';
import act from '../actuators.js';
class _Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Wizard Home</h1>
        <Button {...this.link ()} action={act.GO_HOME}>
          back to home
        </Button>
      </div>
    );
  }
}

export const WizardHome = Electrum.wrap ('WizardHome', _Home);
