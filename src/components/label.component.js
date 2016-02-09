'use strict';

import React from 'react';

export default class Label extends React.Component {
  render () {
    return (
      <label style={this.styles} onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </label>
    );
   }
}
