# Electrum starter kit v3

To get up and running:

```
npm install
npm start
```

Wait for WebpackDevServer to display a message like this:

```
WebpackDevServer listening at http://localhost:3000
15:55:21: hot rebuild; successful √
```

then point your browser to http://localhost:3000/ and marvel at the beauty of
Electrum-wrapped React components.

## Activity crafting

`Activity.Create ('name', MainView, actuators, onInit, onRun, onKill);`

Simple activity:

```
// Example activity:

'use strict';
import Activity from '../activity.js';
import {MainView} from './component.js';
import actuators from './actuators.js';

// add some state on init
const onInit = (state) => {
  state.set ('name', '<nobody>');
};

export default Activity.Create ('poc', MainView, actuators, onInit);
```

more examples available in `src/activities/`

## actuators

An actuator is your activity action dispatcher.
You wire electrum commands (see `electrum-command`) on verbs.
Example:

```
import Command from 'electrum-command';

const leaveDesktop = (cmd, state) => {
  // do something on the state, with cmd parameters...
};

export default {
  LEAVE_DESKTOP: Command ('LEAVE_DESKTOP', leaveDesktop)
};

```
