'use strict';

import Electrum from 'electrum';
import React from 'react';
import {ActivityViewer, Button} from '../../all-components';
import act from './actuators.js';
class _Desktop extends React.Component {
  render () {
    const {state} = this.props;
    const mainActivity = state.get ('mainActivity');
    const headerStyle = {
      background: 'rgba(0, 20, 60, 0.2)',
      fontWeight: 900,
      border: '2px solid #999',
      padding: '0 20 0 20',
      textTransform: 'uppercase',
      textDecoration: 'none'
    };
    return (
      <section data-view='Desktop'>
        <header>

            <section style={headerStyle}>
              <h1>Desktop {state.id}</h1>
            </section>

        </header>
        <section style={{float: 'left', margin: '0 60 0 0'}}>
          <nav>

          </nav>
        </section>
        <section style={{height: '50%', padding: '50 50 50 50'}}>
          {mainActivity ?
            <ActivityViewer {...this.link (mainActivity)} /> :
            <span>__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___</span>
          }
        </section>
        <aside style={{float: 'right'}}>

        </aside>
        <footer>
          <Button action={act.LEAVE_DESKTOP ()} {...this.link ()}>Leave desktop</Button>
        </footer>
      </section>
    );
  }
}

export const Desktop = Electrum.wrap ('Desktop', _Desktop);
