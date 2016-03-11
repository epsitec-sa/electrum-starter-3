'use strict';

import React from 'react';

export default class CurrentActivityInfo extends React.Component {
  render () {
    const {state} = this.props;
    const currentActivity = state.get ('currentActivity');
    const actuators = currentActivity.actuators;
    const activityActions = Object.keys (actuators);

    return (
      <div {...this.link ()}>
        <p><b>{currentActivity.id}</b></p>
        <p>actions:</p>
        <ul>
          {activityActions.map ((action) => {
            return (
              <li key={action}>{action}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
