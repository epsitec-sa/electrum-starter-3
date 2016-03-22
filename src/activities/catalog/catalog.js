'use strict';

import React from 'react';
import {
  FlatButton,
  RaisedButton,
  IconButton,
  RadioButton,
  Checkbox,
  Badge,
  TextField,
  BasicList,
  ListItem
} from 'electrum-arc';
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
      <div style={{padding: '10px 0px 0px 30px'}}>
        <h1>Catalog of components</h1>
        <h6><a href="http://www.material-ui.com/#/components/">documentation</a></h6>
        <h1>Forms</h1>
        <TextField id="field" {...this.link ('field')} />
        <br/>
        <br/>
        <TextField id="fieldWithError" {...this.link ('fieldWithError')} />
        <br/>
        <br/>
        <TextField id="multilineField" {...this.link ('multilineField')} />
        <h1>Buttons</h1>
        <FlatButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton primary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton secondary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <IconButton action={act.TEST} tooltip="click me" id="totoflat" {...this.link ()} />
        <hr />
        <div>
          <RaisedButton primary action={act.TEST} label="Button with badge" id="totoflat" {...this.link ()} />
          <Badge badgeContent="12" {...this.link ()} />
        </div>
        <hr />
        <h1>Radio buttons</h1>
        <RadioButton action={act.TEST} label="Rouge" checked id="radioRed" {...this.link ()} />
        <RadioButton action={act.TEST} label="Vert" id="radioGreen" {...this.link ()} />
        <RadioButton action={act.TEST} label="Bleu" id="radioBlue" {...this.link ()} />
        <hr />
        <h1>Checkbox buttons</h1>
        <Checkbox action={act.TEST} label="Rouge" checked id="radioRed" {...this.link ()} />
        <Checkbox action={act.TEST} label="Vert" id="radioGreen" {...this.link ()} />
        <Checkbox action={act.TEST} label="Bleu" id="radioBlue" {...this.link ()} />
        <hr />
        <h1>Basic list exemple</h1>
        <BasicList {...this.link ('list')} template={listTemplate}>
          <ListItem disabled={true} primaryText="end" />
        </BasicList>
      </div>
    );
  }
}
