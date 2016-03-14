'use strict';

import React from 'react';

export default class Text extends React.Component {
  render () {
    return (
      <span style={this.styles}>
      {this.read ('text')}
      </span>
    );
  }
}
