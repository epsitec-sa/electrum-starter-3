'use strict';

import React from 'react';
import {
  RichContainer,
  RichButton,
  TextField,
  GlyphTextField,
  Label
} from 'electrum-arc';

import act from './actuators.js';

export default class Polypheme extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    return (
      <RichContainer kind='root' {...this.link ()} >

        <RichContainer kind='task' {...this.link ()} >
          <RichButton glyph="cube"        text="Poly"     kind="taskLogo" {...this.link ()} />
          <RichButton glyph="plus-square" text="Activité" kind="task" {...this.link ()} />
          <RichButton glyph="inbox"       text="En cours" kind="task" {...this.link ()} />
        </RichContainer>

        <RichContainer kind='right' {...this.link ()} >

          <RichContainer kind='mainTab' {...this.link ()} >
            <RichButton text="Dispo"       width="160px" active="false" kind="mainTab" {...this.link ()} />
            <RichButton text="Co-dispo"    width="160px" active="true"  kind="mainTab" {...this.link ()} />
            <RichButton text="Facturation" width="160px" active="false" kind="mainTab" {...this.link ()} />
            <RichButton text="Clients"     width="160px" active="false" kind="mainTab" {...this.link ()} />
            <RichButton text="Équipe"      width="160px" active="false" kind="mainTab" {...this.link ()} />
          </RichContainer>

          <RichContainer kind='viewTab' {...this.link ()} >
            <RichButton glyph="close" text="Nom du client | 10:42"     active="true"  kind="viewTab" {...this.link ()} />
            <RichButton glyph="close" text="Nom du client | 10:30"     active="false" kind="viewTab" {...this.link ()} />
            <RichButton glyph="close" text="Nom de la mission | 09:56" active="false" kind="viewTab" {...this.link ()} />
          </RichContainer>

          <RichContainer kind='view' width='700px' {...this.link ()} >
            <RichContainer kind='paneNavigator' {...this.link ()} >
              <RichButton text="Expéditeur"   width="0px" grow="1" active="true"  kind="paneNavigator" id="exp.Tab"     {...this.link ()} />
              <RichButton text="Prestation"   width="0px" grow="1" active="false" kind="paneNavigator" id="custom.Tab"  {...this.link ()} />
              <RichButton text="Destinataire" width="0px" grow="1" active="false" kind="paneNavigator" id="dest.Tab"    {...this.link ()} />
              <RichButton text="Colis"        width="0px" grow="1" active="false" kind="paneNavigator" id="package.Tab" {...this.link ()} />
              <RichButton text="Facture"      width="0px" grow="1" active="false" kind="paneNavigator" id="fact.Tab"    {...this.link ()} />
            </RichContainer>

            <RichContainer kind='panes' {...this.link ()} >
              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Expéditeur" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="exp.newButton" {...this.link ()} />
                  <RichButton glyph="plus" text="Ajouter" spacing="large" id="exp.addButton" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" id="exp.extButton" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <TextField hintText="Date" grow="1" spacing="overlap" id="exp.date" {...this.link ()} />
                  <RichButton glyph="calendar" spacing="large" {...this.link ()} />
                  <TextField hintText="Période" grow="2" spacing="overlap" id="exp.period" {...this.link ()} />
                  <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
                  <TextField hintText="Zone" grow="1" spacing="overlap" id="exp.zone" {...this.link ()} />
                  <RichButton glyph="map-marker" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <GlyphTextField glyph="user" hintText="Nom du client" id="exp.customer" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <GlyphTextField glyph="tag" hintText="Référence client" spacing="large" id="exp.ref" {...this.link ()} />
                  <RichButton glyph="check-square" text="facturé à" border="none" glyphPosition="right" {...this.link ()} />
                </RichContainer>
              </RichContainer>

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Prestation" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" id="custom.miscButton" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <RichButton text="Standard (1h)"    width="0px" grow="1" spacing="large" id="custom.1" {...this.link ()} />
                  <RichButton text="Urgent (30 min)"  width="0px" grow="1" spacing="large" id="custom.2" {...this.link ()} />
                  <RichButton text="Dring Dring"      width="0px" grow="1" id="custom.3" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <RichButton text="Course régulière" width="0px" grow="1" spacing="large" id="custom.4" {...this.link ()} />
                  <RichButton text="Multi"            width="0px" grow="1" spacing="large" id="custom.5" {...this.link ()} />
                  <RichButton text="Case postale"     width="0px" grow="1" id="custom.6" {...this.link ()} />
                </RichContainer>
              </RichContainer>

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Destinataire" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="dest.newButton" {...this.link ()} />
                  <RichButton glyph="plus" text="Ajouter" spacing="large" id="dest.addButton" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" id="dest.miscButton" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <TextField hintText="Date" grow="1" spacing="overlap" id="dest.date" {...this.link ()} />
                  <RichButton glyph="calendar" spacing="large" {...this.link ()} />
                  <TextField hintText="Période" grow="2" spacing="overlap" id="dest.period" {...this.link ()} />
                  <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
                  <TextField hintText="Zone" grow="1" spacing="overlap" id="dest.zone" {...this.link ()} />
                  <RichButton glyph="map-marker" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <GlyphTextField glyph="user" hintText="Nom du client" id="dest.customer" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <GlyphTextField glyph="comment" hintText="Remarque" spacing="large" id="dest.comment" {...this.link ()} />
                  <RichButton glyph="comment" glyph="square-o" text="facturé à" border="none" glyphPosition="right" {...this.link ()} />
                </RichContainer>
              </RichContainer>

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Colis" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="plus" text="Ajouter" spacing="large" id="package.addButton" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" id="package.miscButton" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <RichButton glyph="trash-o" spacing="large" id="package.delete.1" {...this.link ()} />
                  <TextField value="Standard box" hintText="Type" grow="1" spacing="overlap" id="package.box.1" {...this.link ()} />
                  <RichButton glyph="cube" spacing="large" {...this.link ()} />
                  <GlyphTextField glyph="balance-scale" value="3.6 kg" hintText="Poids" grow="1" spacing="large" id="package.weight.1" {...this.link ()} />
                  <GlyphTextField glyph="arrows-h" value="50 x 75 x 20" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <RichButton glyph="trash-o" spacing="large" id="package.delete.2" {...this.link ()} />
                  <TextField hintText="Type" grow="1" spacing="overlap" id="package.box.2" {...this.link ()} />
                  <RichButton glyph="cube" spacing="large" {...this.link ()} />
                  <GlyphTextField glyph="balance-scale" hintText="Poids" grow="1" spacing="large" id="package.weight.2" {...this.link ()} />
                  <GlyphTextField glyph="arrows-h" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.2" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Nb de colis 2"     kind="info" width="0px" grow="1" id="package.infoCount" {...this.link ()} />
                  <Label text="Total 3.6 kg"      kind="info" width="0px" grow="1" id="package.infoWeight" {...this.link ()} />
                  <Label text="IATA total 3.6 kg" kind="info" width="0px" grow="1" id="package.infoTotal" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <GlyphTextField glyph="comment" hintText="Remarque" id="package.comment" {...this.link ()} />
                </RichContainer>
              </RichContainer>

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Facture" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="plus" text="Ajouter" spacing="large" id="fact.addButton" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" id="fact.extButton" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' spacing="compact" {...this.link ()} >
                  <Label text="Standard A - C"   kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="50.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' spacing="compact" {...this.link ()} >
                  <Label text="Supplément poids" kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="12.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' spacing="compact" {...this.link ()} >
                  <Label text="Sous-total"       kind="articleFooter" width="0px" grow="4" {...this.link ()} />
                  <Label text="62.00"            kind="priceFooter"   width="0px" grow="1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' spacing="compact" {...this.link ()} >
                  <Label text="Avance d'argent"  kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="55.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Total"            kind="articleFooter" width="0px" grow="4" {...this.link ()} />
                  <Label text="117.00"           kind="priceFooter"   width="0px" grow="1" {...this.link ()} />
                </RichContainer>
              </RichContainer>
            </RichContainer>

            <RichContainer kind='actions' {...this.link ()} >
              <RichButton glyph="trash-o" text="Annuler"  width="0px" grow="1" kind="actionFirst"  {...this.link ()} />
              <RichButton glyph="paste"   text="Modèle"   width="0px" grow="1" kind="actionMiddle" {...this.link ()} />
              <RichButton glyph="inbox"   text="Attendre" width="0px" grow="1" kind="actionMiddle" {...this.link ()} />
              <RichButton glyph="check"   text="Valider"  width="0px" grow="1" kind="actionLast"   {...this.link ()} />
            </RichContainer>
          </RichContainer>

          <RichContainer kind='footer' {...this.link ()} >
            <RichButton glyph="gears" text="Options" kind="footer" {...this.link ()} />
            <Label text="Marc Sandoz | 09h56" grow="1" kind="footer" {...this.link ()} />
            <RichButton glyph="ellipsis-v" kind="footer" {...this.link ()} />
            <RichButton glyph="clock-o" text="Missions" glyphPosition="right" kind="footer" {...this.link ()} />
          </RichContainer>

        </RichContainer>
      </RichContainer>
    );
  }
}
