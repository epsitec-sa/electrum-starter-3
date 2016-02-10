'use strict';

import 'babel-core/register';
import 'babel-polyfill';

import command from '../../../command.js';

function * coolName () {
  while (true) {
    yield 'Paul';
    yield 'Mathieu';
    yield 'Mathieu'; // twice to verify that shouldComponentUpdate returns false
    yield 'Pierre';
    yield 'Catia';
    yield 'Jonny';
    yield 'Sam';
  }
}

const coolNameGenerator = coolName ();

const doSayHello = (name, cool, state) => {
  console.log (`Inside POC's actuator; state.name=${state.get ('name')}, state.id=${state.id}`);
  state.set ('name', coolNameGenerator.next ().value);
};

export default {
  SAY_HELLO: command ('SAY_HELLO', (cmd, state) => doSayHello (cmd.name, cmd.cool, state))
};
