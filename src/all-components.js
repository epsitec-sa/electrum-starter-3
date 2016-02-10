'use strict';
import Electrum from 'electrum';
import _Forms from './components/activities/forms/forms.component.js';
import _WizardHome from './components/activities/forms/views/wizard-home.component.js';
import _Poc from './components/activities/poc/poc.component.js';
import _ActivityViewer from './components/activity-viewer.component.js';
import _Button from './components/button.component.js';
import _CurrentActivityInfo from './components/current-activity-info.component.js';
import _Root from './components/root.component.js';
export const Forms = Electrum.wrap ('Forms', _Forms);
export const WizardHome = Electrum.wrap ('WizardHome', _WizardHome);
export const Poc = Electrum.wrap ('Poc', _Poc);
export const ActivityViewer = Electrum.wrap ('ActivityViewer', _ActivityViewer);
export const Button = Electrum.wrap ('Button', _Button);
export const CurrentActivityInfo = Electrum.wrap ('CurrentActivityInfo', _CurrentActivityInfo);
export const Root = Electrum.wrap ('Root', _Root);
