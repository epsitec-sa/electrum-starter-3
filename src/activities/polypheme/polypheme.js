'use strict';

import React from 'react';
import {
  RichContainer,
  RichButton,
  TabButton,
  TextField,
  LabelTextField,
  TextFieldCombo,
  Label,
  Badge
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
          <RichButton glyph="cube"        text="Poly"     kind="badge-value" {...this.link ()} />
          <RichButton glyph="plus-square" text="Activité" kind="task" badge-value="27" {...this.link ()} />
          <RichButton glyph="inbox"       text="En cours" kind="task" {...this.link ()} />
        </RichContainer>

        <RichContainer kind='right' {...this.link ()} >

          <RichContainer kind='main-tab' {...this.link ()} >
            <RichButton text="Dispo"       width="160px" active="false" kind="main-tab" {...this.link ()} />
            <RichButton text="Co-dispo"    width="160px" active="true"  kind="main-tab" {...this.link ()} />
            <RichButton text="Facturation" width="160px" active="false" kind="main-tab" {...this.link ()} />
            <RichButton text="Clients"     width="160px" active="false" kind="main-tab" {...this.link ()} />
            <RichButton text="Équipe"      width="160px" active="false" kind="main-tab" {...this.link ()} />
          </RichContainer>

          <RichContainer kind='view-tab' {...this.link ()} >
            <TabButton text="Nom du client | 10:42"     active="true"  {...this.link ()} />
            <TabButton text="Nom du client | 10:30"     active="false" {...this.link ()} />
            <TabButton text="Nom de la mission | 09:56" active="false" {...this.link ()} />
          </RichContainer>

          <RichContainer kind='view' width='700px' {...this.link ()} >
            <RichContainer kind='pane-navigator' {...this.link ()} >
              <RichButton text="Expéditeur"   width="0px" grow="1" active="true"  kind="pane-navigator" id="exp.Tab"     {...this.link ()} />
              <RichButton text="Prestation"   width="0px" grow="1" active="false" kind="pane-navigator" id="custom.Tab"  {...this.link ()} />
              <RichButton text="Destinataire" width="0px" grow="1" active="false" kind="pane-navigator" id="dest.Tab"    {...this.link ()} />
              <RichButton text="Colis"        width="0px" grow="1" active="false" kind="pane-navigator" id="package.Tab" {...this.link ()} />
              <RichButton text="Facture"      width="0px" grow="1" active="false" kind="pane-navigator" id="fact.Tab"    {...this.link ()} />
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
                  <TextFieldCombo hintText="Date" glyph="calendar" grow="1" spacing="large" id="exp.date" {...this.link ()} />
                  <TextFieldCombo hintText="Période" glyph="clock-o" grow="2" spacing="large" id="exp.period" {...this.link ()} />
                  <TextFieldCombo hintText="Zone" glyph="map-marker" grow="1" id="exp.zone" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelGlyph="user" hintText="Nom du client" id="exp.customer" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelGlyph="tag" hintText="Référence client" spacing="large" id="exp.ref" {...this.link ()} />
                  <RichButton glyph="check-square" text="facturé à" border="none" glyph-position="right" {...this.link ()} />
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
                  <TextFieldCombo hintText="Date" glyph="calendar" grow="1" spacing="large" id="dest.date" {...this.link ()} />
                  <TextFieldCombo hintText="Période" glyph="clock-o" grow="2" spacing="large" id="dest.period" {...this.link ()} />
                  <TextFieldCombo hintText="Zone" glyph="map-marker" grow="1" id="dest.zone" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelGlyph="user" hintText="Nom du client" id="dest.customer" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelGlyph="comment" hintText="Remarque" spacing="large" id="dest.comment" {...this.link ()} />
                  <RichButton glyph="comment" glyph="square-o" text="facturé à" border="none" glyph-position="right" {...this.link ()} />
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
                  <TextFieldCombo value="Standard box" glyph="cube" hintText="Type" grow="1" spacing="large" id="package.box.1" {...this.link ()} />
                  <LabelTextField labelGlyph="balance-scale" value="3.6 kg" hintText="Poids" grow="1" spacing="large" id="package.weight.1" {...this.link ()} />
                  <LabelTextField labelGlyph="arrows-h" value="50 x 75 x 20" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.1" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <RichButton glyph="trash-o" spacing="large" id="package.delete.2" {...this.link ()} />
                  <TextFieldCombo hintText="Type" glyph="cube" grow="1" spacing="large" id="package.box.2" {...this.link ()} />
                  <LabelTextField labelGlyph="balance-scale" hintText="Poids" grow="1" spacing="large" id="package.weight.2" {...this.link ()} />
                  <LabelTextField labelGlyph="arrows-h" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.2" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Nb de colis 2"     kind="info" width="0px" grow="1" id="package.infoCount" {...this.link ()} />
                  <Label text="Total 3.6 kg"      kind="info" width="0px" grow="1" id="package.infoWeight" {...this.link ()} />
                  <Label text="IATA total 3.6 kg" kind="info" width="0px" grow="1" id="package.infoTotal" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelGlyph="comment" hintText="Remarque" id="package.comment" {...this.link ()} />
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

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Paramètres" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelText="ID SC" labelWidth="100px" hintText="Numéro d'identificateur" grow="1" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelText="Références" labelWidth="100px" hintText="Références" grow="1" spacing="large" {...this.link ()} />
                  <RichButton glyph="toggle-on" text="Obligatoire" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelText="Paiement" labelWidth="100px" hintText="Mode de paiement" grow="1" spacing="large"  {...this.link ()} />
                  <RichButton glyph="check-square" text="Facture BVR" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <RichButton glyph="square-o" text="Facture PDF" glyph-position="right" width="140px" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="" grow="1" {...this.link ()} />
                  <RichButton glyph="toggle-off" text="Détaillé" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <RichButton glyph="toggle-on" text="Résumé" glyph-position="right" width="140px" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <LabelTextField labelText="Rabais" labelWidth="100px" hintText="Rabais accordé" grow="1" spacing="large"  {...this.link ()} />
                  <RichButton glyph="check-square" text="Personnel" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <RichButton glyph="square-o" text="Cumulé" glyph-position="right" width="140px" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="" grow="1" {...this.link ()} />
                  <RichButton glyph="toggle-on" text="TVA incluse" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </RichContainer>
              </RichContainer>

              <RichContainer kind='pane' {...this.link ()} >
                <RichContainer kind='rowPane' {...this.link ()} >
                  <Label text="Divers" grow="1" kind="title" {...this.link ()} />
                  <RichButton glyph="ellipsis-v" {...this.link ()} />
                </RichContainer>
                <RichContainer kind='rowPane' spacing="large" {...this.link ()} >
                  <Label text="Essai du composant Badge" grow="1" {...this.link ()} />
                  <RichButton glyph="plus" text="Ajouter" id="package.addButton" {...this.link ()} />
                  <Badge value="1" {...this.link ()} />
                  <Badge value="12" {...this.link ()} />
                  <Badge value="123" {...this.link ()} />
                  <Badge value="1234" {...this.link ()} />
                  <Badge value="12345" {...this.link ()} />
                </RichContainer>
              </RichContainer>

            </RichContainer>

            <RichContainer kind='actions' {...this.link ()} >
              <RichButton glyph="trash-o" text="Annuler"  width="0px" grow="1" kind="action" place="left"   {...this.link ()} />
              <RichButton glyph="paste"   text="Modèle"   width="0px" grow="1" kind="action" place="middle" {...this.link ()} />
              <RichButton glyph="inbox"   text="Attendre" width="0px" grow="1" kind="action" place="middle" {...this.link ()} />
              <RichButton glyph="check"   text="Valider"  width="0px" grow="1" kind="action" place="right"  {...this.link ()} />
            </RichContainer>
          </RichContainer>

          <RichContainer kind='footer' {...this.link ()} >
            <RichButton glyph="gears" text="Options" kind="footer" {...this.link ()} />
            <Label text="Marc Sandoz | 09h56" grow="1" kind="footer" {...this.link ()} />
            <RichButton glyph="ellipsis-v" kind="footer" {...this.link ()} />
            <RichButton glyph="clock-o" text="Missions" glyph-position="right" kind="footer" badge-value="92" {...this.link ()} />
          </RichContainer>

        </RichContainer>
      </RichContainer>
    );
  }
}
