'use strict';

import React from 'react';

export default class ActivityViewer extends React.Component {
  render () {
    const {state} = this.props;
    console.log (state.get ());
    const MainView = state.get ('view');
    return (<MainView {...this.link ()} />);
  }
}
