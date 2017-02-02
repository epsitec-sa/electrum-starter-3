'use strict';

import Electrum from 'electrum';
import React from 'react';
import {Theme} from 'electrum-theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import getData from './activities/all-in-one/data-dispatch.js';

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

  constructor (props) {
    super (props);
    window.document.data = getData ();
    window.document.mock = true;
  }

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
    const {store, themes} = this.props;
    const state = store.root;
    const amState = state.select ('activity-manager');
    const currentTheme = themes[state.get ('currentThemeIndex') % themes.length];
    const mainActivityPath = amState.get ('mainActivityPath');
    const mainActivity = state.select (mainActivityPath);
    console.log (mainActivity);
    const View = mainActivity.get ('view');
    console.log (state);
    return (
      <main data-main-activity={mainActivityPath}>
        <View state={state.select (mainActivityPath)} theme={Theme.create (currentTheme)}  />
      </main>
    );
  }
}

export const Root = Electrum.wrap ('Root', _Root);
