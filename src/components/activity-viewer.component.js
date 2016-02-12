'use strict';

import React from 'react';

export default class ActivityViewer extends React.Component {

  handleResize (e) {
    console.log ('RESIZE!');
  }

  render () {
    const {state} = this.props;
    console.log ('#AV:', state.id);
    console.dir (state);
    const MainView = state.get ('view');
    if (MainView) {
      return (
        <MainView {...this.link ()} />
      );
    } else {
      return (<small>Unable to mount activity view for {state.id}</small>);
    }

   }
}
