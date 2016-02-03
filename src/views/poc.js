'use strict';
import Electrum from 'electrum';
import React from 'react';
import {Button} from '../all-components';
import createAction from '../actions.js';
class _Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    const sayHello = createAction ('SAY_HELLO', {to: `${name}`});
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Button action={sayHello}>Say hello...</Button>
      </div>
    );
   }
}

export const Poc = Electrum.wrap ('Poc', _Poc);
