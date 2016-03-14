'use strict';

import Electrum from 'electrum';
import React from 'react';
import act from './actuators.js';
import {BasicList} from 'electrum-arc';
import {Button, Text} from '../../all-components';
import sessionTemplate from './session-template.js';

export default class SessionManager extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <section data-view='SessionManager'>
        <main>
          <Button action={act.START_SESSION ()} {...this.link ()}>
            New session
          </Button>
          <Text {...this.link ()} />
          <br/>
          <Text {...this.link ()} kind="title"/>
          <br/>
          <Text {...this.link ()} kind="bold"/>
          <br/>
          <div style={{width: '100%', textAlign: 'center', backgroundColor: '#ABC'}}>
            <Text {...this.link ()} kind="quotes"/>
          </div>
        </main>
        <h1>Your sessions:</h1>
        <BasicList
          {...this.link ('sessions')}
          template={(key) => sessionTemplate (key, this.props)} />
      </section>
    );
  }
}
