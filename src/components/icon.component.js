'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state, glyph, size} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');

    return (
      <i className={`fa fa-${g} fa-${s}`}/>
    );
  }
}
