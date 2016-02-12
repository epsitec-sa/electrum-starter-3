'use strict';

import Electrum from 'electrum';
import React from 'react';

class _Contextualizer extends React.Component {
  render () {
    const {state} = this.props;

    const navContainer = {
      width: '100%',
      height: state.get ('cHeight'),
      background: 'hsl(218, 7%, 70%)',
      overflow: 'hidden',
      boxShadow: '5px 5px 30px rgba(#101114, 0.94)',
      zIndex: 1
    };

    return (
      <nav style={navContainer} data-view='Contextualizer'>
        {this.props.children}
      </nav>
    );
  }
}

export const Contextualizer = Electrum.wrap ('Contextualizer', _Contextualizer);
