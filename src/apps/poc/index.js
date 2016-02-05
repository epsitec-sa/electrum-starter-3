'use strict';
import {State} from 'electrum-store';
import {Poc} from './poc.js';
import actuactors from './actuators.js';

export const actuators = actuactors;
export const appState = State.create ('app', {
  name: '<nobody>',
  view: Poc
});
