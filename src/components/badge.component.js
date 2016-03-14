'use strict';

import React from 'react';

export default class Badge extends React.Component {
  render () {
    const {state} = this.props;
    const badge = {
      backgroundColor: '#f00',
      color: '#fff',
      borderRadius: '2em',
      fontSize: '75%',
      fontWeight: 'bold',
      padding: '0.4em'
    };
    const value = state.get ('value');
    return (
      <label style={badge}>
          {value}
      </label>
    );
  }
}
