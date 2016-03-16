'use strict';

import React from 'react';
import {Button, Icon, Badge, IconBadge} from '../../all-components';
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
        <Icon glyph="binoculars" size="2x" {...this.link ('icon')}/>
        <br/>
        <Badge {...this.link ('badge')}/>
        <br/>
        <IconBadge glyph="car" size="2x" value="7" {...this.link ('icon-badge')}/>
        <Button id={state.id} action={act.SAY_HELLO} {...this.link ()}>Say hello...</Button>
        <Wizard {...this.link ('wizard.[forms]')} />
      </div>
    );
  }
}
