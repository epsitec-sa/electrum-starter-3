'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state, glyph, size, rotate, flip, spin, rounded} = this.props;
    const inputGlyph   = glyph   || state.get ('glyph');
    const inputSize    = size    || state.get ('size');
    const inputRotate  = rotate  || state.get ('rotate');
    const inputFlip    = flip    || state.get ('flip');
    const inputSpin    = spin    || state.get ('spin');
    const inputRounded = rounded || state.get ('rounded');

    // const divStyle1 = {
    //   display: 'table-cell',
    //   width: '64px',
    //   height: '64px',
    //   textAlign: 'center',
    //   verticalAlign: 'middle',
    //   backgroundColor: '#bbb',
    // };
    // const divStyle2 = {
    // };

    var renderRotate;
    if (inputRotate === '90') {
      renderRotate = 'fa-rotate-90';
    } else if (inputRotate === '180') {
      renderRotate = 'fa-rotate-180';
    } else if (inputRotate === '270') {
      renderRotate = 'fa-rotate-270';
    } else {
      renderRotate = '';
    }

    var renderFlip;
    if (inputFlip === 'horizontal') {
      renderFlip = 'fa-flip-horizontal';
    } else if (inputFlip === 'vertical') {
      renderFlip = 'fa-flip-vertical';
    } else {
      renderFlip = '';
    }

    var renderSpin;
    if (inputSpin === 'on') {
      renderSpin = 'fa-spin';
    } else {
      renderSpin = '';
    }

    var divStyle;
    if (inputRounded === 'true') {
      var padding = '5px';
      if (inputSize === '2x') {
        padding = '10px';
      } else if (inputSize === '3x') {
        padding = '20px';
      }
      divStyle = {
       backgroundColor: '#82a1c2',
       borderRadius: '1000px',
       padding: padding
     };
    }

    return (
      <div style={divStyle}>
        <i style={this.styles} className={`fa fa-${inputGlyph} fa-${inputSize} ${renderRotate} ${renderFlip} ${renderSpin}`}/>
      </div>
    );
  }
}
