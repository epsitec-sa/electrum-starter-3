'use strict';

import React from 'react';

export default class Checkbox extends React.Component {
  render () {
    let isChecked = {};

    if (this.props.state.checked) {
      isChecked.checked = true;
    }

    return (
      <input type='checkbox' style={this.styles} {...isChecked}> {this.props.state.get ('title')} </input>
    );
   }
}
