'use strict';

import React from 'react';
import {Button} from '../../../all-components';
import act from '../actuators.js';
export default class WizardHome extends React.Component {
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
