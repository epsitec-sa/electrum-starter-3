'use strict';
import Command from 'electrum-command';

const leaveDesktop = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  const activity = state.get ();
  activityManager.mainActivityPath = activity.callerPath;
};

const startMain = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  const activity = activityManager.startActivity (state, 'poc', 'activities');
  const key = activity.parent.split ('.').pop ();
  const path = key + '.' + activity.id;
  state.set ('mainActivityKey', path);
};

const selectTab = ({path}, state) => {
  state.set ('mainActivityKey', path);
};

export default {
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP', leaveDesktop),
  START_MAIN: Command ('START_MAIN', startMain),
  SELECT_TAB: Command ('SELECT_TAB', selectTab)
};
