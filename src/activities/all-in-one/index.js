'use strict';

import AllInOne from './all-in-one.js';
import actuators from './actuators.js';
import Activity from '../activity.js';
import Data from '../../components/data-trips.js';
const {initializeData} = Data;

const onInit = (state) => {
  initializeData ();
};

export default Activity.Create ('all-in-one', AllInOne, actuators, onInit);
