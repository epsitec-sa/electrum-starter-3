'use strict';

import React from 'react';
import {
  RichButton,
  TextField,
  BasicRow,
  BasicContainer,
  MainTabContainer,
  TabContainer,
  FooterContainer,
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
      <div style={{padding: '10px 0px 0px 30px'}}>
        <h1>Polyphème prototype</h1>

        <MainTabContainer>
          <RichButton text="Dispo"      width="150px" active="false" kind="mainTab" id="exp.Tab"     {...this.link ()} />
          <RichButton text="Co-dispo"   width="150px" active="true"  kind="mainTab" id="custom.Tab"  {...this.link ()} />
          <RichButton text="Facturtion" width="150px" active="false" kind="mainTab" id="dest.Tab"    {...this.link ()} />
          <RichButton text="Clients"    width="150px" active="false" kind="mainTab" id="package.Tab" {...this.link ()} />
          <RichButton text="Équipe"     width="150px" active="false" kind="mainTab" id="fact.Tab"    {...this.link ()} />
        </MainTabContainer>

        <BasicContainer width='640px' border="none" kind="root" {...this.link ()} >
          <TabContainer>
            <RichButton text="Expéditeur"   width="0px" grow="1" active="true"  kind="tab" id="exp.Tab"     {...this.link ()} />
            <RichButton text="Prestation"   width="0px" grow="1" active="false" kind="tab" id="custom.Tab"  {...this.link ()} />
            <RichButton text="Destinataire" width="0px" grow="1" active="false" kind="tab" id="dest.Tab"    {...this.link ()} />
            <RichButton text="Colis"        width="0px" grow="1" active="false" kind="tab" id="package.Tab" {...this.link ()} />
            <RichButton text="Facture"      width="0px" grow="1" active="false" kind="tab" id="fact.Tab"    {...this.link ()} />
          </TabContainer>

          <BasicContainer width='600px' zDepth={3} spacing="large" border="none" {...this.link ()} >
            <BasicRow>
              <Label text="Expéditeur" grow="1" kind="title" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="exp.newButton" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" id="exp.addButton" {...this.link ()} />
              <RichButton glyph="ellipsis-v" id="exp.extButton" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <TextField hintText="Date" grow="1" spacing="overlap" id="exp.date" {...this.link ()} />
              <RichButton glyph="calendar" spacing="large" {...this.link ()} />
              <TextField hintText="Période" grow="2" spacing="overlap" id="exp.period" {...this.link ()} />
              <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
              <TextField hintText="Zone" grow="1" spacing="overlap" id="exp.zone" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" spacing="overlap" {...this.link ()} />
              <TextField hintText="Nom du client" id="exp.customer" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="tag" spacing="overlap" {...this.link ()} />
              <TextField hintText="Référence client" spacing="large" id="exp.ref" {...this.link ()} />
              <RichButton glyph="check-square" text="facturé à" border="none" glyphPosition="right" {...this.link ()} />
            </BasicRow>
          </BasicContainer>

          <BasicContainer width='600px' zDepth={3} spacing="large" border="none" {...this.link ()} >
            <BasicRow>
              <Label text="Prestation" grow="1" kind="title" {...this.link ()} />
              <RichButton glyph="ellipsis-v" id="custom.miscButton" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Standard (1h)"    width="0px" grow="1" spacing="large" id="custom.1" {...this.link ()} />
              <RichButton text="Urgent (30 min)"  width="0px" grow="1" spacing="large" id="custom.2" {...this.link ()} />
              <RichButton text="Dring Dring"      width="0px" grow="1" id="custom.3" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton text="Course régulière" width="0px" grow="1" spacing="large" id="custom.4" {...this.link ()} />
              <RichButton text="Multi"            width="0px" grow="1" spacing="large" id="custom.5" {...this.link ()} />
              <RichButton text="Case postale"     width="0px" grow="1" id="custom.6" {...this.link ()} />
            </BasicRow>
          </BasicContainer>

          <BasicContainer width='600px' zDepth={3} spacing="large" border="none" {...this.link ()} >
            <BasicRow>
              <Label text="Destinataire" grow="1" kind="title" {...this.link ()} />
              <RichButton glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="dest.newButton" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" id="dest.addButton" {...this.link ()} />
              <RichButton glyph="ellipsis-v" id="dest.miscButton" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <TextField hintText="Date" grow="1" spacing="overlap" id="dest.date" {...this.link ()} />
              <RichButton glyph="calendar" spacing="large" {...this.link ()} />
              <TextField hintText="Période" grow="2" spacing="overlap" id="dest.period" {...this.link ()} />
              <RichButton glyph="clock-o" spacing="large" {...this.link ()} />
              <TextField hintText="Zone" grow="1" spacing="overlap" id="dest.zone" {...this.link ()} />
              <RichButton glyph="map-marker" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="user" spacing="overlap" {...this.link ()} />
              <TextField hintText="Nom du client" id="dest.customer" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="comment" spacing="overlap" {...this.link ()} />
              <TextField hintText="Remarque" spacing="large" id="dest.comment" {...this.link ()} />
              <RichButton glyph="square-o" text="facturé à" border="none" glyphPosition="right" {...this.link ()} />
            </BasicRow>
          </BasicContainer>

          <BasicContainer width='600px' zDepth={3} spacing="large" border="none" {...this.link ()} >
            <BasicRow>
              <Label text="Colis" grow="1" kind="title" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" id="package.addButton" {...this.link ()} />
              <RichButton glyph="ellipsis-v" id="package.miscButton" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="trash-o" spacing="large" id="package.delete.1" {...this.link ()} />
              <TextField value="Standard box" hintText="Type" grow="1" spacing="overlap" id="package.box.1" {...this.link ()} />
              <RichButton glyph="cube" spacing="large" {...this.link ()} />
              <TextField value="3.6 kg" hintText="Poids" grow="1" spacing="overlap" id="package.weight.1" {...this.link ()} />
              <RichButton glyph="balance-scale" spacing="large" {...this.link ()} />
              <TextField value="50 x 75 x 20" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.1" {...this.link ()} />
              <RichButton glyph="arrows-h" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="trash-o" spacing="large" id="package.delete.2" {...this.link ()} />
              <TextField hintText="Type" grow="1" spacing="overlap" id="package.box.2" {...this.link ()} />
              <RichButton glyph="cube" spacing="large" {...this.link ()} />
              <TextField hintText="Poids" grow="1" spacing="overlap" id="package.weight.2" {...this.link ()} />
              <RichButton glyph="balance-scale" spacing="large" {...this.link ()} />
              <TextField hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.2" {...this.link ()} />
              <RichButton glyph="arrows-h" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <Label text="Nb de colis 2"     kind="info" width="0px" grow="1" id="package.infoCount" {...this.link ()} />
              <Label text="Total 3.6 kg"      kind="info" width="0px" grow="1" id="package.infoWeight" {...this.link ()} />
              <Label text="IATA total 3.6 kg" kind="info" width="0px" grow="1" id="package.infoTotal" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <RichButton glyph="comment" spacing="overlap" {...this.link ()} />
              <TextField hintText="Remarque" id="package.comment" {...this.link ()} />
            </BasicRow>
          </BasicContainer>

          <BasicContainer width='600px' zDepth={3} spacing="large" border="none" {...this.link ()} >
            <BasicRow>
              <Label text="Facture" grow="1" kind="title" {...this.link ()} />
              <RichButton glyph="plus" text="Ajouter" spacing="large" id="fact.addButton" {...this.link ()} />
              <RichButton glyph="ellipsis-v" id="fact.extButton" {...this.link ()} />
            </BasicRow>
            <BasicRow spacing="compact">
              <Label text="Standard A - C"   kind="article" width="0px" grow="4" {...this.link ()} />
              <Label text="50.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow spacing="compact">
              <Label text="Supplément poids" kind="article" width="0px" grow="4" {...this.link ()} />
              <Label text="12.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow spacing="compact">
              <Label text="Sous-total"       kind="articleFooter" width="0px" grow="4" {...this.link ()} />
              <Label text="62.00"            kind="priceFooter"   width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow spacing="compact">
              <Label text="Avance d'argent"  kind="article" width="0px" grow="4" {...this.link ()} />
              <Label text="55.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
            </BasicRow>
            <BasicRow>
              <Label text="Total"            kind="articleFooter" width="0px" grow="4" {...this.link ()} />
              <Label text="117.00"           kind="priceFooter"   width="0px" grow="1" {...this.link ()} />
            </BasicRow>
          </BasicContainer>

          <FooterContainer>
            <RichButton glyph="trash-o" text="Annuler"  width="0px" grow="1" kind="footerFirst"  {...this.link ()} />
            <RichButton glyph="paste"   text="Modèle"   width="0px" grow="1" kind="footerMiddle" {...this.link ()} />
            <RichButton glyph="inbox"   text="Attendre" width="0px" grow="1" kind="footerMiddle" {...this.link ()} />
            <RichButton glyph="check"   text="Valider"  width="0px" grow="1" kind="footerLast"   {...this.link ()} />
          </FooterContainer>

        </BasicContainer>

      </div>
    );
  }
}
