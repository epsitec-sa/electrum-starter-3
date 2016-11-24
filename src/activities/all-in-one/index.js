'use strict';

import AllInOne from './all-in-one.js';
import actuators from './actuators.js';
import Activity from '../activity.js';
import DataMessengers from '../../components/data-messengers.js';
import DataTrips from '../../components/data-trips.js';
import DataContents from '../../components/data-contents.js';

const onInit = (state) => {
  DataMessengers.initializeData ();
  DataTrips.initializeData ();
  DataContents.initializeData ();
};

export default Activity.Create ('all-in-one', AllInOne, actuators, onInit);
