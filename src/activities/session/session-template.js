'use strict';
import React from 'react';
import act from './actuators.js';
import {Button} from '../../all-components';
import Electrum from 'electrum';
export default (state, props) => {
  const activity = state.get ();
  console.log (activity.path);
  return (
    <li key={activity.path}>
      <h1>{activity.path}</h1>
      <Button
        action={act.SWITCH_ACTIVITY ({path: activity.path})}
        {...Electrum.link (props)} >
        Restore
      </Button>
    </li>
  );
};
