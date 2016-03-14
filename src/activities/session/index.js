'use strict';
import SessionManager from './session-manager.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

const onRun = (state) => {
  state.set ('sessionManagerPath', state.id)
       .set ('title', 'I\'m confused...');
  console.log (`sessionManagerPath=${state.id}`);
};

export default Activity.Create ('session', SessionManager, actuators, null, onRun);
