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

    var renderSpin;
    if (inputSpin === 'on') {
      renderSpin = 'fa-spin';
    } else {
      renderSpin = '';
    }

    var iconColor = '#000';
    var iconHoverColor = '#777';

    var divStyle;
    if (inputRounded === 'true') {
      const paddingArray = {
        '2x': '10px',
        '3x': '20px',
      };
      var padding = paddingArray[inputSize];
      if (!padding) {
        padding = '5px';
      }

      iconColor = '#fff';
      iconHoverColor = '#aaa';
      divStyle = {
        backgroundColor: '#336699',
        borderRadius: '1000px',
        padding: padding,
        color: iconColor,
      };
    }

    const iconStyle = {
      base: {  // il n'est pas possible d'avoir une sous-table ! Comment faire ?
        display: 'table-cell',
        width: '32px',
        height: '32px',
        textAlign: 'center',
        verticalAlign: 'middle',
        // backgroundColor: '#bbb',
        ':hover': {
          color: iconHoverColor,
        }
      },
      small: {
        width: '32px',
        height: '32px',
      },
      normal: {
        width: '48px',
        height: '48px',
      },
      large: {
        width: '64px',
        height: '64px',
      },
    };

    return (
      <div style={divStyle}>
        <i style={this.styles}  // pourquoi est-ce ko avec style={iconStyle} ?
          className={`fa
            fa-${inputGlyph}
            fa-${inputSize}
            fa-rotate-${inputRotate}
            fa-flip-${inputFlip}
            ${renderSpin}`}/>
      </div>
    );
  }
}
