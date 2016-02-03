'use strict';

import React from 'react';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    return (
      <div onClick={this.onClick}>
        {this.props.children}<br/>
        <span>{state.get ('name')}</span>
      </div>
    );
   }
}
