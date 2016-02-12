'use strict';

import Electrum from 'electrum';
import React from 'react';

class _LauncherItem extends React.Component {
  render () {
    const {state} = this.props;

    const logoItem = {
      flex: 1,
      fontSize: '2rem',
      width: '100%',
      cursor: 'pointer',
      minHeight: '128px',
      borderTop: 'hsl(248, 8%, 15%) 1px solid',
      borderBottom: '#292929 1px solid'
    };

    const activityItem = {
      flex: 1,
      fontSize: '2rem',
      width: '100%',
      cursor: 'pointer',
      minHeight: '64px',
      borderBottom: '#292929 1px solid',
      borderTop: 'hsl(248, 8%, 15%) 1px solid',
      ':hover': {
        background: 'hsla(120, 0%, 21%, 0.49)'
      }
    };

    const separatorItem = {
      flex: 1,
      fontSize: '2rem',
      width: '100%',
      minHeight: '64px'
    };

    let types = {};
    types.logo = (<div key={1} style={logoItem} onClick={this.onClick} {...this.link ()}>
      {this.props.children}
    </div>);

    types.main = (
      <div key={2} style={activityItem} onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </div>
    );

    types.separator = (
      <div key={5} style={separatorItem}></div>
    );

    return types[this.props.type] || types.separator;
  }
}

export const LauncherItem = Electrum.wrap ('LauncherItem', _LauncherItem);
