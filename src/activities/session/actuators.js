'use strict';
import Command from 'electrum-command';

const switchActivity = ({activity}, state) => {
  const activityManager = state.getInherited ('am');
  activity.callerPath = state.id;
  activityManager.mainActivityPath = activity.path;
};

const startActivity = (cmd, state) => {
  const activityManager = state.getInherited ('am');
  activityManager.startActivity (state, 'desktop', 'sessions');
};

const changeTitle = ({text}, state) => {
  state.set ('title', text);
}

export default {
  SWITCH_SESSION: Command ('SWITCH_SESSION', switchActivity),
  START_SESSION: Command ('START_SESSION', startActivity),
  CHANGE_TITLE: Command ('CHANGE_TITLE', changeTitle)
};
