'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, value} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');
    const v = value || state.get ('value');

    var dim = 1;
    switch (s) {
      case '1x':
        dim = 1;
        break;
      case '2x':
        dim = 2;
        break;
      case '3x':
        dim = 3;
        break;
      case '4x':
        dim = 4;
        break;
      case '5x':
        dim = 5;
        break;
    }

    const radius = 10;

    const divStyle1 = {
      position: 'relative',
      // width: dim + 'em',
      // height: dim + 'em',
    };
    const divStyle2 = {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      minWidth: (radius * 2) + 'px',
      height: (radius * 2) + 'px',
      textAlign: 'center',
      lineHeight: (radius * 2) + 'px',
      fontSize: (radius * 1.5) + 'px',
      fontWeight: 'bold',
      padding: (radius / 5) + 'px',
      borderRadius: radius * 2,
      backgroundColor: '#f00',
      color: '#fff',
    };

    return (
      // <div>
      //   <Icon glyph={g} size={s} {...this.link ()}/>
      //   <Badge kind="float" value={v} {...this.link ()} />
      // <div style={divStyle2}>{v}</div>
      // </div>
      <div style={divStyle1}>
        <Icon glyph={g} size={s} {...this.link ()}/>
        <Badge kind="float" value={v} {...this.link ()} />
      </div>
    );
  }
}
