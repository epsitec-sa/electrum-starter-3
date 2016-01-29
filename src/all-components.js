'use strict';
import Electrum from 'electrum';
import _Poc from './components/poc.component.js';
export const Poc = Electrum.wrap ('Poc', _Poc);
