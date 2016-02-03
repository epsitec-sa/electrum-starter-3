'use strict';

function * coolName () {
  while (true) {
    yield 'Paul';
    yield 'Mathieu';
    yield 'Pierre';
    yield 'Catia';
    yield 'Johny';
    yield 'Sam';
  }
}

const coolNameGenerator = coolName ();

const doSayHello = (store) => {
  const demoState = store.select ('demo');
  demoState.set ('name', coolNameGenerator.next ().value);
};

const SAY_HELLO = 'SAY_HELLO';

export default {
  [SAY_HELLO]: (store) => doSayHello (store)
};
