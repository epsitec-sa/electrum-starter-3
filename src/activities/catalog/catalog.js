'use strict';

import React from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
  FlatButton,
  RaisedButton,
  IconButton,
  RadioButton,
  Checkbox,
  Toggle,
  Badge,
  TextField,
  DatePicker,
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
        <h1>Toolbars</h1>
        <Toolbar {...this.link ()}>
          <ToolbarGroup float="left" {...this.link ()}>
            <ToolbarTitle text="Options" {...this.link ()} />
          </ToolbarGroup>
          <ToolbarGroup float="right" {...this.link ()}>
            <ToolbarSeparator {...this.link ()} />
            <RaisedButton primary action={act.TEST} label="Open" id="totoflat" {...this.link ()} />
            <RaisedButton action={act.TEST} label="Close" id="totoflat" {...this.link ()} />
            <ToolbarSeparator {...this.link ()} />
            <IconButton action={act.TEST} tooltip="Close the toolbar" id="totoflat" {...this.link ()} />
          </ToolbarGroup>
        </Toolbar>
        <h1>Forms</h1>
        <TextField id="field" {...this.link ('field')} />
        <br/>
        <br/>
        <TextField id="fieldWithError" {...this.link ('fieldWithError')} />
        <br/>
        <br/>
        <TextField id="multilineField" {...this.link ('multilineField')} />
          <h1>Date picker</h1>
          <DatePicker action={act.TEST}
            autoOk="true"
            container="dialog"
            hintText="Date de naissance"
            value="3/31/2016"
            id="datePicker" {...this.link ('datePicker')} />
          <hr />
        <h1>Buttons</h1>
        <FlatButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton primary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <RaisedButton secondary action={act.TEST} label="click me" id="totoflat" {...this.link ()} />
        <IconButton action={act.TEST} tooltip="Close the window" id="totoflat" {...this.link ()} />
        <hr />
        <div>
          <RaisedButton primary action={act.TEST} label="Button with badge" id="totoflat" {...this.link ()} />
          <Badge badgeContent="12" {...this.link ()} />
        </div>
        <hr />
        <h1>Radio buttons</h1>
        <RadioButton action={act.TEST} label="Rouge" id="radioRed"   {...this.link ('radioRed')} />
        <RadioButton action={act.TEST} label="Vert"  id="radioGreen" {...this.link ('radioGreen')} />
        <RadioButton action={act.TEST} label="Bleu"  id="radioBlue"  {...this.link ('radioBlue')} />
        <hr />
        <h1>Checkbox buttons</h1>
        <Checkbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
        <Checkbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
        <Checkbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
        <hr />
        <h1>Toggle buttons</h1>
        <Toggle action={act.TEST} label="Paul"   id="toggle1" {...this.link ('toggle1')} />
        <Toggle action={act.TEST} label="Alfred" id="toggle2" {...this.link ('toggle2')} />
        <hr />
        <h1>Basic list exemple</h1>
        <BasicList {...this.link ('basiclist')} template={listTemplate}>
          <ListItem disabled={true} primaryText="end" />
        </BasicList>
      </div>
    );
  }
}
