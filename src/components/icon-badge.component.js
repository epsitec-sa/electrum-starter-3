'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, value} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');
    const v = value || state.get ('value');

    var dim = '1em';
    switch (s) {
      case '1x':
        dim = '1em';
        break;
      case '2x':
        dim = '2em';
        break;
      case '3x':
        dim = '3em';
        break;
      case '4x':
        dim = '4em';
        break;
      case '5x':
        dim = '5em';
        break;
    }

    const divStyle1 = {
      position: 'relative',
      width: dim,
      height: dim,
    };
    const divStyle2 = {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      width: '20px',
      height: '20px',
      textAlign: 'center',
      lineHeight: '20px',
      fontSize: '60%',
      fontWeight: 'bold',
      padding: '2px',
      borderRadius: '2em',
      backgroundColor: '#f00',
      color: '#fff',
    };

    return (

      // <div>
      //   <Icon glyph={g} size={s} {...this.link ()}/>
      //   <Badge kind="float" value={v} {...this.link ()} />
      // </div>
      <div style={divStyle1}>
        <Icon glyph={g} size={s} {...this.link ()}/>
        <div style={divStyle2}>{v}</div>
      </div>
    );
  }
}
