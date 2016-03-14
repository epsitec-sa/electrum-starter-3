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
              <div expanded alignLeft>al. left</div>

              <div expanded alignRight>al. right</div>
            </Stackrow>
            <Stackrow {...this.link ()}>
              <div expanded>expanded</div>

              <div>normal 2</div>
            </Stackrow>
            <Stackrow {...this.link ()}>
              <div expanded>all</div>
              <div expanded>the</div>
              <div expanded>same</div>
            </Stackrow>
            <Stackrow {...this.link ()}>
              <div expanded>a</div>
              <div expanded>aaaaa</div>
              <div expanded>aaaaaaaaa</div>
            </Stackrow>
          </Stack>

        </main>
      </section>
    );
  }
}
