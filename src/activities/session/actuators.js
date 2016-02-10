'use strict';
import Command from 'electrum-command';

const switchActivity = ({path}, state) => {
  const activityManager = state.getInherited ('am');
  activityManager.mainActivityPath = path;
};

const startActivity = (state) => {
  const activityManager = state.getInherited ('am');
  const activity = activityManager.startActivity ('desktop', state.id);
  state.select ('sessions')
    .add ()
    .set ('path', activity.path);
};

export default {
  SWITCH_ACTIVITY: Command ('SWITCH_ACTIVITY', switchActivity),
  START_ACTIVITY: Command ('START_ACTIVITY', (cmd, state) => startActivity (state))
};
