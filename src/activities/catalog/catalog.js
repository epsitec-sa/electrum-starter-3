'use strict';

import React from 'react';
import {FlatButton, RaisedButton, BasicList, ListItem} from 'electrum-arc';
import act from './actuators.js';

export default class Catalog extends React.Component {
  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };
    return (
      <div>
        <h1>Catalog of buttons</h1>
        <FlatButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton primary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton secondary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <hr />
        <h1>Basic list exemple</h1>
        <BasicList {...this.link ('list')} template={listTemplate}>
          <ListItem disabled={true} primaryText="FIN" />
        </BasicList>
      </div>
    );
  }
}
