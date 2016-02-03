'use strict';
import Electrum from 'electrum';
import _Button from './components/button.component.js';
import _Viewer from './components/viewer.component.js';
export const Button = Electrum.wrap ('Button', _Button);
export const Viewer = Electrum.wrap ('Viewer', _Viewer);
