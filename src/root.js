'use strict';
import Electrum from 'electrum';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import * as Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

const theme = {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.red,
    borderColor: Colors.grey300,
    disabledColor: fade (Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  }
};

class _Root extends React.Component {
  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: getMuiTheme (theme),
    };
  }

  render () {
    const {state} = this.props;
    const amState = state.select ('activity-manager');
    const mainActivityPath = amState.get ('mainActivityPath');
    const mainActivity = state.select (mainActivityPath);
    console.log (mainActivity);
    const View = mainActivity.get ('view');
    const mainContainer = {
      display: 'flex',
      minHeight: '100%',
      minWidth: '100%',
      alignItems: 'stretch'
    };
    console.log (state);
    return (
      <main style={mainContainer} data-main-activity={mainActivityPath}>
        <View  {...this.link (mainActivityPath)} />
      </main>
    );
  }
}

export const Root = Electrum.wrap ('Root', _Root);
