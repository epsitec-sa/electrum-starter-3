'use strict';
import {State} from 'electrum-store';
import {Forms} from './forms.js';
import actuactors from './actuators.js';

export const actuators = actuactors;
export const appState = State.create ('app', {
  view: Forms
});
