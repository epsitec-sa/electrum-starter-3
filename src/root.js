'use strict';
import Electrum from 'electrum';
import React from 'react';
import {BasicList} from 'electrum-arc';
import {ActivityViewer, CurrentActivityInfo, Button} from './all-components.js';
import ActivitiesManager from './activities-manager.js';
const startActivity = ActivitiesManager.startActivity;

class _Root extends React.Component {
  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  render () {
    const {state} = this.props;
    const am = state.select ('am');
    const mainActivityId = am.get ('mainActivityId');
    const headerStyle = {
      background: 'rgba(0, 20, 60, 0.2)',
      fontWeight: 900,
      border: '2px solid #999',
      padding: '0 20 0 20',
      textTransform: 'uppercase',
      textDecoration: 'none'
    };
    const launchableTemplate = (state) => {
      const name = state.get ('name');
      return (
        <li key={name}>
          <Button action={startActivity (name)} {...this.link ()}>
            Start {name}
          </Button>
        </li>
      );
    };
    return (
    <div>
      <header>
        <nav>
          <section style={headerStyle}>
            <h1>Electrum Starter</h1>
          </section>
          <section style={{float: 'left', margin: '0 60 0 0'}}>
            <BasicList
              {...this.link ('am.launchable')}
              template={launchableTemplate} />
          </section>
        </nav>
      </header>
      <section style={{height: '50%', padding: '50 50 50 50'}}>
        <ActivityViewer  {...this.link (mainActivityId)} />
      </section>
      <aside style={{float: 'right'}}>
        {/*<CurrentActivityInfo {...this.link ('am')} />*/}
      </aside>
      <footer>
      </footer>
    </div>);
  }
}

export const Root = Electrum.wrap ('Root', _Root);
