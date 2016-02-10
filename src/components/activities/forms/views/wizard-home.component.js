'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';

export default class Home extends React.Component {
  render () {
    const act = require ('../actuators.js').default;
    return (
      <div>
        <h1>Wizard Home</h1>
        <Button {...this.link ()} action={act.GO_HOME ()}>
          back to home
        </Button>
        <Button {...this.link ()} action={act.NEXT_PAGE ()}>
          next
        </Button>
      </div>
    );
  }
}
