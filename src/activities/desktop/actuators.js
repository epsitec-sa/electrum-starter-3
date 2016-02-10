'use strict';
import Command from 'electrum-command';

const leaveDesktop = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  const sessionManagerPath = state.getInherited ('sessionManagerPath');
  console.log (sessionManagerPath);
  activityManager.mainActivityPath = sessionManagerPath;
};

export default {
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP', leaveDesktop)

};
