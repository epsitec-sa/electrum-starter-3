'use strict';

import React from 'react';
import DispatchMessengersConnected from './dispatch-messengers.connected.js';

export default class DispatchMessengers extends React.Component {

  render () {
    return (
      <DispatchMessengersConnected {...this.link ()}/>
    );
  }
}
