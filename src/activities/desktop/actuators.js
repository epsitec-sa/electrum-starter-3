'use strict';
import Command from 'electrum-command';

const leaveDesktop = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  const activity = state.get ();
  activityManager.mainActivityPath = activity.callerPath;
};

const startMain = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  activityManager.startActivity (state, 'poc', 'activities');
  state.set ('mainActivityKey', '0.poc');
};

export default {
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP', leaveDesktop),
  START_MAIN: Command ('START_MAIN', startMain)
};
