'use strict';
import Command from 'electrum-command';

const leaveDesktop = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  const activity = state.get ();
  activityManager.mainActivityPath = activity.callerPath;
};

export default {
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP', leaveDesktop)

};
