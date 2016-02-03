'use strict';
import Electrum from 'electrum';
import React from 'react';
import {Fieldset} from '../all-components.js';

class _Poc extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <div>
        {`Hello ${state.get ('name')}`}
      </div>
    );
   }
}

export const Poc = Electrum.wrap ('Poc', _Poc);
