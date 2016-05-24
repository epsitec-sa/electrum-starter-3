'use strict';

import Polypheme from './polypheme.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

function FormattingDate (brut) {
  let result = '';
  brut = brut.trim ();
  // brut = brut.replace (/./g, ' ');
  // brut = brut.replace (/:/g, ' ');
  let a = brut.split (' ');
  if (a.length < 1 || brut === '') {
    a[0] = 25;
  }
  if (a.length < 2) {
    a[1] = 12;
  }
  if (a.length < 3) {
    a[2] = 2016;
  }
  let i;
  for (i = 0; i < a.length; i++) {
    if (i > 0) {
      result += '.';
    }
    let p = parseInt (a[i]);
    if (!p.isNaN) {
      if (i === 0) {
        if (p > 31) {
          p = 31;
        }
      } else if (i === 1) {
        if (p > 12) {
          p = 12;
        }
      } else if (i === 2) {
        if (p < 2000) {
          p += 2000;
        }
      }
      if (p < 10) {
        result += '0' + p;
      } else {
        result += p;
      }
    }
  }

  return result;
}

const onInit = (state) => {
  const dateModifier = state.select ('date');
  Activity.RegisterNotifiers (dateModifier,
  (value, state) => {
    const t = FormattingDate (value);
    console.log (`CHANGE ${value} ${t}`);
    // console.dir (state);
    state.set ('tooltip', `${t}`);
  }, (value, state) => {
    const t = FormattingDate (value);
    console.log (`ONFOCUS ${value} ${t}`);
    state.set ('tooltip', `${t}`);
    // console.dir (state);
  }, (value, state) => {
    const t = FormattingDate (value);
    console.log (`ONDEFOCUS ${value} ${t}`);
    state.set ('tooltip', null);
    // state.set ('value', t);  // TODO: pourquoi ça ne marche pas ???
    // console.dir (state);
  });

  const field = state.select ('field');
  field
    .set ('value', '')
    .set ('floatingLabelText', 'TextField example')
    .set ('hintText', 'placeholder text')
    .set ('errorText', '');
};

export default Activity.Create ('polypheme', Polypheme, actuators, onInit);
