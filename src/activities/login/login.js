'use strict';

import Electrum from 'electrum';
import React from 'react';

class _SessionManager extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <section data-view='Login'>
        <h1>Login</h1>
        
      </section>
    );
  }
}

export const SessionManager = Electrum.wrap ('SessionManager', _SessionManager);
