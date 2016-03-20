'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, rotate, flip, spin, value} = this.props;
    const inputGlyph  = glyph  || state.get ('glyph');
    const inputSize   = size   || state.get ('size');
    const inputRotate = rotate || state.get ('rotate');
    const inputFlip   = flip   || state.get ('flip');
    const inputSpin   = spin   || state.get ('spin');
    const inputValue  = value  || state.get ('value');

    const divStyle = {
      position: 'relative',
    };

    return (
      <div style={divStyle}>
        <Icon
          glyph ={inputGlyph}
          size  ={inputSize}
          rotate={inputRotate}
          flip  ={inputFlip}
          spin  ={inputSpin} {...this.link ()}/>
        <Badge kind="float" value={inputValue} {...this.link ()} />
      </div>
    );
  }
}
