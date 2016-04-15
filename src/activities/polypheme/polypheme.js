'use strict';

import React from 'react';
import {
  RichButton,
  BasicCheckbox,
  BasicField,
  BasicList,
  Paper,
  BasicRow,
  BasicContainer,
  BasicLabel
} from 'electrum-arc';

import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import CodeIcon from 'material-ui/lib/svg-icons/action/code';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import act from './actuators.js';

export default class Polypheme extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    this.setState ({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState ({
      open: false,
    });
  };

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
      },
      popover: {
        padding: 20,
      },
    };

    const paperStyle3 = {
      width: 640,
    };

    return (
      <div style={{padding: '10px 0px 0px 30px'}}>
        <h1>Polyphème prototype</h1>

        <Paper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <BasicLabel text="EXPÉDITEUR" grow="1" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" borderless flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <BasicField hintText="Date" grow="1" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="calendar" flowContinuation="spacing" {...this.link ()} />
              <BasicField hintText="Période" grow="2" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="clock-o" flowContinuation="spacing" {...this.link ()} />
              <BasicField hintText="Zone" grow="1" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" flowContinuation="overlay" {...this.link ()} />
              <BasicField hintText="Nom du client" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="tag" flowContinuation="overlay" {...this.link ()} />
              <BasicField hintText="Référence client" flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="check-square" text="facturé à" borderless rightIcon {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </Paper>

        <br />

        <Paper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <BasicLabel text="PRESTATION" grow="1" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Standard (1h)" grow="1" flowContinuation="spacing" {...this.link ()} />
              <RichButton text="Urgent (30 min)" grow="1" flowContinuation="spacing" {...this.link ()} />
              <RichButton text="Dring Dring" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Course régulière" grow="1" flowContinuation="spacing" {...this.link ()} />
              <RichButton text="Multi" grow="1" flowContinuation="spacing" {...this.link ()} />
              <RichButton text="Case postale" grow="1" {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </Paper>

        <br />

        <Paper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <BasicLabel text="DESTINATAIRE" grow="1" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" borderless flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <BasicField hintText="Date" grow="1" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="calendar" flowContinuation="spacing" {...this.link ()} />
              <BasicField hintText="Période" grow="2" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="clock-o" flowContinuation="spacing" {...this.link ()} />
              <BasicField hintText="Zone" grow="1" flowContinuation="overlay" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" flowContinuation="overlay" {...this.link ()} />
              <BasicField hintText="Nom du client" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="comment" flowContinuation="overlay" {...this.link ()} />
              <BasicField hintText="Remarque" flowContinuation="spacing" {...this.link ()} />
              <RichButton glyph="square-o" text="facturé à" borderless rightIcon {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </Paper>

        <br />
      </div>
    );
  }
}
