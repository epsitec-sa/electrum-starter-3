'use strict';

import React from 'react';

export default class Badge extends React.Component {
  render () {
    const {state, glyph} = this.props;
    const value = state.get ('value');


    return (
      <label style={this.styles}>
          {value}
      </label>
    );
  }
}
