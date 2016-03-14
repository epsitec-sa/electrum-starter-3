'use strict';

import React from 'react';
import {Button, Icon, Badge} from '../../all-components';
import act from './actuators.js';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    const Wizard = state.select ('wizard.[forms]').get ().view;
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Icon {...this.link ()}/>
        <br/>
        <Badge {...this.link ()}/>
        <Button id={state.id} action={act.SAY_HELLO} {...this.link ()}>Say hello...</Button>
        <Wizard {...this.link ('wizard.[forms]')} />
      </div>
    );
  }
}
