'use strict';

import React from 'react';
import {Button, Icon, Badge, IconBadge} from '../../all-components';
import act from './actuators.js';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    const Wizard = state.select ('wizard.[forms]').get ().view;

    const mainStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
    };

    return (
      <div>
        <div style={mainStyle}>
          {`Hello ${name}`}
        </div>
        <div style={mainStyle}>
          <Icon glyph="car" size="2x" {...this.link ('icon')}/>
          <Badge {...this.link ('badge')} value="1"/>
          <Badge {...this.link ('badge')} value="12"/>
          <Badge {...this.link ('badge')} value="123"/>
          <Badge {...this.link ('badge')}/>
        </div>
        <div style={mainStyle}>
          <IconBadge glyph="car" size="1x" value="7" {...this.link ('icon-badge')}/>__
          <IconBadge glyph="car" size="2x" value="7" {...this.link ('icon-badge')}/>__
          <IconBadge glyph="car" size="3x" value="7" {...this.link ('icon-badge')}/>__
          <IconBadge glyph="car" size="2x" value="12" {...this.link ('icon-badge')}/>__
          <IconBadge glyph="car" size="2x" value="123" {...this.link ('icon-badge')}/>__
          <IconBadge glyph="car" size="2x" value="1234" {...this.link ('icon-badge')}/>__
        </div>
        <div style={mainStyle}>
          <Button id={state.id} action={act.SAY_HELLO} {...this.link ()}>Say hello...</Button>
          <Wizard {...this.link ('wizard.[forms]')} />
        </div>
      </div>
    );
  }
}
