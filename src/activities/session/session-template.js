'use strict';
import React from 'react';
import act from './actuators.js';
import {Button} from '../../all-components';
import Electrum from 'electrum';
export default (state, props) => {
  const path = state.get ('path');
  console.log (path);
  return (
    <li key={path}>
      <h1>{path}</h1>
      <Button
        action={act.SWITCH_ACTIVITY ({path: path})}
        {...Electrum.link (props)} >
        Restore
      </Button>
    </li>
  );
};
