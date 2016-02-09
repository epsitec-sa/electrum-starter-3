'use strict';

const selectTab = (state, key) => {
  console.log ('SELECT_TAB:', key);
};

const setPath = (state, action, id) => {
  console.log ('setPath:', action);
  state.set ('path', action.path);
};

export default {
  TABS_SELECT: (state, action) => selectTab (state, action.key),
  TABS_SET_PATH: setPath
};
