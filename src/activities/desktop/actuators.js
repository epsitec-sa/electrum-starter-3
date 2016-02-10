'use strict';
import Command from 'electrum-command';

const leaveDesktop = ({path}, state) => {
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
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP',
                    (cmd, state) => leaveDesktop (cmd, state))

};
