'use strict';
import Command from 'electrum-command';

const selectTab = ({key}, state) => {
  console.log ('SELECT_TAB:', key);
};

const setPath = ({action, id}, state) => {
  console.log ('setPath:', action);
  state.set ('path', action.path);
};

export default {
  TABS_SELECT: Command ('TABS_SELECT', selectTab),
  TABS_SET_PATH: Command ('TABS_SET_PATH', setPath)
};
