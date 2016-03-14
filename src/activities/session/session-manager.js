'use strict';

import Electrum from 'electrum';
import React from 'react';
import act from './actuators.js';
import {BasicList} from 'electrum-arc';
import {Button, Checkbox} from '../../all-components';
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
          <Checkbox {...this.link ()} />
          <Button action={act.CHANGE_TITLE ({text: 'I\'m happy!'})} {...this.link ()}>Be happy</Button>
          <Button action={act.CHANGE_TITLE ({text: 'I\'m sad!'})} {...this.link ()}>Be sad</Button>
        </main>
        <h1>Your sessions:</h1>
        <BasicList
          {...this.link ('sessions')}
          template={(key) => sessionTemplate (key, this.props)} />
      </section>
    );
  }
}
