'use strict';

import createAction from './create-action.js';

/******************************************************************************/

export function startActivity (activityName) {
  return createAction ('START_ACTIVITY', {name: activityName});
}

export function switchActivity (activityId) {
  return createAction ('SWITCH_ACTIVITY', {id: activityId});
}

/******************************************************************************/
