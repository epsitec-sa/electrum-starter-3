'use strict';
import Electrum from 'electrum';
import _Viewer from './components/viewer.component.js';
export const Viewer = Electrum.wrap ('Viewer', _Viewer);
