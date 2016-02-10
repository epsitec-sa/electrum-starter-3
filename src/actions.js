'use strict';

import Electrum from 'electrum';
import Command from 'electrum-command';

/******************************************************************************/

export const START_ACTIVITY = Command ('START_ACTIVITY', cmd => Electrum.bus.startActivity (cmd.name));
export const SWITCH_ACTIVITY = Command ('SWITCH_ACTIVITY', cmd => Electrum.bus.switchActivity (cmd.id));

/******************************************************************************/
