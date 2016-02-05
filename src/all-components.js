'use strict';
import Electrum from 'electrum';
import _ActivityViewer from './components/activity-viewer.component.js';
import _Button from './components/button.component.js';
export const ActivityViewer = Electrum.wrap ('ActivityViewer', _ActivityViewer);
export const Button = Electrum.wrap ('Button', _Button);
