'use strict';

import Electrum from 'electrum';
import React from 'react';

import {Button} from 'electrum-starter-3';
import {createAction} from 'electrum-starter-3';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    console.log (`Inside POC: name=${name}`);
    const sayHello = createAction ('SAY_HELLO', {to: `${name}`});
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Button action={sayHello} {...this.link ()}>Say hello...</Button>
      </div>
    );
  }
}
