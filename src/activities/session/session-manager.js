'use strict';

import Electrum from 'electrum';
import React from 'react';
import act from './actuators.js';
import {BasicList} from 'electrum-arc';
import {Button, Checkbox, Stack, Stackrow, Stackelement} from '../../all-components';
import sessionTemplate from './session-template.js';

export default class SessionManager extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <section data-view='SessionManager' style={{height: '100%'}}>
        <main style={{height: '100%', width: '400px'}}>

          <Stack backgroundColor='white' {...this.link ()}>
            <Stackrow aligned {...this.link ()}>
              <Stackelement alignLeft {...this.link ()}>hello</Stackelement>
              <Stackelement alignRight {...this.link ()}>pretty</Stackelement>
              <Stackelement alignRight {...this.link ()}>kitty</Stackelement>
            </Stackrow>
            <Stackrow {...this.link ()}>
              <Stackelement {...this.link ()}>how are you???</Stackelement>
              <Stackelement {...this.link ()}>i m fine</Stackelement>
            </Stackrow>
          </Stack>
        </main>

      </section>
    );
  }
}
