'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Button} from '../../../all-components';
import createAction from '../../../create-action.js';

class _Home extends React.Component {
  render () {
    const {state} = this.props;
    const goHome = createAction ('GO_HOME');
    const next = createAction ('NEXT_PAGE');
    return (
      <div>
        <h1>Wizard Home</h1>
        <Button id={state.id} {...this.link ()} action={goHome}>
          back to home
        </Button>
        <Button id={state.id} {...this.link ()} action={next}>
          next
        </Button>
      </div>
    );
  }
}

export const WizardHome = Electrum.wrap ('WizardHome', _Home);
