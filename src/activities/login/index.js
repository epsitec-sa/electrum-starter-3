'use strict';
import {Login} from './login.js';
import actuators from './actuators.js';
import Activity from '../activity.js';

export default Activity.Create ('login', Login, actuators);
