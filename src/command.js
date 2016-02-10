'use strict';

function command (name, handler) {
  const f = function (args) {
    const c = function (...args) {
      handler (c, ...args);
    };
    for (let key in args) {
      if (args.hasOwnProperty (key)) {
        c[key] = args[key];
      }
    }
    return c;
  };
  f.type = name;
  return f;
}

const INCREMENT = command ('INCREMENT', (cmd, state) => state.value += cmd.step);

const INC_1 = INCREMENT ({step: 1});
const INC_10 = INCREMENT ({step: 10});

let x = {
  value: 0
};

INC_10 (x);
INC_10 (x);
INC_1 (x);

console.log (x);
