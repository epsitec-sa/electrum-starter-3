'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state, glyph, size, spin} = this.props;
    const renderGlyph = glyph || state.get ('glyph');
    const renderSize = size  || state.get ('size');
    const renderSpin = spin  || state.get ('spin');

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

    var finalSpin;
    if (renderSpin === 'on') {
      finalSpin = 'fa-spin';
    } else {
      finalSpin = '';
    }

    return (
      <div>
        <i style={this.styles} className={`fa fa-${renderGlyph} fa-${renderSize} ${finalSpin}`}/>
      </div>
    );
  }
}
