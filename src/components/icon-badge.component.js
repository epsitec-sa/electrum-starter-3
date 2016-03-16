'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, value} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');
    const v = value || state.get ('value');

    return (
      <div>
        <Icon glyph={g} size={s} {...this.link ()}/>
        <Badge value={v} {...this.link ()}/>
      </div>
    );
  }
}
