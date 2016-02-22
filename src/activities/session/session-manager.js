'use strict';

import Electrum from 'electrum';
import React from 'react';
import act from './actuators.js';
import {BasicList} from 'electrum-arc';
import {Button} from '../../all-components';
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
        </main>
        <h1>Your sessions:</h1>
        <BasicList
          {...this.link ('sessions')}
          template={(key) => sessionTemplate (key, this.props)} />
      </section>
    );
  }
}
