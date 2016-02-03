'use strict';

import React from 'react';

export default class Button extends React.Component {
  render () {
    return (
      <button onClick={this.onClick}>
        {this.props.children}
      </button>
    );
   }
}
