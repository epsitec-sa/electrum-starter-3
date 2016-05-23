'use strict';

import Command from 'electrum-command';


const doSayHello = ({name}, state) => {
  console.log (state);
};

const next = (cmd, state) => {

};


export default {
  TEST: Command ('TEST', doSayHello),
  NEXT: Command ('NEXT', next)
};
