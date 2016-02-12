'use strict';

import React from 'react';

export default class Label extends React.Component {
  render () {
    return (
      <label onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </label>
    );
   }
}
