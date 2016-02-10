'use strict';

import Electrum from 'electrum';
import React from 'react';

class _Desktop extends React.Component {
  render () {
    const {state} = this.props;
    const amState = state.select ('am');
    const am = amState.get ('am');
    console.log (am);
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
          <nav>
            <section style={headerStyle}>
              <h1>Desktop</h1>
            </section>
            <section style={{float: 'left', margin: '0 60 0 0'}}>

            </section>
          </nav>
        </header>
        <section style={{height: '50%', padding: '50 50 50 50'}}>

        </section>
        <aside style={{float: 'right'}}>

        </aside>
        <footer>
        </footer>
      </section>
    );
  }
}

export const Desktop = Electrum.wrap ('Desktop', _Desktop);
