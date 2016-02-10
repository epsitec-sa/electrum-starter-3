'use strict';

export default function command (name, handler, setup) {
  const f = function (args) {
    const c = function (...args) {
      if (!handler) {
        throw new Error (`Command ${name} does not define a command handler`);
      }
      handler (c.info, ...args);
    };
    c.info = setup ? setup () : {};
    c.type = name;
    c.factory = f;
    for (let key in args) {
      if (args.hasOwnProperty (key)) {
        c.info[key] = args[key];
      }
    }
    return c;
  };
  f.type = name;
  return f;
}

const INCREMENT = command ('INCREMENT', (cmd, state) => state.value += cmd.step);
const DECREMENT = command ('DECREMENT', (cmd, state) => state.value -= cmd.step);

const INC_1 = INCREMENT ({step: 1});
const INC_10 = INCREMENT ({step: 10});
const DEC_2 = DECREMENT ({step: 2});

console.log (INCREMENT.type);

let x = {
  value: 0
};

INC_10 (x);
INC_1 (x);
INC_10 (x);
DEC_2 (x);

console.log (x);
