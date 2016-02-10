'use strict';

import React from 'react';

export default class CurrentActivityInfo extends React.Component {
  render () {
    const {state} = this.props;
    const am = state.get ();
    const currentActivity = am.currentActivity.get ();
    const actuators = currentActivity.actuators;
    const activityActions =  Object.keys (actuators);

    return (
      <div>
        <p><b>{currentActivity.id}</b></p>
        <p>actions:</p>
        <ul>
          {activityActions.map ((action) => {
            console.log (action);
            return (
              <li key={action}>{action}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
