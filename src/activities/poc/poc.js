import React from 'react';
import {Button, Boolean} from '../../all-components';
import act from './actuators.js';

export default class Poc extends React.Component {
  render () {
    const {state} = this.props;
    const name = state.get ('name');
    const Wizard = state.select ('wizard.[forms]').get ().view;
    return (
      <div>
        {`Hello ${name}`}
        <br/>
        <Boolean text="coucou123" checked={true} />
        <Button id={state.id} action={act.SAY_HELLO} {...this.link ()}>Say hello...</Button>
        <Wizard {...this.link ('wizard.[forms]')} />
      </div>
    );
  }
}
