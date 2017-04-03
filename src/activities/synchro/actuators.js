import Command from 'electrum-command';


const doSayHello = ({name}, state) => {
  console.log (state);
};

const next = (cmd, state) => {
  const rootState = state.store.root;
  let currentThemeIndex = rootState.get ('currentThemeIndex');
  rootState.set ('currentThemeIndex', ++currentThemeIndex);
  state.store.mutateAll ();
};


export default {
  TEST: Command ('TEST', doSayHello),
  NEXT: Command ('NEXT', next)
};
