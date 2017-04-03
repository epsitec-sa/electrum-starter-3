import Electrum from 'electrum';
import React from 'react';

class _LauncherItem extends React.Component {
  render () {
    const {state} = this.props;

    const logoItem = {
      flex:            2,
      fontSize:        '2rem',
      cursor:          'pointer',
      color:           '#222222',
      backgroundColor: '#FFFFFF',
      alignSelf:       'center',
      padding:         '4 4 4 4'
    };

    const activityItem = {
      'flex':     1,
      'fontSize': '2rem',
      'cursor':   'pointer',
      ':hover':   {
        background: '#FFFFFF'
      },
      'alignSelf': 'center'
    };

    const separatorItem = {
      flex:      1,
      fontSize:  '2rem',
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
