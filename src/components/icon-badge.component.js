'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, value} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');
    const v = value || state.get ('value');

    const spanStyle = {
    };
    const divStyle = {
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: '#0ff',
      width: 100,
      height: 100
    };
    const badgeStyle = {
      backgroundColor: '#00f',
      color: '#fff',
      position: 'relative',
      bottom: 10,
      left: -10
    };

    return (
      // <div>
      //   <Icon glyph={g} size={s} {...this.link ()}/>
      //   <Badge kind="float" value={v} {...this.link ()} />
      // </div>
      <span style={spanStyle}>
        <div style={divStyle}>
          <Icon glyph={g} size={s} {...this.link ()}/>
          <label style={badgeStyle}>5</label>
        </div>
      </span>
    );
  }
}
