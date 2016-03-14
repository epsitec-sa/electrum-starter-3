'use strict';

import React from 'react';

export default class Stack extends React.Component {
  render () {
    const {backgroundColor, children} = this.props;

    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: backgroundColor}}>
        <div style={this.styles}>
          {children}
        </div>
      </div>
    );
  }
}
