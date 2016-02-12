'use strict';

import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer, Button, Label} from '../../all-components';
import {Contextualizer} from './contextualizer.js';
import {Launcher} from './launcher.js';
import {LauncherItem} from './Launcher-item.js';
import act from './actuators.js';
class _Desktop extends React.Component {
  render () {
    const {state} = this.props;
    const layout = state.select ('layout');
    const aCount = state.select ('activities').keys.length;
    const mainActivity = state.get ('mainActivityKey');
    console.log (aCount);
    const lWidth = layout.get ('lWidth');
    const cHeight = layout.get ('cHeight');

    const bgStyle = {
      display: 'flex',
      alignItems: 'center',
      background: '#000',
      height: '100%',
      width: '100%'
    };
    const deskStyle = {
      flex: 0.9,
      height: '100%',
      alignSelf: 'flex-start',
      background: 'linear-gradient(135deg, #1f2022, #212932)'
    };
    return (
      <section data-view='Desktop' style={bgStyle}>
        <Launcher {...this.link ('layout')}>
          <LauncherItem type='logo' {...this.link ()}>
            <Label action={act.LEAVE_DESKTOP ()} {...this.link ()}>
              <i className="fa fa-modx fa-4x"></i>
            </Label>
          </LauncherItem>
          <LauncherItem type='separator' {...this.link ()}/>
          <LauncherItem type='main' action={act.START_MAIN ()} {...this.link ()}>
            <i className="fa fa-rocket fa-2x"></i>
          </LauncherItem>
        </Launcher>
        <section style={deskStyle}>
          <Contextualizer {...this.link ('layout')} >
            CONTEXT 1
          </Contextualizer>
          <main>
            {aCount > 0 ?
              <ActivityViewer {...this.link ('activities.' + mainActivity)} /> :
              <span>{`__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___`}</span>
            }
          </main>
        </section>
      </section>
    );
  }
}

export const Desktop = Electrum.wrap ('Desktop', _Desktop);
