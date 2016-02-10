'use strict';

import Electrum from 'electrum';

import command from './command.js';

/******************************************************************************/

export const START_ACTIVITY = command ('START_ACTIVITY', cmd => Electrum.bus.startActivity (cmd.name));
export const SWITCH_ACTIVITY = command ('SWITCH_ACTIVITY', cmd => Electrum.bus.switchActivity (cmd.id));

/******************************************************************************/
