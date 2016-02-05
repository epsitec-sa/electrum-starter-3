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

Simple activity:

```
// Example activity:

import {ViewComponent} from './forms.js';
import Activity from '../activity.js';

const setName = (state, action) => {
  state.set ('name', action.name);
};
const actuators =  {
  SET_NAME: (state, action) => setName (state, action)
};

const initialState = {
  view: ViewComponent
};

export default () => {
  return new Activity ('forms', initialState, actuators);
};
```

more examples available in `src/activities/`

## actuators

Arguments order:

```
(activityState, dispatchedAction, activityId, store, doAction (...))
```
