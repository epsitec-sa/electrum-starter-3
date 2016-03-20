'use strict';

import React from 'react';

export default class Badge extends React.Component {
  render () {
    const {state, value} = this.props;
    const inputValue = value || state.get ('value');

    return (
      <label style={this.styles}>
        {inputValue}
      </label>
    );
  }
}
