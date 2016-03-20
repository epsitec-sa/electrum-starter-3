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

    var renderSpin;
    if (inputSpin === 'on') {
      renderSpin = 'fa-spin';
    } else {
      renderSpin = '';
    }

    var x = this.styles;

    var divStyle;
    if (inputRounded === 'true') {
      var padding = '5px';
      if (inputSize === '2x') {
        padding = '10px';
      } else if (inputSize === '3x') {
        padding = '20px';
      }
      divStyle = {
        backgroundColor: '#336699',
        borderRadius: '1000px',
        padding: padding,
        color: '#fff',
      };
      // Le but est de modifier la couleur hover lorsque l'icône est rounded,
      // mais cela ne fonctionne pas !!!
      const y = {
        color: '#f00',
      };
      x[':hover'] = y;
    }

    return (
      <div style={divStyle}>
        <i style={x}
          className={`
            fa fa-${inputGlyph}
            fa-${inputSize}
            fa-rotate-${inputRotate}
            fa-flip-${inputFlip}
            ${renderSpin}`}/>
      </div>
    );
  }
}
