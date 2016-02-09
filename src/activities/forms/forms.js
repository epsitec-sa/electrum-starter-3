'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Button} from '../../all-components';
import createAction from '../../create-action.js';

class _Forms extends React.Component {
  render () {
    const {state} = this.props;
    const startWizard = createAction ('START_WIZARD');
    return (
      <div>
        <h1>Forms Wizard Demo</h1>
        <Button id={state.id} {...this.link ()} action={startWizard}>
          Start wizard...
        </Button>
      </div>
    );
  }
}

export const Forms = Electrum.wrap ('Forms', _Forms);
