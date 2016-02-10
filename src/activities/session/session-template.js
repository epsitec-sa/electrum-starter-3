'use strict';
import act from './actuators.js';
import {Button} from '../../all-components';
export default (state) => {
  return (
    <li key={state.aid}>
      <h1>{state.title}</h1>
      <Button action={act.SWITCH_ACTIVITY ({id: state.aid})} {...this.link ()}>
        Restore {state.title}
      </Button>
    </li>
  );
};
