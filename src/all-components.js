import Electrum from 'electrum';
import _Boolean from './components/boolean.component.js';
import _Button from './components/button.component.js';
import _Button$styles from './components/button.styles.js';
import _Codispatch from './components/codispatch.component.js';
import _Collection from './components/collection.component.js';
import _CurrentActivityInfo from './components/current-activity-info.component.js';
import _Label from './components/label.component.js';
export const Boolean = Electrum.wrap ('Boolean', _Boolean);
export const Button = Electrum.wrap ('Button', _Button, {styles: _Button$styles});
export const Codispatch = Electrum.wrap ('Codispatch', _Codispatch);
export const Collection = Electrum.wrap ('Collection', _Collection);
export const CurrentActivityInfo = Electrum.wrap ('CurrentActivityInfo', _CurrentActivityInfo);
export const Label = Electrum.wrap ('Label', _Label);
