'use strict';

import React from 'react';

export default class Icon extends React.Component {
  render () {
    const {state} = this.props;
    const glyph = state.get ('glyph');
    const size = state.get ('size');
    return (
      <i className={`fa fa-${glyph} fa-${size}`}/>
    );
  }
}
