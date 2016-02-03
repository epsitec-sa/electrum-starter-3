'use strict';

export default function createAction (command, payload) {
  return ({type: command, ...payload});
}
