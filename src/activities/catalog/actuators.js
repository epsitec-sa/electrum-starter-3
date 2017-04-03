import Command from 'electrum-command';


const doSayHello = ({name}, state) => {
  console.log (state);
};


export default {
  TEST: Command ('TEST', doSayHello)
};
