'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state, glyph, size, rotate, flip, spin} = this.props;
    const renderGlyph  = glyph  || state.get ('glyph');
    const renderSize   = size   || state.get ('size');
    const renderRotate = rotate || state.get ('rotate');
    const renderFlip   = flip   || state.get ('flip');
    const renderSpin   = spin   || state.get ('spin');

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

    var finalRotate;
    if (renderRotate === '90') {
      finalRotate = 'fa-rotate-90';
    } else if (renderRotate === '180') {
      finalRotate = 'fa-rotate-180';
    } else if (renderRotate === '270') {
      finalRotate = 'fa-rotate-270';
    } else {
      finalRotate = '';
    }

    var finalFlip;
    if (renderFlip === 'horizontal') {
      finalFlip = 'fa-flip-horizontal';
    } else if (renderFlip === 'vertical') {
      finalFlip = 'fa-flip-vertical';
    } else {
      finalFlip = '';
    }

    var finalSpin;
    if (renderSpin === 'on') {
      finalSpin = 'fa-spin';
    } else {
      finalSpin = '';
    }

    return (
      <div>
        <i style={this.styles} className={`fa fa-${renderGlyph} fa-${renderSize} ${finalRotate} ${finalFlip} ${finalSpin}`}/>
      </div>
    );
  }
}
