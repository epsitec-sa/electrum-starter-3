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
  Badge,
  Calendar,
  Clock,
  Menu,
  FlyingBalloon,
  Separator
} from 'electrum-arc';

import act from './actuators.js';

export default class Polypheme extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  menuOptions () {
    return [
      () => {
        return (<Button kind='menu-item' glyph='toggle-on' text='Options' {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='gear' text='Préférences' {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='cloud' text='Données' {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='desktop' text='Affichage' {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='search' text='Recherches extralucides' {...this.link ()} />);
      },
    ];
  }

  navigatorType () {
    return 'vnavigator';
    // return 'hnavigator';
  }

  vnavigator () {
    if (this.navigatorType () !== 'vnavigator') {
      return null;
    }
    return (
      <Container kind='pane-vnavigator' {...this.link ()} >
        <Button glyph='building'   tooltip='Adresse principale' active='false' kind='pane-vnavigator' {...this.link ()} />
        <Button glyph='user'       tooltip='Contacts'           active='false' kind='pane-vnavigator' {...this.link ()} />
        <Button glyph='bookmark-o' tooltip='Infomations'        active='true'  kind='pane-vnavigator' {...this.link ()} />
        <Button glyph='list'       tooltip='Dernières missions' active='false' kind='pane-vnavigator' {...this.link ()} />
        <Button glyph='gears'      tooltip='Paramètres'         active='false' kind='pane-vnavigator' {...this.link ()} />
        <Button glyph='paperclip'  tooltip='Documents'          active='false' kind='pane-vnavigator' {...this.link ()} />
      </Container>
    );
  }

  hnavigator () {
    if (this.navigatorType () !== 'hnavigator') {
      return null;
    }
    return (
      <Container kind='pane-hnavigator' {...this.link ()} >
        <Button glyph='building'   tooltip='Adresse principale' active='false' kind='pane-hnavigator' {...this.link ()} />
        <Button glyph='user'       tooltip='Contacts'           active='false' kind='pane-hnavigator' {...this.link ()} />
        <Button glyph='bookmark-o' tooltip='Infomations'        active='true'  kind='pane-hnavigator' {...this.link ()} />
        <Button glyph='list'       tooltip='Dernières missions' active='false' kind='pane-hnavigator' {...this.link ()} />
        <Button glyph='gears'      tooltip='Paramètres'         active='false' kind='pane-hnavigator' {...this.link ()} />
        <Button glyph='paperclip'  tooltip='Documents'          active='false' kind='pane-hnavigator' {...this.link ()} />
      </Container>
    );
  }

  hinterType () {
    // return 'date';
    return 'list';
    // return 'empty';
  }

  hinterDate () {
    return (
      <Container kind='view' height-type='short' {...this.link ()} >
        <Container kind='pane-navigator' {...this.link ()} >
          <Button text='Choix d´une date' width='0px' grow='1' active='false'  kind='pane-navigator' {...this.link ()} />
        </Container>
        <Container kind='panes' {...this.link ()} >
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <Calendar onChange={(date) => console.log (date)} {...this.link ('test-calendar')} />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  hinterList () {
    return (
      <Container kind='view' height-type='short' width='400' {...this.link ()} >
        <Container kind='pane-navigator' {...this.link ()} >
          <Button text='Chercher' width='0px' width='100%' active='false'  kind='pane-navigator' {...this.link ()} />
        </Container>
        <Container kind='panes' {...this.link ()} >
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' subkind='info' {...this.link ()} >
              <Label glyph='building' text='Clients' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Bois Sec SA'         kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Bussigny'            kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Mecatronic SA'       kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Prilly'              kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Alfred Chauvet'      kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Lausanne'            kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
          </Container>
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' subkind='info' {...this.link ()} >
              <Label glyph='user' text='Contacts' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Christophe Ducommun' kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Lausanne'            kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jeanne Sophian'      kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Crissier'            kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='André Kudelski'      kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Cheseaux'            kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Marie-Jeanne Meyer'  kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Neuchâtel'           kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jean-Pierre-Etienne von Dutrèsprécieux'  kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Plan-les-Ouattes' kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Jean-Pierre-Etienne von Dutrèsprécieux' kind='justify-left' wrap='no' grow='2' {...this.link ()} />
                <Label text='Plan-les-Ouattes' kind='justify-left' wrap='no' grow='1' {...this.link ()} />
              </Button>
            </Container>
            <Container kind='row-pane' subkind='list' {...this.link ()} >
              <Button kind='container' width='100%' {...this.link ()}>
                <Label text='Périnne Lemarchand'  kind='justify-left' grow='2' {...this.link ()} />
                <Label text='Pully'               kind='justify-left' grow='1' {...this.link ()} />
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  hinter () {
    if (this.hinterType () === 'date') {
      return this.hinterDate ();
    } else if (this.hinterType () === 'list') {
      return this.hinterList ();
    } else {
      return null;
    }
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
          <Button action={act.NEXT ()} glyph='cube' text='Poly'     kind='task-logo' {...this.link ()} />
          <Button glyph='plus-square' text='Activité' kind='task' badge-value='27' {...this.link ()} />
          <Button glyph='inbox'       text='En cours' kind='task' {...this.link ()} />
        </Container>

        <Container kind='right' {...this.link ()} >

          <Container kind='main-tab' {...this.link ()} >
            <Button text='Dispo'       width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Co-dispo'    width='160px' active='true'  kind='main-tab' {...this.link ()} />
            <Button text='Facturation' width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Clients'     width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Équipe'      width='160px' active='false' kind='main-tab' {...this.link ()} />
          </Container>

          <Container kind='view-tab' {...this.link ()} >
            <TabButton text='Nom du client | 10:42'     active='true'  {...this.link ()} />
            <TabButton text='Nom du client | 10:30'     active='false' {...this.link ()} />
            <TabButton text='Nom de la mission | 09:56' active='false' {...this.link ()} />
          </Container>

          <Container kind='views' {...this.link ()} >
            <Container kind='view' width='700px' {...this.link ()} >
              <Container kind='pane-navigator' {...this.link ()} >
                <Button text='Expéditeur'   width='0px' grow='1' active='true'  kind='pane-navigator' {...this.link ()} />
                <Button text='Prestation'   width='0px' grow='1' active='false' kind='pane-navigator' {...this.link ()} />
                <Button text='Destinataire' width='0px' grow='1' active='false' kind='pane-navigator' {...this.link ()} />
                <Button text='Colis'        width='0px' grow='1' active='false' kind='pane-navigator' {...this.link ()} />
                <Button text='Facture'      width='0px' grow='1' active='false' kind='pane-navigator' {...this.link ()} />
              </Container>

              <Container kind='panes' {...this.link ()} >
                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Expéditeur' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='toggle-off' text='Nouveau' border='none' spacing='large' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' spacing='large' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <TextFieldCombo hint-text='Date' combo-glyph='calendar' grow='1' spacing='large' combo-type='calendar' combo-direction='right' flying-balloon-anchor='bottom' {...this.link ('exp-date')} />
                    <TextFieldCombo hint-text='Période' combo-glyph='clock-o' grow='2' spacing='large' combo-type='clock' flying-balloon-anchor='right' {...this.link ('exp-time')} />
                    <TextFieldCombo hint-text='Zone' combo-glyph='map-marker' grow='1' combo-type='zone' {...this.link ('exp-zone')} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='user' hint-text='Nom du client' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='tag' hint-text='Référence client' spacing='large' {...this.link ()} />
                    <Button glyph='check-square' text='facturé à' border='none' glyph-position='right' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Prestation' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Button text='Standard (1h)'    width='0px' grow='1' spacing='large' {...this.link ()} />
                    <Button text='Urgent (30 min)'  width='0px' grow='1' spacing='large' {...this.link ()} />
                    <Button text='Dring Dring'      width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Button text='Course régulière' width='0px' grow='1' spacing='large' {...this.link ()} />
                    <Button text='Multi'            width='0px' grow='1' spacing='large' {...this.link ()} />
                    <Button text='Case postale'     width='0px' grow='1' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Destinataire' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='toggle-off' text='Nouveau' border='none' spacing='large' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' spacing='large' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <TextFieldCombo hint-text='Date' combo-glyph='calendar' grow='1' spacing='large' combo-type='calendar' combo-direction='right' {...this.link ('dest-date')} />
                    <TextFieldCombo hint-text='Période' combo-glyph='clock-o' grow='2' spacing='large' combo-type='clock' {...this.link ('dest-time')} />
                    <TextFieldCombo hint-text='Zone' combo-glyph='map-marker' grow='1' combo-type='zone' {...this.link ('dest-zone')} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='user' hint-text='Nom du client' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='comment' hint-text='Remarque' spacing='large' {...this.link ()} />
                    <Button glyph='comment' glyph='square-o' text='facturé à' border='none' glyph-position='right' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Colis' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' spacing='large' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Button glyph='trash-o' spacing='large' {...this.link ()} />
                    <TextFieldCombo value='Standard box' combo-glyph='cube' hint-text='Type' grow='1' spacing='large' combo-type='box' {...this.link ('box1-type')} />
                    <LabelTextField label-glyph='balance-scale' value='3.6 kg' hint-text='Poids' grow='1' spacing='large' {...this.link ()} />
                    <LabelTextField label-glyph='arrows-h' value='50 x 75 x 20' hint-text='Dimensions' grow='1' spacing='overlap' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Button glyph='trash-o' spacing='large' {...this.link ()} />
                    <TextFieldCombo hint-text='Type' combo-glyph='cube' grow='1' spacing='large' combo-type='box' {...this.link ('box2-type')} />
                    <LabelTextField label-glyph='balance-scale' hint-text='Poids' grow='1' spacing='large' {...this.link ()} />
                    <LabelTextField label-glyph='arrows-h' hint-text='Dimensions' grow='1' spacing='overlap' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='info' {...this.link ()} >
                    <Label text='Nb de colis 2'     kind='info' width='0px' grow='1' {...this.link ()} />
                    <Label text='Total 3.6 kg'      kind='info' width='0px' grow='1' {...this.link ()} />
                    <Label text='IATA total 3.6 kg' kind='info' width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-glyph='comment' hint-text='Remarque' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Facture' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' spacing='large' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='compact' {...this.link ()} >
                    <Label text='Standard A - C'   kind='justify-left'  width='0px' grow='4' {...this.link ()} />
                    <Label text='50.00'            kind='justify-right' width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='compact' {...this.link ()} >
                    <Label text='Supplément poids' kind='justify-left'  width='0px' grow='4' {...this.link ()} />
                    <Label text='12.00'            kind='justify-right' width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='compact' subkind='wide-info' {...this.link ()} >
                    <Label text='Sous-total'       kind='justify-left'  width='0px' grow='4' {...this.link ()} />
                    <Label text='62.00'            kind='justify-right' width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='compact' {...this.link ()} >
                    <Label text='Avance d´argent'  kind='justify-left'  width='0px' grow='4' {...this.link ()} />
                    <Label text='55.00'            kind='justify-right' width='0px' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='glued' subkind='wide-info' {...this.link ()} >
                    <Label text='Total'            kind='justify-left'  width='0px' grow='4' {...this.link ()} />
                    <Label text='117.00'           kind='justify-right' width='0px' grow='1' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Divers' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' spacing='large' {...this.link ()} >
                    <LabelTextField shape='rounded' label-glyph='tag' hint-text='Essai rounded shape' spacing='large' {...this.link ()} />
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
                    <Container kind='flying-balloon' triangle-position='bottom' {...this.link ()} >
                      <Button glyph='gears' text='Réglages' {...this.link ()} />
                    </Container>
                    <Container kind='flying-balloon' triangle-position='left' {...this.link ()} >
                      <Button glyph='gears' text='Réglages' {...this.link ()} />
                    </Container>
                    <Container kind='flying-balloon' triangle-position='right' {...this.link ()} >
                      <Button glyph='gears' text='Réglages' {...this.link ()} />
                    </Container>
                  </Container>
                </Container>

              </Container>

              <Container kind='actions' {...this.link ()} >
                <Button glyph='trash-o' text='Annuler'  width='0px' grow='1' kind='action' place='left'   {...this.link ()} />
                <Button glyph='paste'   text='Modèle'   width='0px' grow='1' kind='action' place='middle' {...this.link ()} />
                <Button glyph='inbox'   text='Attendre' width='0px' grow='1' kind='action' place='middle' {...this.link ()} />
                <Button glyph='check'   text='Valider'  width='0px' grow='1' kind='action' place='right'  {...this.link ()} />
              </Container>
            </Container>

            {this.hinter ()}

            <Container kind='view-wedge' {...this.link ()} >
            </Container>

            <Container kind='view' width='600px' {...this.link ()} >
              {this.vnavigator ()}
              <Container kind='pane-header' {...this.link ()} >
                <Label text='Mon beau bouquet SA' kind='pane-header' {...this.link ()} />
              </Container>
              {this.hnavigator ()}

              <Container kind='panes' {...this.link ()} >
                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='building' text='Adresse principale' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='map-marker' text='Mon beau bouquet SA\nPlace du Marché 12\n1002 Lausanne' vpos='top' grow='2' {...this.link ()} />
                    <Label text='+41 21 650 20 20\ninfo@bouquet.ch' vpos='top' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='map-marker' text='Mon très beau bouquet beaucoup trop long SA\nPlace du Marché 12\n1002 Lausanne' wrap='no' vpos='top' grow='2' {...this.link ()} />
                    <Label text='+41 21 650 20 20\ninformation@monbeaubouquet.ch' wrap='no' vpos='top' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='map-marker' text='Mon très beau bouquet beaucoup trop long SA\nPlace du Marché 12\n1002 Lausanne' vpos='top' grow='2' {...this.link ()} />
                    <Label text='+41 21 650 20 20\ninformation@monbeaubouquet.ch' vpos='top' grow='1' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='user' text='Contacts' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='user' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Christophe Ducommun' kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='+41 21 650 22 87'    kind='justify-left' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='user' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Jeanne Sophian'      kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='+41 78 347 20 40'    kind='justify-left' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='user' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Marie-Jeanne-Francine van den Trucmuche-très-long' kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='+41 78 347 20 40 (domicile)' kind='justify-left' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='user' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Marie-Jeanne-Francine van den Trucmuche-très-long' kind='justify-left' wrap='no' grow='2' {...this.link ()} />
                    <Label text='+41 78 347 20 40 (domicile)' kind='justify-left' wrap='no' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='bookmark-o' text='Informations' grow='1' kind='title' {...this.link ()} />
                    <TextFieldCombo shape='rounded' hint-text='Chercher' combo-glyph='Search' spacing='large' {...this.link ()} />
                    <Button glyph='plus' text='Ajouter' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='bookmark' glyph-color='#ff0000' glyph-size='140%' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='bookmark' glyph-color='#2e5588' glyph-size='140%' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' wrap='no' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='bookmark' glyph-color='#ffaf00' glyph-size='140%' text='Lorem ipsum dolor sit amet' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label glyph='bookmark' glyph-color='#2e5588' glyph-size='140%' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit' grow='1' {...this.link ()} />
                    <Button glyph='trash-o' shape='left-smooth' spacing='overlap' {...this.link ()} />
                    <Button glyph='pencil' shape='right-smooth' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='footer' {...this.link ()} >
                    <Button kind='subaction' text='Afficher plus d´informations' width='0px' grow='1' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='list' text='Dernières missions' grow='1' kind='title' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='automobile' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Ricota SA'  kind='justify-left' grow='5' {...this.link ()} />
                    <Label text='Lausanne'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='15.05.16'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='13:05'      kind='justify-left' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Button glyph='train' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Mecatronic' kind='justify-left' grow='5' {...this.link ()} />
                    <Label text='Genève'     kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='17.05.16'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='08:15'      kind='justify-left' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' mark-color='primary' {...this.link ()} >
                    <Button glyph='bicycle' kind='round'spacing='large'  {...this.link ()} />
                    <Label text='Coop'       kind='justify-left' grow='5' {...this.link ()} />
                    <Label text='Prilly'     kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='21.05.16'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='17:55'      kind='justify-left' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' mark-color='secondary' {...this.link ()} >
                    <Button glyph='bicycle' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Migros'     kind='justify-left' grow='5' {...this.link ()} />
                    <Label text='Renens'     kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='02.06.16'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='10:30'      kind='justify-left' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' mark-color='#69ed22' {...this.link ()} >
                    <Button glyph='truck' kind='round' spacing='large' {...this.link ()} />
                    <Label text='Torena SA'  kind='justify-left' grow='5' {...this.link ()} />
                    <Label text='Crissier'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='05.06.16'   kind='justify-left' grow='2' {...this.link ()} />
                    <Label text='17:45'      kind='justify-left' grow='1' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='footer' {...this.link ()} >
                    <Button kind='subaction' text='Afficher plus de missions' width='0px' grow='1' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='gears' text='Paramètres' grow='1' kind='title' {...this.link ()} />
                    <Button glyph='ellipsis-v' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-text='ID SC' label-width='100px' hint-text='Numéro d´identification' grow='1' spacing='large' {...this.link ()} />
                    <Label text='' width='140px' spacing='large' {...this.link ()} />
                    <Label text='' width='140px' {...this.link ()} />
                  </Container>
                  <Separator {...this.link ()} />
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-text='Références' label-width='100px' hint-text='Références' grow='1' spacing='large' {...this.link ()} />
                    <Button glyph='toggle-on' text='Obligatoire' glyph-position='right' width='140px' spacing='large' {...this.link ()} />
                    <Label text='' width='140px' {...this.link ()} />
                  </Container>
                  <Separator {...this.link ()} />
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-text='Paiement' label-width='100px' hint-text='Mode de paiement' grow='1' spacing='large'  {...this.link ()} />
                    <Button glyph='check-square' text='Facture BVR' glyph-position='right' width='140px' spacing='large' {...this.link ()} />
                    <Button glyph='square-o' text='Facture PDF' glyph-position='right' width='140px' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='' grow='1' {...this.link ()} />
                    <Button glyph='toggle-off' text='Détaillé' glyph-position='right' width='140px' spacing='large' {...this.link ()} />
                    <Button glyph='toggle-on' text='Résumé' glyph-position='right' width='140px' {...this.link ()} />
                  </Container>
                  <Separator {...this.link ()} />
                  <Container kind='row-pane' {...this.link ()} >
                    <LabelTextField label-text='Rabais' label-width='100px' hint-text='Rabais accordé' grow='1' spacing='large'  {...this.link ()} />
                    <Button glyph='check-square' text='Personnel' glyph-position='right' width='140px' spacing='large' {...this.link ()} />
                    <Button glyph='square-o' text='Cumulé' glyph-position='right' width='140px' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='' grow='1' {...this.link ()} />
                    <Button glyph='toggle-on' text='TVA incluse' glyph-position='right' width='140px' spacing='large' {...this.link ()} />
                    <Label text='' width='140px' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='paperclip' text='Documents' grow='1' kind='title' {...this.link ()} />
                    <TextFieldCombo shape='rounded' hint-text='Chercher' combo-glyph='Search' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label text='12.01.16'        kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='La Belle Plante' kind='justify-left'  grow='4' {...this.link ()} />
                    <Label text='Neuchâtel'       kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='129.80'          kind='justify-right' grow='2' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label text='31.03.16'        kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='Ricota SA'       kind='justify-left'  grow='4' {...this.link ()} />
                    <Label text='Lausanne'        kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='58.50'           kind='justify-right' grow='2' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='box' {...this.link ()} >
                    <Label text='01.04.16'        kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='Mauser Frères'   kind='justify-left'  grow='4' {...this.link ()} />
                    <Label text='Ecublens'        kind='justify-left'  grow='2' {...this.link ()} />
                    <Label text='95.00'           kind='justify-right' grow='2' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' subkind='footer' {...this.link ()} >
                    <Button kind='subaction' text='Afficher plus de documents' width='0px' grow='1' {...this.link ()} />
                  </Container>
                </Container>

              </Container>
            </Container>
          </Container>

          <Container kind='footer' {...this.link ()} >
            <Button glyph='gears' text='Options' kind='footer' menu={this.menuOptions ()} menu-direction='top' {...this.link ('options')} />
            <Label text='Marc Sandoz | 09h56' grow='1' kind='footer' {...this.link ()} />
            <Button glyph='ellipsis-v' kind='footer' {...this.link ()} />
            <Button glyph='clock-o' text='Missions' glyph-position='right' kind='footer' badge-value='92' {...this.link ()} />
          </Container>

        </Container>
      </Container>
    );
  }
}
