'use strict';

import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer, Label} from '../../all-components';
import _Tabs$styles from './tabs.styles.js';
import createAction from '../../create-action.js';

class _Tabs extends React.Component {
  render () {
    const {state, theme} = this.props;
    const select = (key) => createAction ('TABS_SELECT', {key: key});
    const activeTab = state.active;
    const keys = state.select ('running').keys;
    const template = (key) => {
      return (
        <Label
          id={state.id}
          key={key}
          {...this.link ()}
          theme={theme}
          action={() => select (key)}>{key}</Label>
      );
    };

    return (
      <section>
        <nav style={this.styles}>
          {keys.map (key => template (state.select (key), theme) )}
        </nav>
        <main>
          {activeTab ?
            <ActivityViewer  {...this.link (activeTab)} /> :
            <span>...ZzzZzzzZzz</span>
          }
        </main>
      </section>
    );
  }
}

export const Tabs = Electrum.wrap ('Tabs', _Tabs, {styles: _Tabs$styles});
