'use strict';
import {TabsManager} from './tabs-manager.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

export default Activity.Create ('tabs', TabsManager, actuators);
