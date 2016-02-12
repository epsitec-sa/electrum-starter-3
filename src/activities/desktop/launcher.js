'use strict';

import Electrum from 'electrum';
import React from 'react';

class _Launcher extends React.Component {
  render () {
    const {state} = this.props;

    const navContainer = {
      flex: 0.1,
      minWidth: state.get ('lWidth'),
      maxWidth: state.get ('lWidth'),
      height: '100%',
      padding: '0 0 0 4',
      background: 'hsl(218, 8%, 24%)',
      overflow: 'hidden',
      boxShadow: '5px 5px 10px rgba(#101114, 1)',
      zIndex: 2
    };

    const activityContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flexFlow: 'column wrap'
    };

    return (
      <nav style={navContainer} data-view='Launcher'>
        <div style={activityContainer}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export const Launcher = Electrum.wrap ('Launcher', _Launcher);
