'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';

export default class Forms extends React.Component {
  render () {
    const act = require ('./actuators.js').default;
    console.log (act);
    return (
      <div>
        <h1>Forms Wizard Demo</h1>
        <Button {...this.link ()} action={act.START_WIZARD ()}>
          Start wizard...
        </Button>
      </div>
    );
  }
}
