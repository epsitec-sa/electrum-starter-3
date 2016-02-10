'use strict';
import Command from 'electrum-command';

const switchActivity = ({id}, state) => {
  const amState = state.getInherited ('activity-manager');
  const activityManager = amState.get ('am');
  activityManager.mainActivityId = id;
};

const startActivity = (state) => {
  const amState = state.getInherited ('activity-manager');
  console.log ('##');
  console.dir (amState);
  const activityManager = amState.get ('am');
  activityManager.startActivity ('desktop', state.id);
};

export default {
  SWITCH_ACTIVITY: Command ('SWITCH_ACTIVITY', (cmd, state) => switchActivity (cmd, state)),
  START_ACTIVITY: Command ('START_ACTIVITY', (cmd, state) => startActivity (state))
};
