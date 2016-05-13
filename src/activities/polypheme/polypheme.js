'use strict';

import React from 'react';
import {
  Container,
  Button,
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
      <Container kind='root' {...this.link ()} >

        <Container kind='task' {...this.link ()} >
          <Button glyph="cube"        text="Poly"     kind="badge-value" {...this.link ()} />
          <Button glyph="plus-square" text="Activité" kind="task" badge-value="27" {...this.link ()} />
          <Button glyph="inbox"       text="En cours" kind="task" {...this.link ()} />
        </Container>

        <Container kind='right' {...this.link ()} >

          <Container kind='main-tab' {...this.link ()} >
            <Button text="Dispo"       width="160px" active="false" kind="main-tab" {...this.link ()} />
            <Button text="Co-dispo"    width="160px" active="true"  kind="main-tab" {...this.link ()} />
            <Button text="Facturation" width="160px" active="false" kind="main-tab" {...this.link ()} />
            <Button text="Clients"     width="160px" active="false" kind="main-tab" {...this.link ()} />
            <Button text="Équipe"      width="160px" active="false" kind="main-tab" {...this.link ()} />
          </Container>

          <Container kind='view-tab' {...this.link ()} >
            <TabButton text="Nom du client | 10:42"     active="true"  {...this.link ()} />
            <TabButton text="Nom du client | 10:30"     active="false" {...this.link ()} />
            <TabButton text="Nom de la mission | 09:56" active="false" {...this.link ()} />
          </Container>

          <Container kind='view' width='700px' {...this.link ()} >
            <Container kind='pane-navigator' {...this.link ()} >
              <Button text="Expéditeur"   width="0px" grow="1" active="true"  kind="pane-navigator" id="exp.Tab"     {...this.link ()} />
              <Button text="Prestation"   width="0px" grow="1" active="false" kind="pane-navigator" id="custom.Tab"  {...this.link ()} />
              <Button text="Destinataire" width="0px" grow="1" active="false" kind="pane-navigator" id="dest.Tab"    {...this.link ()} />
              <Button text="Colis"        width="0px" grow="1" active="false" kind="pane-navigator" id="package.Tab" {...this.link ()} />
              <Button text="Facture"      width="0px" grow="1" active="false" kind="pane-navigator" id="fact.Tab"    {...this.link ()} />
            </Container>

            <Container kind='panes' {...this.link ()} >
              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Expéditeur" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="exp.newButton" {...this.link ()} />
                  <Button glyph="plus" text="Ajouter" spacing="large" id="exp.addButton" {...this.link ()} />
                  <Button glyph="ellipsis-v" id="exp.extButton" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <TextFieldCombo hintText="Date" glyph="calendar" grow="1" spacing="large" id="exp.date" {...this.link ()} />
                  <TextFieldCombo hintText="Période" glyph="clock-o" grow="2" spacing="large" id="exp.period" {...this.link ()} />
                  <TextFieldCombo hintText="Zone" glyph="map-marker" grow="1" id="exp.zone" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelGlyph="user" hintText="Nom du client" id="exp.customer" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelGlyph="tag" hintText="Référence client" spacing="large" id="exp.ref" {...this.link ()} />
                  <Button glyph="check-square" text="facturé à" border="none" glyph-position="right" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Prestation" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="ellipsis-v" id="custom.miscButton" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Button text="Standard (1h)"    width="0px" grow="1" spacing="large" id="custom.1" {...this.link ()} />
                  <Button text="Urgent (30 min)"  width="0px" grow="1" spacing="large" id="custom.2" {...this.link ()} />
                  <Button text="Dring Dring"      width="0px" grow="1" id="custom.3" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Button text="Course régulière" width="0px" grow="1" spacing="large" id="custom.4" {...this.link ()} />
                  <Button text="Multi"            width="0px" grow="1" spacing="large" id="custom.5" {...this.link ()} />
                  <Button text="Case postale"     width="0px" grow="1" id="custom.6" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Destinataire" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="toggle-off" text="Nouveau" border="none" spacing="large" id="dest.newButton" {...this.link ()} />
                  <Button glyph="plus" text="Ajouter" spacing="large" id="dest.addButton" {...this.link ()} />
                  <Button glyph="ellipsis-v" id="dest.miscButton" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <TextFieldCombo hintText="Date" glyph="calendar" grow="1" spacing="large" id="dest.date" {...this.link ()} />
                  <TextFieldCombo hintText="Période" glyph="clock-o" grow="2" spacing="large" id="dest.period" {...this.link ()} />
                  <TextFieldCombo hintText="Zone" glyph="map-marker" grow="1" id="dest.zone" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelGlyph="user" hintText="Nom du client" id="dest.customer" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelGlyph="comment" hintText="Remarque" spacing="large" id="dest.comment" {...this.link ()} />
                  <Button glyph="comment" glyph="square-o" text="facturé à" border="none" glyph-position="right" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Colis" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="plus" text="Ajouter" spacing="large" id="package.addButton" {...this.link ()} />
                  <Button glyph="ellipsis-v" id="package.miscButton" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Button glyph="trash-o" spacing="large" id="package.delete.1" {...this.link ()} />
                  <TextFieldCombo value="Standard box" glyph="cube" hintText="Type" grow="1" spacing="large" id="package.box.1" {...this.link ()} />
                  <LabelTextField labelGlyph="balance-scale" value="3.6 kg" hintText="Poids" grow="1" spacing="large" id="package.weight.1" {...this.link ()} />
                  <LabelTextField labelGlyph="arrows-h" value="50 x 75 x 20" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.1" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Button glyph="trash-o" spacing="large" id="package.delete.2" {...this.link ()} />
                  <TextFieldCombo hintText="Type" glyph="cube" grow="1" spacing="large" id="package.box.2" {...this.link ()} />
                  <LabelTextField labelGlyph="balance-scale" hintText="Poids" grow="1" spacing="large" id="package.weight.2" {...this.link ()} />
                  <LabelTextField labelGlyph="arrows-h" hintText="Dimensions" grow="1" spacing="overlap" id="package.dim.2" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Nb de colis 2"     kind="info" width="0px" grow="1" id="package.infoCount" {...this.link ()} />
                  <Label text="Total 3.6 kg"      kind="info" width="0px" grow="1" id="package.infoWeight" {...this.link ()} />
                  <Label text="IATA total 3.6 kg" kind="info" width="0px" grow="1" id="package.infoTotal" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelGlyph="comment" hintText="Remarque" id="package.comment" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Facture" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="plus" text="Ajouter" spacing="large" id="fact.addButton" {...this.link ()} />
                  <Button glyph="ellipsis-v" id="fact.extButton" {...this.link ()} />
                </Container>
                <Container kind='row-pane' spacing="compact" {...this.link ()} >
                  <Label text="Standard A - C"   kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="50.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </Container>
                <Container kind='row-pane' spacing="compact" {...this.link ()} >
                  <Label text="Supplément poids" kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="12.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </Container>
                <Container kind='row-pane' spacing="compact" {...this.link ()} >
                  <Label text="Sous-total"       kind="article-footer" width="0px" grow="4" {...this.link ()} />
                  <Label text="62.00"            kind="price-footer"   width="0px" grow="1" {...this.link ()} />
                </Container>
                <Container kind='row-pane' spacing="compact" {...this.link ()} >
                  <Label text="Avance d'argent"  kind="article" width="0px" grow="4" {...this.link ()} />
                  <Label text="55.00"            kind="price"   width="0px" grow="1" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Total"            kind="article-footer" width="0px" grow="4" {...this.link ()} />
                  <Label text="117.00"           kind="price-footer"   width="0px" grow="1" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Paramètres" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="ellipsis-v" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelText="ID SC" labelWidth="100px" hintText="Numéro d'identificateur" grow="1" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelText="Références" labelWidth="100px" hintText="Références" grow="1" spacing="large" {...this.link ()} />
                  <Button glyph="toggle-on" text="Obligatoire" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelText="Paiement" labelWidth="100px" hintText="Mode de paiement" grow="1" spacing="large"  {...this.link ()} />
                  <Button glyph="check-square" text="Facture BVR" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Button glyph="square-o" text="Facture PDF" glyph-position="right" width="140px" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="" grow="1" {...this.link ()} />
                  <Button glyph="toggle-off" text="Détaillé" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Button glyph="toggle-on" text="Résumé" glyph-position="right" width="140px" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField labelText="Rabais" labelWidth="100px" hintText="Rabais accordé" grow="1" spacing="large"  {...this.link ()} />
                  <Button glyph="check-square" text="Personnel" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Button glyph="square-o" text="Cumulé" glyph-position="right" width="140px" {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="" grow="1" {...this.link ()} />
                  <Button glyph="toggle-on" text="TVA incluse" glyph-position="right" width="140px" spacing="large" {...this.link ()} />
                  <Label text="" width="140px" {...this.link ()} />
                </Container>
              </Container>

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text="Divers" grow="1" kind="title" {...this.link ()} />
                  <Button glyph="ellipsis-v" {...this.link ()} />
                </Container>
                <Container kind='row-pane' spacing="large" {...this.link ()} >
                  <Label text="Essai du composant Badge" grow="1" {...this.link ()} />
                  <Button glyph="plus" text="Ajouter" id="package.addButton" {...this.link ()} />
                  <Badge value="1" {...this.link ()} />
                  <Badge value="12" {...this.link ()} />
                  <Badge value="123" {...this.link ()} />
                  <Badge value="1234" {...this.link ()} />
                  <Badge value="12345" {...this.link ()} />
                </Container>
              </Container>

            </Container>

            <Container kind='actions' {...this.link ()} >
              <Button glyph="trash-o" text="Annuler"  width="0px" grow="1" kind="action" place="left"   {...this.link ()} />
              <Button glyph="paste"   text="Modèle"   width="0px" grow="1" kind="action" place="middle" {...this.link ()} />
              <Button glyph="inbox"   text="Attendre" width="0px" grow="1" kind="action" place="middle" {...this.link ()} />
              <Button glyph="check"   text="Valider"  width="0px" grow="1" kind="action" place="right"  {...this.link ()} />
            </Container>
          </Container>

          <Container kind='footer' {...this.link ()} >
            <Button glyph="gears" text="Options" kind="footer" {...this.link ()} />
            <Label text="Marc Sandoz | 09h56" grow="1" kind="footer" {...this.link ()} />
            <Button glyph="ellipsis-v" kind="footer" {...this.link ()} />
            <Button glyph="clock-o" text="Missions" glyph-position="right" kind="footer" badge-value="92" {...this.link ()} />
          </Container>

        </Container>
      </Container>
    );
  }
}
