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
    const keys = state.store.select ('am.running').keys;
    const template = (state, index) => { return (
      <span
        key={index}
        id={state.id}
        {...this.link ()}
        theme={theme}
        action={() => select (state)}>{state.id}</span>
      );
    };


    return (
      <section>
        <nav style={this.styles}>
          {keys.map ( (key, index) => template (state.select (key), index) )}
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
