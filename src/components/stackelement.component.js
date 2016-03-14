'use strict';

import React from 'react';

export default class Stackelement extends React.Component {
  render () {
    const {children} = this.props;

    return (
      <div style={this.styles}>
        {children}
      </div>
    );
  }
}
