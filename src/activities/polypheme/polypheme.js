'use strict';

import React from 'react';
import {
  MuPaper,
  RichButton,
  BasicCheckbox,
  BasicField,
  BasicRow,
  BasicContainer,
  Label
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

        <MuPaper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <Label text="EXPÉDITEUR" grow="1" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <BasicField hintText="Date" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="calendar" spacing="large" {...this.link ()} />
              <BasicField hintText="Période" grow="2" spacing="overlap" {...this.link ()} />
              <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
              <BasicField hintText="Zone" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" spacing="overlap" {...this.link ()} />
              <BasicField hintText="Nom du client" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="tag" spacing="overlap" {...this.link ()} />
              <BasicField hintText="Référence client" spacing="large" {...this.link ()} />
              <RichButton glyph="check-square" text="facturé à" border="none" icon="right" {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </MuPaper>

        <br />

        <MuPaper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <Label text="PRESTATION" grow="1" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Standard (1h)"    width="0px" grow="1" spacing="large" {...this.link ()} />
              <RichButton text="Urgent (30 min)"  width="0px" grow="1" spacing="large" {...this.link ()} />
              <RichButton text="Dring Dring"      width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Course régulière" width="0px" grow="1" spacing="large" {...this.link ()} />
              <RichButton text="Multi"            width="0px" grow="1" spacing="large" {...this.link ()} />
              <RichButton text="Case postale"     width="0px" grow="1" {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </MuPaper>

        <br />

        <MuPaper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <Label text="DESTINATAIRE" grow="1" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <BasicField hintText="Date" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="calendar" spacing="large" {...this.link ()} />
              <BasicField hintText="Période" grow="2" spacing="overlap" {...this.link ()} />
              <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
              <BasicField hintText="Zone" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" spacing="overlap" {...this.link ()} />
              <BasicField hintText="Nom du client" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="comment" spacing="overlap" {...this.link ()} />
              <BasicField hintText="Remarque" spacing="large" {...this.link ()} />
              <RichButton glyph="square-o" text="facturé à" border="none" icon="right" {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </MuPaper>

        <br />

        <MuPaper zDepth={3} style={paperStyle3} {...this.link ()} >
          <BasicContainer width='600px' {...this.link ()} >
            <BasicRow>
              <Label text="COLIS" grow="1" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" {...this.link ()} />
              <RichButton glyph="ellipsis-v" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="trash-o" spacing="large" {...this.link ()} />
              <BasicField value="Standard box" hintText="Type" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="cube" spacing="large" {...this.link ()} />
              <BasicField value="3.6 kg" hintText="Poids" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="balance-scale" spacing="large" {...this.link ()} />
              <BasicField value="50 x 75 x 20" hintText="Dimensions" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="arrows-h" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="trash-o" spacing="large" {...this.link ()} />
              <BasicField hintText="Type" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="cube" spacing="large" {...this.link ()} />
              <BasicField hintText="Poids" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="balance-scale" spacing="large" {...this.link ()} />
              <BasicField hintText="Dimensions" grow="1" spacing="overlap" {...this.link ()} />
              <RichButton glyph="arrows-h" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <Label text="Nb de colis 2"     kind="info" width="0px" grow="1" {...this.link ()} />
              <Label text="Total 3.6 kg"      kind="info" width="0px" grow="1" {...this.link ()} />
              <Label text="IATA total 3.6 kg" kind="info" width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="comment" spacing="overlap" {...this.link ()} />
              <BasicField hintText="Remarque" {...this.link ()} />
            </BasicRow>
          </BasicContainer>
        </MuPaper>

        <br />
      </div>
    );
  }
}
