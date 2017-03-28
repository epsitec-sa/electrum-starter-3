// Co-dispatch view. 1234
'use strict';

import React from 'react';
import {
  Container,
  Button,
  CheckButton,
  TextField,
  LabelTextField,
  TextFieldCombo,
  Label,
  Badge,
  Calendar,
  Clock,
  Menu,
  FlyingBalloon,
  Separator,
  Table,
  Splitter,
  Ticket,
  DragCab
} from 'electrum-arc';

export default class Codispatch extends React.Component {

  constructor (props) {
    super (props);
  }

  leftView () {
    return (
      <Container kind='view-stretch' {...this.link ()} >
        <Container kind='pane-navigator' navigation-for="sender" {...this.link ()} >
          <Button text='Prestation' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-perf' {...this.link ()} />
          <Button text='Contacts' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-contacts' {...this.link ()} />
          <Button text='Colis' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-parcel' {...this.link ()} />
          <Button text='Facture' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-bill' {...this.link ()} />
          <Button text='Récurrence' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-recu' {...this.link ()} />
          <Button text='Document' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-doc' {...this.link ()} />
          <Button text='Divers' width='0px' grow='1'
            kind='pane-navigator' to-anchor='sender-misc' {...this.link ()} />
        </Container>

        <Container kind='panes' navigation-name="sender" {...this.link ()} >
          <Container kind='pane' anchor='sender-perf' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Prestation' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo hint-text='Type de la prestation' combo-glyph='archive'
                grow='1' tab-index={3} {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-contacts' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Tickets' grow='1' kind='title' {...this.link ()} />
              <Button glyph='plus' text='Ajouter' {...this.link ()} />
            </Container>
            <Container
              kind            = 'row-pane-drag'
              drag-controller = 'codispo-ticket'
              drag-source     = 'codispo-tickets'
              drag-owner-id   = 'coucou'
              {...this.link ()} >
              <DragCab
                key              = '1'
                drag-controller  = 'codispo-ticket'
                drag-owner-id    = 'coucou.1'
                direction        = 'vertical'
                color            = {this.props.theme.palette.roadbookDragAndDropHover}
                thickness        = {this.props.theme.shapes.dragAndDropTicketThickness}
                over-spacing     = '0px'
                vertical-spacing = '0px'
                radius           = '0px'
                {...this.link ()}>
                <Ticket kind='subpane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Pick' width='100px' kind='title' {...this.link ()} />
                    <TextFieldCombo value='Pick' combo-glyph='cog' hint-text='Type' grow='1' spacing='large' {...this.link ()} />
                    <CheckButton checked='true' text='Facturé à' spacing='large' {...this.link ()} />
                    <Button glyph='trash' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='user'
                      hint-text='Nom du client'
                      selected-value='Epsitec SA, rue de Neuchâtel 32, 1400 Yverdon-les-Bains'
                      action-glyph='rocket'
                      tab-index={1} {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                      grow='1' spacing='large' combo-type='calendar'
                      combo-direction='right' flying-balloon-anchor='bottom'
                      {...this.link ('exp-date')} />
                    <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                      grow='2' spacing='large' combo-type='clock'
                      flying-balloon-anchor='right' {...this.link ('exp-time')} />
                    <TextFieldCombo hint-text='Zone' combo-glyph='map-marker'
                      grow='1' combo-type='zone' {...this.link ('exp-zone')} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='tag' hint-text='Référence client' {...this.link ()} />
                  </Container>
                </Ticket>
              </DragCab>
              <DragCab
                key              = '2'
                drag-controller  = 'codispo-ticket'
                drag-owner-id    = 'coucou.2'
                direction        = 'vertical'
                color            = {this.props.theme.palette.roadbookDragAndDropHover}
                thickness        = {this.props.theme.shapes.dragAndDropTicketThickness}
                over-spacing     = '0px'
                vertical-spacing = '0px'
                radius           = '0px'
                {...this.link ()}>
                <Ticket kind='subpane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Drop' width='100px' kind='title' {...this.link ()} />
                    <TextFieldCombo value='Drop' combo-glyph='cog' hint-text='Type' grow='1' spacing='large' {...this.link ()} />
                    <CheckButton checked='false' text='Facturé à' spacing='large' {...this.link ()} />
                    <Button glyph='trash' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='user'
                      hint-text='Nom du client' tab-index={2} {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                      grow='1' spacing='large' combo-type='calendar'
                      combo-direction='right' {...this.link ('dest-date')} />
                    <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                      grow='2' spacing='large' combo-type='clock'
                      {...this.link ('dest-time')} />
                    <TextFieldCombo hint-text='Zone' combo-glyph='map-marker'
                      grow='1' combo-type='zone' {...this.link ('dest-zone')} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='comment' hint-text='Remarque' {...this.link ()} />
                  </Container>
                </Ticket>
              </DragCab>
              <DragCab
                key              = '3'
                drag-controller  = 'codispo-ticket'
                drag-owner-id    = 'coucou.3'
                direction        = 'vertical'
                color            = {this.props.theme.palette.roadbookDragAndDropHover}
                thickness        = {this.props.theme.shapes.dragAndDropTicketThickness}
                over-spacing     = '0px'
                vertical-spacing = '0px'
                radius           = '0px'
                {...this.link ()}>
                <Ticket kind='subpane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Task' width='100px' kind='title' {...this.link ()} />
                    <TextFieldCombo value='Task' combo-glyph='cog' hint-text='Type' grow='1' spacing='large' {...this.link ()} />
                    <CheckButton checked='false' text='Facturé à' spacing='large' {...this.link ()} />
                    <Button glyph='trash' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='user'
                      hint-text='Nom du client' tab-index={2} {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                      grow='1' spacing='large' combo-type='calendar'
                      combo-direction='right' {...this.link ('dest-date')} />
                    <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                      grow='2' spacing='large' combo-type='clock'
                      {...this.link ('dest-time')} />
                    <TextFieldCombo hint-text='Zone' combo-glyph='map-marker'
                      grow='1' combo-type='zone' {...this.link ('dest-zone')} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='comment' hint-text='Remarque' {...this.link ()} />
                  </Container>
                </Ticket>
              </DragCab>
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-parcel' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Colis' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo value='Standard box' combo-glyph='cube'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ('box1-type')} />
              <LabelTextField label-glyph='balance-scale' value='3.6 kg'
                hint-text='Poids' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='arrows-h' value='50 x 75 x 20'
                hint-text='Dimensions' grow='1' spacing='large'
                {...this.link ()} />
              <Button glyph='trash-o' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo value='Standard box' combo-glyph='cube'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ('box1-type')} />
              <LabelTextField label-glyph='balance-scale' value='0.4 kg'
                hint-text='Poids' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='arrows-h' value='30 x 21 x 1'
                hint-text='Dimensions' grow='1' spacing='large'
                {...this.link ()} />
              <Button glyph='trash-o' {...this.link ()} />
            </Container>
            <Separator {...this.link ()} />
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo hint-text='Type' combo-glyph='cube' grow='1'
                spacing='large' combo-type='box' {...this.link ('box2-type')} />
              <LabelTextField label-glyph='balance-scale' hint-text='Poids'
                grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='arrows-h' hint-text='Dimensions'
                grow='1' spacing='large' {...this.link ()} />
              <Button glyph='plus' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='info' {...this.link ()} >
              <Label text='Nb de colis 2' kind='info' width='0px'
                grow='1' {...this.link ()} />
              <Label text='Total 3.6 kg' kind='info' width='0px'
                grow='1' {...this.link ()} />
              <Label text='IATA total 3.6 kg' kind='info' width='0px'
                grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='comment' hint-text='Remarque'
                {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-bill' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Facture' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo value='Article' combo-glyph='ellipsis-h'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <LabelTextField label-glyph='tag' value='Course standard'
                hint-text='Description' grow='2' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='usd' value='20.00'
                hint-text='Prix unitaire' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='stack-overflow' value='1'
                hint-text='Quantité' grow='1' spacing='large' {...this.link ()} />
              <TextFieldCombo value='CHF' combo-glyph='question-circle'
                hint-text='Unité' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <Button glyph='trash-o' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo value='Rabais' combo-glyph='ellipsis-h'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <LabelTextField label-glyph='tag' value='Revendeur'
                hint-text='Description' grow='2' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='usd' value='2.00'
                hint-text='Prix unitaire' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='stack-overflow' value='10'
                hint-text='Quantité' grow='1' spacing='large' {...this.link ()} />
              <TextFieldCombo value='%' combo-glyph='question-circle'
                hint-text='Unité' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <Button glyph='trash-o' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Total' justify='left' width='0px'
                grow='2' {...this.link ()} />
              <Label text='18.00 CHF' justify='right' width='0px'
                grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo combo-glyph='ellipsis-h'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <LabelTextField label-glyph='tag'
                hint-text='Description' grow='2' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='usd'
                hint-text='Prix unitaire' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='stack-overflow' value='1'
                hint-text='Quantité' grow='1' spacing='large' {...this.link ()} />
              <TextFieldCombo combo-glyph='question-circle'
                hint-text='Unité' grow='1' spacing='large' combo-type='box'
                {...this.link ()} />
              <Button glyph='plus' {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-recu' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Récurrence' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Calendar recurrence={window.document.dataRecurrence} {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-doc' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Document' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Table data={window.document.dataTable2} {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' anchor='sender-misc' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Divers' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <LabelTextField shape='rounded' label-glyph='tag'
                hint-text='Essai rounded shape' spacing='large'
                {...this.link ()} />
              <Button glyph='plus' text='Ajouter' {...this.link ()} />
              <Badge value='1' {...this.link ()} />
              <Badge value='12' {...this.link ()} />
              <Badge value='123' {...this.link ()} />
              <Badge value='1234' {...this.link ()} />
              <Badge value='12345' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <Container kind='flying-balloon' {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='bottom'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='left'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='right'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <Container kind='flying-balloon' width='150px' {...this.link ()} >
                <Container kind='compact-row' {...this.link ()} >
                  <Label text='Mecatronic' kind='flying-balloon'
                    font-weight='bold' justify='left' grow='2' {...this.link ()} />
                  <Label text='17.05.16' kind='flying-balloon'
                    justify='right' grow='1' {...this.link ()} />
                </Container>
                <Container kind='compact-row' {...this.link ()} >
                  <Label text='Torena SA' kind='flying-balloon'
                    font-weight='bold' justify='left' grow='2' {...this.link ()} />
                  <Label text='18.05.16' kind='flying-balloon'
                    justify='right' grow='1' {...this.link ()} />
                </Container>
              </Container>
            </Container>
          </Container>

        </Container>

        <Container kind='actions' {...this.link ()} >
          <Button glyph='trash-o' text='Annuler' width='0px' grow='1'
            kind='action' place='left' {...this.link ()} />
          <Button glyph='paste' text='Modèle' width='0px' grow='1'
            kind='action' place='middle' {...this.link ()} />
          <Button glyph='inbox' text='Attendre' width='0px' grow='1'
            kind='action' place='middle' {...this.link ()} />
          <Button glyph='check' text='Valider' width='0px' grow='1'
            kind='action' place='right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  hinterViewDate () {
    return (
      <Container kind='view-stretch' {...this.link ()} >
        <Container kind='pane-navigator' {...this.link ()} >
          <Button text='Chercher' width='0px' width='100%'
            active='false'  kind='pane-navigator' {...this.link ()} />
        </Container>
        <Container kind='panes-short' {...this.link ()} >
          <Container kind='pane' {...this.link ()} >
            <Calendar {...this.link ()} />
          </Container>
        </Container>
      </Container>
    );
  }

  hinterViewList () {
    return (
      <Container kind='view-stretch' {...this.link ()} >
        <Container kind='pane-navigator' {...this.link ()} >
          <Button text='Chercher' width='0px' width='100%'
            active='false'  kind='pane-navigator' {...this.link ()} />
        </Container>
        <Container kind='panes-short' {...this.link ()} >
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='building' text='Clients' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Bois Sec SA' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Bussigny' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Mecatronic SA' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Prilly' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Alfred Chauvet' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Lausanne' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
          </Container>
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='user' text='Contacts' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Christophe Ducommun' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Lausanne' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jeanne Sophian' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Crissier' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='André Kudelski' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Cheseaux' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' selected='true' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Marie-Jeanne Meyer' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Neuchâtel' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jean-Pierre-Etienne von Dutrèsprécieux' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Plan-les-Ouattes' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jean-Pierre-Etienne von Dutrèsprécieux' kind='large-left' justify='left' wrap='no' grow='2'
                  {...this.link ()} />
                <Label text='Plan-les-Ouattes' kind='large-right' justify='left'
                  wrap='no' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='large-box' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Périnne Lemarchand' kind='large-left' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='Pully' kind='large-right' justify='left' grow='1'
                  {...this.link ()} />
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  hinterView () {
    // return this.hinterViewDate ();
    return this.hinterViewList ();
  }

  navigatorType () {
    // return 'vnavigator';
    // return 'hnavigator-icon';
    return 'hnavigator-text';
  }

  vnavigator () {
    if (this.navigatorType () !== 'vnavigator') {
      return null;
    }
    return (
      <Container kind='pane-vnavigator' navigation-for="details" {...this.link ()} >
        <Button glyph='building' tooltip='Adresse principale'
          kind='pane-vnavigator' to-anchor='details-address' {...this.link ()} />
        <Button glyph='user' tooltip='Contacts'
          kind='pane-vnavigator' to-anchor='details-contacts' {...this.link ()} />
        <Button glyph='bookmark-o' tooltip='Infomations'
          kind='pane-vnavigator' to-anchor='details-infos' {...this.link ()} />
        <Button glyph='list' tooltip='Dernières missions'
          kind='pane-vnavigator' to-anchor='details-missions' {...this.link ()} />
        <Button glyph='gears' tooltip='Paramètres'
          kind='pane-vnavigator' to-anchor='details-params' {...this.link ()} />
        <Button glyph='paperclip' tooltip='Documents'
          kind='pane-vnavigator' to-anchor='details-docs' {...this.link ()} />
      </Container>
    );
  }

  hnavigatorIcon () {
    return (
      <Container kind='pane-hnavigator' navigation-for="details" {...this.link ()} >
        <Button glyph='building' tooltip='Adresse principale'
          kind='pane-hnavigator' to-anchor='details-address' {...this.link ()} />
        <Button glyph='user' tooltip='Contacts'
          kind='pane-hnavigator' to-anchor='details-contacts' {...this.link ()} />
        <Button glyph='bookmark-o' tooltip='Infomations'
          kind='pane-hnavigator' to-anchor='details-infos' {...this.link ()} />
        <Button glyph='list' tooltip='Dernières missions'
          kind='pane-hnavigator' to-anchor='details-missions' {...this.link ()} />
        <Button glyph='gears' tooltip='Paramètres'
          kind='pane-hnavigator' to-anchor='details-params' {...this.link ()} />
        <Button glyph='paperclip' tooltip='Documents'
          kind='pane-hnavigator' to-anchor='details-docs' {...this.link ()} />
      </Container>
    );
  }

  hnavigatorText () {
    return (
      <Container kind='pane-hnavigator' navigation-for="details" {...this.link ()} >
        <Button text='Adresse principale' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-address' {...this.link ()} />
        <Button text='Contacts' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-contacts' {...this.link ()} />
        <Button text='Infomations' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-infos' {...this.link ()} />
        <Button text='Dernières missions' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-missions' {...this.link ()} />
        <Button text='Paramètres' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-params' {...this.link ()} />
        <Button text='Documents' width='0px' grow='1'
          kind='pane-navigator' to-anchor='details-docs' {...this.link ()} />
      </Container>
    );
  }

  hnavigator () {
    if (this.navigatorType () === 'hnavigator-icon') {
      return this.hnavigatorIcon ();
    } else if (this.navigatorType () === 'hnavigator-text') {
      return this.hnavigatorText ();
    } else {
      return null;
    }
  }

  rightView () {
    return (
      <Container kind='view-stretch' {...this.link ()} >
        <Container kind='column-full' {...this.link ()} >
          {this.vnavigator ()}
          <Container kind='pane-header' {...this.link ()} >
            <Label text='Mon beau bouquet SA' kind='pane-header'
              {...this.link ()} />
          </Container>
          {this.hnavigator ()}

          <Container kind='panes' navigation-name="details" {...this.link ()} >
            <Container kind='pane' anchor='details-address' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='building' text='Adresse principale'
                  grow='1' kind='title' {...this.link ()} />
                <Button glyph='ellipsis-v' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='map-marker'
                  text='Mon beau bouquet SA\nPlace du Marché 12\n1002 Lausanne'
                  vpos='top' grow='2' {...this.link ()} />
                <Label text='+41 21 650 20 20\ninfo@bouquet.ch' vpos='top'
                  grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='map-marker'
                  text='Mon très beau bouquet beaucoup trop long SA\nPlace du Marché 12\n1002 Lausanne'
                  wrap='no' vpos='top' grow='2' {...this.link ()} />
                <Label text='+41 21 650 20 20\ninformation@monbeaubouquet.ch'
                  wrap='no' vpos='top' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='map-marker'
                  text='Mon très beau bouquet beaucoup trop long SA\nPlace du Marché 12\n1002 Lausanne'
                  vpos='top' grow='2' {...this.link ()} />
                <Label text='+41 21 650 20 20\ninformation@monbeaubouquet.ch'
                  vpos='top' grow='1' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' anchor='details-contacts' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='user' text='Contacts' grow='1' kind='title'
                  {...this.link ()} />
                <Button glyph='plus' text='Ajouter' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Button glyph='user' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Christophe Ducommun' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='+41 21 650 22 87' justify='left'
                  grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth' spacing='overlap'
                  {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' selected='true' {...this.link ()} >
                <Button glyph='user' kind='round' spacing='large' {...this.link ()} />
                <Label text='Jeanne Sophian' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='+41 78 347 20 40' justify='left'
                  grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth'
                  spacing='overlap' {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Button glyph='user' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Marie-Jeanne-Francine van den Trucmuche-très-long'
                  justify='left' grow='2' {...this.link ()} />
                <Label text='+41 78 347 20 40 (domicile)' justify='left'
                  grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth'
                  spacing='overlap' {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Button glyph='user' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Marie-Jeanne-Francine van den Trucmuche-très-long'
                  justify='left' wrap='no' grow='2' {...this.link ()} />
                <Label text='+41 78 347 20 40 (domicile)' justify='left'
                  wrap='no' grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth'
                  spacing='overlap' {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' anchor='details-infos' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='bookmark-o' text='Informations'
                  grow='1' kind='title' {...this.link ()} />
                <TextFieldCombo shape='rounded' hint-text='Chercher'
                  combo-glyph='Search' spacing='large' {...this.link ()} />
                <Button glyph='plus' text='Ajouter' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='bookmark' glyph-color='#ff0000' glyph-size='140%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.'
                  grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth'
                  spacing='overlap' {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='bookmark' glyph-color='#2e5588' glyph-size='140%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.'
                  wrap='no' grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth' spacing='overlap'
                  {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='bookmark' glyph-color='#ffaf00' glyph-size='140%'
                  text='Lorem ipsum dolor sit amet' grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth'
                  spacing='overlap' {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label glyph='bookmark' glyph-color='#2e5588' glyph-size='140%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                  grow='1' {...this.link ()} />
                <Button glyph='trash-o' shape='left-smooth' spacing='overlap'
                  {...this.link ()} />
                <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='footer' {...this.link ()} >
                <Button kind='subaction' text='Afficher plus d´informations'
                  width='0px' grow='1' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' anchor='details-missions' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='list' text='Dernières missions'
                  grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Button glyph='automobile' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Ricota SA' justify='left' grow='5'
                  {...this.link ()} />
                <Label text='Lausanne' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='15.05.16' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='13:05' justify='left' grow='1'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Button glyph='train' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Mecatronic' justify='left' grow='5'
                  {...this.link ()} />
                <Label text='Genève' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='17.05.16' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='08:15' justify='left' grow='1'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box'
                mark-color='primary' {...this.link ()} >
                <Button glyph='bicycle' kind='round'spacing='large'
                  {...this.link ()} />
                <Label text='Coop' justify='left' grow='5'
                  {...this.link ()} />
                <Label text='Prilly' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='21.05.16' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='17:55' justify='left' grow='1'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box'
                mark-color='secondary' {...this.link ()} >
                <Button glyph='bicycle' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Migros' justify='left' grow='5'
                  {...this.link ()} />
                <Label text='Renens' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='02.06.16' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='10:30' justify='left' grow='1'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box'
                mark-color='#69ed22' {...this.link ()} >
                <Button glyph='truck' kind='round' spacing='large'
                  {...this.link ()} />
                <Label text='Torena SA' justify='left' grow='5'
                  {...this.link ()} />
                <Label text='Crissier' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='05.06.16' justify='left' grow='2'
                  {...this.link ()} />
                <Label text='17:45' justify='left' grow='1'
                  {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='footer' {...this.link ()} >
                <Button kind='subaction' text='Afficher plus de missions'
                  width='0px' grow='1' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' anchor='details-params' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='gears' text='Paramètres' grow='1'
                  kind='title' {...this.link ()} />
                <Button glyph='ellipsis-v' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <LabelTextField label-text='ID SC' label-width='100px'
                  hint-text='Numéro d´identification' grow='1'
                  spacing='large' {...this.link ()} />
                <Label text='' width='140px' spacing='large'
                  {...this.link ()} />
                <Label text='' width='140px' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <LabelTextField label-text='Références' label-width='100px'
                  hint-text='Références' grow='1' spacing='large'
                  {...this.link ()} />
                <Button glyph='toggle-on' text='Obligatoire'
                  glyph-position='right' width='140px'
                  spacing='large' {...this.link ()} />
                <Label text='' width='140px' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <LabelTextField label-text='Paiement' label-width='100px'
                  hint-text='Mode de paiement' grow='1' spacing='large'
                  {...this.link ()} />
                <Button glyph='check-square' text='Facture BVR'
                  glyph-position='right' width='140px'
                  spacing='large' {...this.link ()} />
                <Button glyph='square-o' text='Facture PDF'
                  glyph-position='right' width='140px' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='' grow='1' {...this.link ()} />
                <Button glyph='toggle-off' text='Détaillé'
                  glyph-position='right' width='140px'
                  spacing='large' {...this.link ()} />
                <Button glyph='toggle-on' text='Résumé'
                  glyph-position='right' width='140px' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <LabelTextField label-text='Rabais' label-width='100px'
                  hint-text='Rabais accordé' grow='1' spacing='large'
                  {...this.link ()} />
                <Button glyph='check-square' text='Personnel'
                  glyph-position='right' width='140px' spacing='large'
                  {...this.link ()} />
                <Button glyph='square-o' text='Cumulé' glyph-position='right'
                  width='140px' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='' grow='1' {...this.link ()} />
                <Button glyph='toggle-on' text='TVA incluse'
                  glyph-position='right' width='140px'
                  spacing='large' {...this.link ()} />
                <Label text='' width='140px' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' anchor='details-docs' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='paperclip' text='Documents' grow='1'
                  kind='title' {...this.link ()} />
                <TextFieldCombo shape='rounded' hint-text='Chercher'
                  combo-glyph='Search' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label text='12.01.16' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='La Belle Plante' justify='left'
                  grow='4' {...this.link ()} />
                <Label text='Neuchâtel' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='129.80' justify='right'
                  grow='2' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label text='31.03.16' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='Ricota SA' justify='left'
                  grow='4' {...this.link ()} />
                <Label text='Lausanne' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='58.50' justify='right'
                  grow='2' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='box' {...this.link ()} >
                <Label text='01.04.16' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='Mauser Frères' justify='left'
                  grow='4' {...this.link ()} />
                <Label text='Ecublens' justify='left'
                  grow='2' {...this.link ()} />
                <Label text='95.00' justify='right'
                  grow='2' {...this.link ()} />
              </Container>
              <Container kind='row-pane' subkind='footer' {...this.link ()} >
                <Button kind='subaction' text='Afficher plus de documents'
                  width='0px' grow='1' {...this.link ()} />
              </Container>
            </Container>

          </Container>
        </Container>
      </Container>
    );
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >
        <Splitter kind='vertical' default-size='65%' {...this.link ()} >
          <Splitter kind='vertical' default-size='50%' {...this.link ()} >
            {this.leftView ()}
            {this.hinterView ()}
          </Splitter>
          {this.rightView ()}
        </Splitter>
      </Container>
    );
  }
}
