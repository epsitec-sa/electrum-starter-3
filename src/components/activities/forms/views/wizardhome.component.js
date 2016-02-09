'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';
import {createAction} from 'electrum-starter-3';

export default class Home extends React.Component {
  render () {
    const goHome = createAction ('GO_HOME');
    const next = createAction ('NEXT_PAGE');
    return (
      <div>
        <h1>Wizard Home</h1>
        <Button {...this.link ()} action={goHome}>
          back to home
        </Button>
        <Button {...this.link ()} action={next}>
          next
        </Button>
      </div>
    );
  }
}
