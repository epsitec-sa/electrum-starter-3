'use strict';

import React from 'react';

export default class Viewer extends React.Component {
  render () {
    const {state} = this.props;
    const MainView = state.get ('view');
    return (<MainView {...this.link ()} />);
   }
}
