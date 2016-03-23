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
  FloatingActionButton,
  RadioButton,
  Checkbox,
  Toggle,
  Badge,
  TextField,
  DatePicker,
  BasicList,
  ListItem
} from 'electrum-arc';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import act from './actuators.js';

export default class Catalog extends React.Component {
  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    const style = {
      button: {
        marginRight: 20,
      }
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
            <RaisedButton primary action={act.TEST} label="Open" {...this.link ()} />
            <RaisedButton action={act.TEST} label="Close" {...this.link ()} />
            <ToolbarSeparator {...this.link ()} />
            <IconButton action={act.TEST} tooltip="Close the toolbar" {...this.link ()} />
          </ToolbarGroup>
        </Toolbar>

        <TextField id="field" {...this.link ('field')} />
        <br/>
        <br/>
        <TextField id="fieldWithError" {...this.link ('fieldWithError')} />
        <br/>
        <br/>
        <TextField id="multilineField" {...this.link ('multilineField')} />

        <h1>Date picker</h1>
        <DatePicker action={act.TEST}
          autoOk={true}
          container="dialog"
          hintText="Date de naissance"
          value="3/31/2016"
          id="datePicker" {...this.link ('datePicker')} />
        <hr />

        <h1>Buttons</h1>
        <div>
          <FlatButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button}
            linkButton={true} href="http://www.epsitec.ch"a label="Epsitec" {...this.link ()} />
        </div>
        <div>
          <RaisedButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <RaisedButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <RaisedButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <IconButton action={act.TEST} tooltip="Close the window" {...this.link ()} />
        </div>
        <div>
          <RaisedButton action={act.TEST} label="Button with primary badge" {...this.link ()} />
          <Badge style={style.button} badgeContent="12" primary={true} {...this.link ()} />
          <RaisedButton action={act.TEST} label="Button with secondary badge" {...this.link ()} />
          <Badge style={style.button} badgeContent="7" secondary={true} {...this.link ()} />
        </div>
        <div style={style}>
          <FloatingActionButton style={style.button}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} mini={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} secondary={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} secondary={true} mini={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
        </div>
        <hr />

        <h1>Radio buttons</h1>
        <RadioButton action={act.TEST} label="Rouge" id="radioRed"   {...this.link ('radioRed')} />
        <RadioButton action={act.TEST} label="Vert"  id="radioGreen" {...this.link ('radioGreen')} />
        <RadioButton action={act.TEST} label="Bleu"  id="radioBlue"  {...this.link ('radioBlue')} />
        <hr />

        <h1>Checkbox</h1>
        <Checkbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
        <Checkbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
        <Checkbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
        <hr />

        <h1>Toggle</h1>
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
