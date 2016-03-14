'use strict';

import Electrum from 'electrum';
import React from 'react';
import act from './actuators.js';
import {BasicList} from 'electrum-arc';
import {Button, Checkbox, Stack, Stackrow, Text} from '../../all-components';

import sessionTemplate from './session-template.js';

export default class SessionManager extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <section data-view='SessionManager' style={{height: '100%'}}>
        <main style={{height: '100%', width: '400px'}}>

          <Stack backgroundColor='white' {...this.link ()}>
            <Stackrow aligned {...this.link ()}>
              <Text alignLeft {...this.link ()} kind="title"/>
              <Text alignRight {...this.link ()} kind="title"/>
              <Text alignRight {...this.link ()} kind="title"/>
              <Text alignRight {...this.link ()} />

            </Stackrow>
            <Stackrow {...this.link ()}>
              <div>how are you???</div>
              <div>i m fine</div>
              <div>i m not</div>
            </Stackrow>
          </Stack>

        </main>
      </section>
    );
  }
}
