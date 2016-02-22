'use strict';

import React from 'react';

export default class Button extends React.Component {
  render () {
    return (
      <button style={this.styles} onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </button>
    );
   }
}
