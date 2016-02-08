'use strict';

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

const doSayHello = (state) => {
  console.log (state);
  state.set ('name', coolNameGenerator.next ().value);
};

export default {
  SAY_HELLO: (state) => doSayHello (state)
};
