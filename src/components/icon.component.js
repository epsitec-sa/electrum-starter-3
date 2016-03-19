'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state, glyph, size} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');

    const divStyle1 = {
      display: 'table-cell',
      width: '64px',
      height: '64px',
      textAlign: 'center',
      verticalAlign: 'middle',
      backgroundColor: '#bbb',
    };
    const divStyle2 = {
    };

    return (
      <div>
        <i style={this.styles} className={`fa fa-${g} fa-${s}`}/>
      </div>
    );
  }
}
