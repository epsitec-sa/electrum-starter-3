'use strict';

import React from 'react';

export default class Stack extends React.Component {
  render () {
    const {width, backgroundColor, children} = this.props;

    return (
      <div style={{width: width, backgroundColor: backgroundColor}}>
        {children}
      </div>
    );
  }
}
