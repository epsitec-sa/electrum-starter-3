'use strict';

import React from 'react';

export default class Viewer extends React.Component {
  render () {
    const {state} = this.props;
    const Main = state.get ('main');
    return (<Main {...this.props} />);
   }
}
