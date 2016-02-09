'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';
import {createAction} from 'electrum-starter-3';

export default class Forms extends React.Component {
  render () {
    const startWizard = createAction ('START_WIZARD');
    return (
      <div>
        <h1>Forms Wizard Demo</h1>
        <Button {...this.link ()} action={startWizard}>
          Start wizard...
        </Button>
      </div>
    );
  }
}
