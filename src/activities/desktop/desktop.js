import React from 'react';
import {ActivityViewer, Label} from '../../all-components';
import {Contextualizer} from './contextualizer.js';
import {StatusBar} from './status-bar.js';
import {Launcher} from './launcher.js';
import {LauncherItem} from './launcher-item.js';
import {Tabs} from './tabs.js';
import act from './actuators.js';

export default class Desktop extends React.Component {
  render () {
    const {state} = this.props;
    // use lenses...
    const mainActivityKey = state.get ('mainActivityKey');
    const mainActivityPath = 'activities.' + state.get ('mainActivityKey');
    const MainActivity = mainActivityKey ?
      state.select (mainActivityPath).get ().view :
      null;
    const mainLayout = {
      display:       'flex',
      background:    '#24415f',
      alignItems:    'stretch',
      flexDirection: 'row',
      alignContents: 'stretch'
    };

    const deskStyle = {
      display:       'flex',
      alignItems:    'stretch',
      flexDirection: 'column',
      width:         '100%'
    };

    const mainContent = {
      flex:      2,
      borderTop: '.01em solid #cccccc'
    };

    return (
      <section data-view='Desktop' style={mainLayout}>
        <Launcher {...this.link ()}>
          <LauncherItem type='logo' {...this.link ()}>
            <Label action={act.LEAVE_DESKTOP ()} {...this.link ()}>
              <i className="fa fa-modx fa-2x"></i>
            </Label>
          </LauncherItem>
          <LauncherItem type='separator' {...this.link ()}/>
          <LauncherItem type='main' action={act.START_MAIN ()} {...this.link ()}>
            <i className="fa fa-rocket fa-1x"></i>
          </LauncherItem>
        </Launcher>
        <section style={deskStyle}>
          <Contextualizer {...this.link ()} >
            CONTEXT 1
          </Contextualizer>
          <Tabs {...this.link ()} />
          <main style={mainContent}>
            {mainActivityKey ?
            <MainActivity {...this.link (mainActivityPath)} /> :
            null}
          </main>
          <StatusBar {...this.link ()}>
            OPTIONS
          </StatusBar>
        </section>
      </section>
    );
  }
}
