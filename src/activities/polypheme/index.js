'use strict';

import Polypheme from './polypheme.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

function Replace (text, search, replacement) {
  let result = '';
  let i;
  for (i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === search) {
      result += replacement;
    } else {
      result += c;
    }
  }
  return result;
}

function Trim (text, search) {
  while (text.startsWith (search)) {
    text = text.substring (search.length, text.length);
  }
  while (text.endsWith (search)) {
    text = text.substring (0, text.length - search.length);
  }
  return text;
}

function FormatDate (brut) {
  let message = null;
  let result = '';
  brut = Replace (brut, '.', ' ');
  brut = Replace (brut, ':', ' ');
  brut = Replace (brut, '/', ' ');
  brut = brut.trim ();
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
    let p = parseInt (a[i]);
    if (isNaN (p)) {
      if (i === 0) {
        p = 25;
      } else if (i === 1) {
        p = 12;
      } else if (i === 2) {
        p = 2016;
      }
      message = 'Date incorrecte';
    }
    if (i === 0) {
      if (p > 31) {
        p = 31;
        message = 'Le jour est incorrect';
      }
    } else if (i === 1) {
      if (p > 12) {
        p = 12;
        message = 'Le mois est incorrect';
      }
    } else if (i === 2) {
      if (p < 2000) {
        p += 2000;
      }
    }
    if (i < 3) {
      if (i > 0) {
        result += '.';
      }
      if (p < 10) {
        result += '0' + p;
      } else {
        result += p;
      }
    } else {
      message = 'Date trop longue';
    }
  }

  return {message, result};
}

function FormatTime (brut) {
  let message = null;
  let result = '';
  brut = Replace (brut, '.', ' ');
  brut = Replace (brut, ':', ' ');
  brut = Replace (brut, '/', ' ');
  brut = brut.trim ();
  let a = brut.split (' ');
  if (a.length < 1 || brut === '') {
    a[0] = 12;
  }
  if (a.length < 2) {
    a[1] = 0;
  }
  if (a.length < 3) {
    a[2] = 0;
  }
  let i;
  for (i = 0; i < a.length; i++) {
    let p = parseInt (a[i]);
    if (isNaN (p)) {
      if (i === 0) {
        p = 12;
      } else if (i === 1) {
        p = 0;
      } else if (i === 2) {
        p = 0;
      }
      message = 'Heure incorrecte';
    }
    if (i === 0) {
      if (p > 23) {
        p = 23;
        message = 'L\'heure est incorrecte';
      }
    } else if (i === 1) {
      if (p > 59) {
        p = 59;
        message = 'Les minutes sont incorrectes';
      }
    } else if (i === 2) {
      if (p > 59) {
        p = 59;
        message = 'Les secondes sont incorrectes';
      }
    }
    if (i < 3) {
      if (i > 0) {
        result += ':';
      }
      if (p < 10) {
        result += '0' + p;
      } else {
        result += p;
      }
    } else {
      message = 'Heure trop longue';
    }
  }

  return {message, result};
}

function DateTooltip (brut) {
  var f = FormatDate (brut);
  if (f.message) {
    return f.message + '|' + f.result;
  } else {
    return f.result;
  }
}

function TimeTooltip (brut) {
  var f = FormatTime (brut);
  if (f.message) {
    return f.message + '|' + f.result;
  } else {
    return f.result;
  }
}

function initDate (state, name) {
  const dateModifier = state.select (name);

  Activity.RegisterNotifiers (dateModifier,
  (value, state) => {
    const t = DateTooltip (value);
    console.log (`CHANGE ${value} ${t}`);
    // console.dir (state);
    state.set ('tooltip', `${t}`);
  }, (value, state) => {
    const t = DateTooltip (value);
    console.log (`ONFOCUS ${value} ${t}`);
    state.set ('tooltip', `${t}`);
    // console.dir (state);
  }, (value, state) => {
    const t = DateTooltip (value);
    console.log (`ONDEFOCUS ${value} ${t}`);
    state.set ('tooltip', null);
    // state.set ('value', t.result);  // TODO: pourquoi ça ne marche pas ???
    // console.dir (state);
  });
}

function initTime (state, name) {
  const timeModifier = state.select (name);

  Activity.RegisterNotifiers (timeModifier,
  (value, state) => {
    const t = TimeTooltip (value);
    state.set ('tooltip', `${t}`);
  }, (value, state) => {
    const t = TimeTooltip (value);
    state.set ('tooltip', `${t}`);
  }, (value, state) => {
    const t = TimeTooltip (value);
    state.set ('tooltip', null);
    // state.set ('value', t.result);  // TODO: pourquoi ça ne marche pas ???
  });
}

const onInit = (state) => {
  const destDateCalendar = state.select ('dest-date');
  destDateCalendar.set ('date', new Date (2016, 3 - 1, 31));

  const testCalendar = state.select ('test-calendar');
  testCalendar.set ('date', Date.now ());

  const testClock = state.select ('test-calendar');
  testClock.set ('time', Date.now ());

  initDate (state, 'exp-date');
  initTime (state, 'exp-time');
  initDate (state, 'dest-date');
  initTime (state, 'dest-time');
};

export default Activity.Create ('polypheme', Polypheme, actuators, onInit);
