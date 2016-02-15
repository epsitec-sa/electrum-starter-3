'use strict';

import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer, Button} from '../../all-components';
import act from './actuators.js';

class _Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Button id={state.id} action={act.SAY_HELLO} {...this.link ()}>Say hello...</Button>
        <ActivityViewer {...this.link ('wizard.forms')} />
      </div>
    );
  }
}

export const Poc = Electrum.wrap ('Poc', _Poc);
