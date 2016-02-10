'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';
import act from './actuators.js';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    console.log (`Inside POC: name=${name}`);
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Button action={act.SAY_HELLO ({name})} {...this.link ()}>Say hello...</Button>
      </div>
    );
  }
}
