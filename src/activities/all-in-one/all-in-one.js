'use strict';

import React from 'react';
import {
  Container,
  Dialog,
  Ticket,
  Button,
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
  Notifications,
  Notification
} from 'electrum-arc';
import {
  DispatchTrips,
  DispatchMessengers,
  Codispatch
} from '../../all-components.js';

import act from './actuators.js';

export default class AllInOne extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      // currentStep: 'login',
      currentStep: 'codispatch',
      currentMandat: null,
      showNotifications: false,
    };
  }

  /******************************************************************************/
  activeStep (name) {
    return (this.getStep () === name) ? 'true' : 'false';
  }

  getStep () {
    return this.state.currentStep;
  }

  setStep (name) {
    if (name === 'login') {
      this.setMandat (null);
    }
    this.setState ( {
      currentStep: name
    });
  }

  swapShowNotifications () {
    this.setShowNotifications (!this.getShowNotifications ());
  }

  getShowNotifications () {
    return this.state.showNotifications;
  }

  setShowNotifications (show) {
    this.setState ( {
      showNotifications: show
    });
  }

  activeMandat (name) {
    return (this.getMandat () === name) ? 'true' : 'false';
  }

  glyphMandat (name) {
    const x = {
      Nouveau:  'diamond',
      Bouquet:  'tree',
      Vélocité: 'bicycle',
      Cargo:    'truck',
      Pack:     'cube',
      Admin:    'institution',
    };
    return x[name];
  }

  getMandat () {
    return this.state.currentMandat ? this.state.currentMandat : 'Nouveau';
  }

  setMandat (name) {
    this.setState ( {
      currentMandat: name
    });
  }

  hasFooterWarning () {
    return 'no';
    // return 'yes';
  }

  hasDialog () {
    return 'no';
    // return 'yes';
  }
  /******************************************************************************/

  taskBar () {
    if (this.getStep () === 'login') {
      return (
        <Button action={act.NEXT ()} text=' ' border='none' z-index= '1' {...this.link ()} />
      );
    } else if (this.getStep () === 'logout' ||
               this.getStep () === 'mandats' ||
               this.getStep () === 'mandat-create') {
      return null;
    } else if (this.getStep () === 'dispatch-trips' ||
               this.getStep () === 'dispatch-messengers') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='clock-o' text='Missions'
            kind='task' badge-value='54' {...this.link ()} />
          <Button glyph='inbox' text='Panier'
            kind='task' badge-value='2' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'codispatch') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='plus-square' text='Activité'
            kind='task' badge-value='27' {...this.link ()} />
          <Button glyph='inbox' text='En cours'
            kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'synchro') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='refresh' text='Synchroniser' tooltip='Synchroniser tous les mandats' kind='task' {...this.link ()} />
          <Button glyph='link' text='Se rattacher' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task' {...this.link ()} />
          <Button glyph='cloud-download' text='Attacher' tooltip='Attacher un fichier' kind='task' {...this.link ()} />
          <Button glyph='share-alt' text='Partager' tooltip='Partager le mandat au moyen d´un ticket' kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-journal') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='search' text='Chercher' kind='task' {...this.link ()} />
          <Button glyph='plus-circle' text='TVA' kind='task' {...this.link ()} />
          <Button glyph='columns' text='Boucler' kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-plan') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='search' text='Chercher' kind='task' {...this.link ()} />
          <Button glyph='check' text='Vérifier' kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'fact') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='search' text='Chercher' kind='task' {...this.link ()} />
          <Button glyph='print' text='Imprimer' kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'sal') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='euro' text='Faire' kind='task' {...this.link ()} />
        </Container>
      );
    } else {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
        </Container>
      );
    }
  }

  mainTab () {
    if (this.getStep () === 'login') {
      return null;
    } else if (this.getStep () === 'logout' || this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Button action={act.NEXT ()} text=' ' border='none' z-index= '1' {...this.link ()} />
          <Container kind='main-tab-right' {...this.link ()} >
            <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-right' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.getStep () === 'dispatch-trips' ||
               this.getStep () === 'dispatch-messengers' ||
               this.getStep () === 'codispatch' ||
               this.getStep () === 'fact' ||
               this.getStep () === 'customers' ||
               this.getStep () === 'team' ||
               this.getStep () === 'empty') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Button action={() => this.setStep ('dispatch-trips')}
            active={(this.getStep () === 'dispatch-trips' || this.getStep () === 'dispatch-messengers') ? 'true' : 'false'}
            text='dispo' width='200px' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('codispatch')}
            active={this.activeStep ('codispatch')}
            text='co-dispo' width='200px' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('fact')}
            active={this.activeStep ('fact')}
            text='Facturation' width='200px' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('customers')}
            active={this.activeStep ('customers')}
            text='Clients' width='200px' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('team')}
            active={this.activeStep ('team')}
            text='Équipe' width='200px' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('empty')}
            active={this.activeStep ('empty')}
            text='Rien' width='200px' kind='main-tab' {...this.link ()} />
          <Container kind='main-tab-right' {...this.link ()} >
            <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-right' {...this.link ()} />
          </Container>
        </Container>
      );
    }
  }

  viewTab () {
    if (this.getStep () === 'login' || this.getStep () === 'logout') {
      return null;
    } else if (this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
    } else if (this.getStep () === 'dispatch-trips' || this.getStep () === 'dispatch-messengers') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <Button action={() => this.setStep ('dispatch-trips')}
            text='Missions' kind='view-tab'
            active={this.activeStep ('dispatch-trips')} {...this.link ()} />
          <Button action={() => this.setStep ('dispatch-messengers')}
            text='Coursiers' kind='view-tab'
            active={this.activeStep ('dispatch-messengers')} {...this.link ()} />
          <Container kind='view-tab-right' {...this.link ()} >
            <Button action={() => this.swapShowNotifications ()}
              text='Notifications' glyph='bell' glyph-position='right'
              badge-value='6' kind='view-tab-right' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.getStep () === 'codispatch') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <Button text='Nom du client | 10:42' kind='view-tab' active='true' {...this.link ()} />
          <Button glyph='close' kind='view-tab' active='true' {...this.link ()} />
          <Button text='Nom du client | 10:30' kind='view-tab' active='false' {...this.link ()} />
          <Button glyph='close' kind='view-tab' active='false' {...this.link ()} />
          <Button text='Nom de la mission | 09:56' kind='view-tab' active='false' {...this.link ()} />
          <Button glyph='close' kind='view-tab' active='false' {...this.link ()} />
          <Container kind='view-tab-right' {...this.link ()} >
            <Button action={() => this.swapShowNotifications ()}
              text='Notifications' glyph='bell' glyph-position='right'
              badge-value='17' kind='view-tab-right' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.getStep () === 'fact') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <Button text='Fournisseurs' kind='view-tab' active='false' {...this.link ()} />
          <Button text='Commandes' kind='view-tab' active='false' {...this.link ()} />
          <Button text='Articles' kind='view-tab' active='false' {...this.link ()} />
          <Button text='Factures' kind='view-tab' active='true' {...this.link ()} />
          <Button text='Clients' kind='view-tab' active='false' {...this.link ()} />
        </Container>
      );
    } else {
      return (
        <Container kind='view-tab' {...this.link ()} >
        </Container>
      );
    }
  }

  footerWarning () {
    if (this.hasFooterWarning () === 'yes') {
      return (
        <Button glyph='close' text='Nom d´utilisateur ou mot de passe incorrect' kind='warning' glyph-position='right' {...this.link ()} />
      );
    } else {
      return null;
    }
  }

  view () {
    if (this.getStep () === 'login') {
      return this.viewLogin ();
    } else if (this.getStep () === 'logout') {
      return this.viewLogout ();
    } else if (this.getStep () === 'mandats') {
      return this.viewMandats ();
    } else if (this.getStep () === 'mandat-create') {
      return this.viewMandatCreate ();
    } else if (this.getStep () === 'dispatch-trips') {
      return this.viewDispatchTrips ();
    } else if (this.getStep () === 'dispatch-messengers') {
      return this.viewDispatchMessengers ();
    } else if (this.getStep () === 'codispatch') {
      return this.viewCodispatch ();
    } else if (this.getStep () === 'fact') {
      return this.viewFact ();
    } else if (this.getStep () === 'customers') {
      return this.viewCustomers ();
    } else if (this.getStep () === 'team') {
      return this.viewTeam ();
    } else if (this.getStep () === 'empty') {
      return this.viewEmpty ();
    } else {
      return this.viewComingSoon ();
    }
  }

  viewNotifications () {
    if (this.getShowNotifications ()) {
      return (
        <Notifications {...this.link ()} />
      );
    } else {
      return null;
    }
  }

  viewLogin () {
    return (
      <Container kind='div' {...this.link ()} >
        <Container kind='floating-header' floating-height='300px' {...this.link ()} >
          <Label glyph='user-secret' kind='floating-header' {...this.link ()} />
        </Container>
        <Container kind='floating' width='300px' height='300px' {...this.link ()} >
          <Container kind='row-pane' {...this.link ()} >
            <Label text='Identifiez-vous' grow='1' kind='big-center' {...this.link ()} />
          </Container>
          <Separator kind='space' height='30px' {...this.link ()} />
          <Container kind='row-pane' {...this.link ()} >
            <LabelTextField label-glyph='user' hint-text='Nom d´utilisateur' grow='1' {...this.link ()} />
          </Container>
          <Container kind='row-pane' {...this.link ()} >
            <LabelTextField label-glyph='lock' hint-text='Mot de passe' type='password' grow='1' {...this.link ()} />
          </Container>
          <Separator kind='space' height='50px' {...this.link ()} />
          <Container kind='row-pane' {...this.link ()} >
            <Button action={() => this.setStep ('mandats')} text='Se connecter' grow='1' kind='action' place='single' {...this.link ()} />
          </Container>
        </Container>
        <Container kind='floating-footer' height='100px' {...this.link ()} >
          <Separator width='300px' kind='floating-footer' {...this.link ()} />
          <Label text='Crésus — EPSITEC SA' kind='floating-footer' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  viewLogout () {
    return (
      <Container kind='div' {...this.link ()} >
        <Container kind='floating-header' floating-height='300px' {...this.link ()} >
          <Label glyph='user-secret' kind='floating-header' {...this.link ()} />
        </Container>
        <Container kind='floating' width='300px' height='300px' {...this.link ()} >
          <Container kind='row-pane' {...this.link ()} >
            <Label text='Déconnectez-vous' grow='1' kind='big-center' {...this.link ()} />
          </Container>
          <Separator kind='space' height='30px' {...this.link ()} />
          <Separator kind='space' height='50px' {...this.link ()} />
          <Container kind='row-pane' {...this.link ()} >
            <Button action={() => this.setStep ('login')} text='Se déconnecter' grow='1' kind='action' place='single' {...this.link ()} />
          </Container>
          <Container kind='row-pane' {...this.link ()} >
            <Button action={() => this.setStep ('codispatch')} text='Annuler' grow='1' kind='action' place='single' {...this.link ()} />
          </Container>
        </Container>
        <Container kind='floating-footer' height='100px' {...this.link ()} >
          <Separator width='300px' kind='floating-footer' {...this.link ()} />
          <Label text='Crésus — EPSITEC SA' kind='floating-footer' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  viewMandats () {
    return (
      <Container kind='floating' width='80vw' height='70vh' {...this.link ()} >
        <Container kind='views' {...this.link ()} >
          <Container kind='full-view' {...this.link ()} >

            <Container kind='pane-navigator' {...this.link ()} >
              <Label text='Liste des mandats' grow='1' kind='title' {...this.link ()} />
            </Container>

            <Container kind='panes' subkind='top-margin' {...this.link ()} >
              <Container kind='boxes' {...this.link ()} >
                <Button action={() => this.setStep ('mandat-create')} kind='box' width='200px' height='200px' {...this.link ()} >
                  <Container kind='box' subkind='dashed' {...this.link ()} >
                    <Label text='Créer un mandat' font-weight='bold' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Bouquet')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Bouquet')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Bouquet')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Bouquet' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Mon beau bouquet' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Vélocité')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Vélocité')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Vélocité')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Vélocité' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Vélocité Lausanne' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Cargo')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Cargo')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Cargo')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Cargo' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Cargo SA' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Pack')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Pack')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Pack')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Pack' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Pack-and-Fill SA' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Admin')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Admin')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Admin')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Admin' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Administration Renens' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
              </Container>
            </Container>

            <Container kind='actions' subkind='no-shadow' {...this.link ()} >
              <Button action={() => this.setStep ('codispatch')} glyph='check'  text='Ouvrir'    kind='action' width='160px' place='left' {...this.link ()} />
              <Button glyph='pencil' text='Modifier'  kind='action' width='160px' {...this.link ()} />
              <Button glyph='trash'  text='Supprimer' kind='action' width='160px' {...this.link ()} />
              <Button action={() => this.setStep ('logout')} glyph='close'  text='Annuler'   kind='action' width='160px' place='right' {...this.link ()} />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  viewMandatCreate () {
    return (
      <Container kind='floating' width='80vw' height='70vh' {...this.link ()} >
        <Container kind='views' {...this.link ()} >
          <Container kind='full-view' {...this.link ()} >

            <Container kind='pane-navigator' {...this.link ()} >
              <Label text='Création d´un nouveau mandat' grow='1' kind='title' {...this.link ()} />
            </Container>

            <Container kind='panes' subkind='top-margin' {...this.link ()} >
              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text='Décrivez ici votre nouveau mandat' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='file-image-o' hint-text='Logo' grow='1' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='tag' hint-text='Nom court du mandat' grow='1' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='comment' hint-text='Nom long du mandat' grow='1' {...this.link ()} />
                </Container>
              </Container>
            </Container>

            <Container kind='actions' subkind='no-shadow' {...this.link ()} >
              <Button action={() => {
                  this.setMandat ('Nouveau');
                  this.setStep ('codispatch');
                }} glyph='check'  text='Créer' kind='action' width='160px' place='left' {...this.link ()} />
              <Button action={() => this.setStep ('mandats')} glyph='close'  text='Annuler' kind='action' width='160px' place='right' {...this.link ()} />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  viewDispatchTrips () {
    return (
      <Container kind='views' {...this.link ()} >
        <DispatchTrips {...this.link ()} />
        {this.viewNotifications ()}
      </Container>
    );
  }

  viewDispatchMessengers () {
    return (
      <Container kind='views' {...this.link ()} >
        <DispatchMessengers {...this.link ()} />
        {this.viewNotifications ()}
      </Container>
    );
  }

  viewCodispatch () {
    return (
      <Container kind='views' {...this.link ()} >
        <Codispatch {...this.link ()} />
        {this.viewNotifications ()}
      </Container>
    );
  }

  viewFact () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='1000px' {...this.link ()} >
          <Container kind='panes' subkind='top-margin' {...this.link ()} >

            <Container kind='boxes' {...this.link ()} >
              <Ticket width='300px' height='90px' {...this.link ()} >
                <Container kind='column' grow='1' {...this.link ()} >
                  <Label text='125.30' font-weight='bold' {...this.link ()} />
                  <Label glyph='warning' {...this.link ()} />
                </Container>
                <Container kind='column' grow='3' {...this.link ()} >
                  <Label text='Jean Mayer' {...this.link ()} />
                  <Label text='1010 Lausanne' {...this.link ()} />
                </Container>
              </Ticket>
              <Ticket width='300px' height='90px' {...this.link ()} >
                <Container kind='column' grow='1' {...this.link ()} >
                  <Label text='2005.00' font-weight='bold' {...this.link ()} />
                  <Label glyph='warning' {...this.link ()} />
                </Container>
                <Container kind='column' grow='3' {...this.link ()} >
                  <Label text='Sandra Nicolet' {...this.link ()} />
                  <Label text='1023 Crissier' {...this.link ()} />
                </Container>
              </Ticket>
              <Ticket width='300px' height='90px' {...this.link ()} >
                <Container kind='column' grow='1' {...this.link ()} >
                  <Label text='175.00' font-weight='bold' {...this.link ()} />
                  <Label glyph='close' {...this.link ()} />
                </Container>
                <Container kind='column' grow='3' {...this.link ()} >
                  <Label text='Mecano SA' {...this.link ()} />
                  <Label text='1002 Lausanne' {...this.link ()} />
                </Container>
              </Ticket>
              <Ticket width='300px' height='90px' {...this.link ()} >
                <Container kind='column' grow='1' {...this.link ()} >
                  <Label text='300.75' font-weight='bold' {...this.link ()} />
                  <Label glyph='check' {...this.link ()} />
                </Container>
                <Container kind='column' grow='3' {...this.link ()} >
                  <Label text='Jean-Paul Herni' {...this.link ()} />
                  <Label text='1005 Lausanne' {...this.link ()} />
                </Container>
              </Ticket>
              <Ticket width='300px' height='90px' {...this.link ()} >
                <Container kind='column' grow='1' {...this.link ()} >
                  <Label text='37.90' font-weight='bold' {...this.link ()} />
                  <Label glyph='warning' {...this.link ()} />
                </Container>
                <Container kind='column' grow='3' {...this.link ()} >
                  <Label text='Factorum' {...this.link ()} />
                  <Label text='1020 Renens' {...this.link ()} />
                </Container>
              </Ticket>
            </Container>

          </Container>
          <Container kind='actions' {...this.link ()} >
            <Button glyph='arrow-up' text='Nouvelle facture' width='0px' grow='1'
              kind='action' place='left' {...this.link ()} />
            <Button glyph='pencil' text='Modifier' width='0px' grow='1'
              kind='action' place='middle' {...this.link ()} />
            <Button glyph='trash' text='Supprimer' width='0px' grow='1'
              kind='action' place='middle' {...this.link ()} />
            <Button glyph='check' text='Valider' width='0px' grow='1'
              kind='action' place='right' {...this.link ()} />
          </Container>
        </Container>
      </Container>
    );
  }

  viewCustomers () {
    return this.viewComingSoon ();
  }

  viewTeam () {
    return this.viewComingSoon ();
  }

  viewComingSoon () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='700px' {...this.link ()} >
          <Container kind='panes' subkind='top-margin' {...this.link ()} >

            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Crésus' grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Disponible prochainement...' grow='1' {...this.link ()} />
              </Container>
            </Container>

          </Container>
        </Container>
      </Container>
    );
  }

  viewEmpty () {
    return (
      <Container kind='views' {...this.link ()} />
    );
  }

  footer () {
    if (this.getStep () === 'login' || this.getStep () === 'logout') {
      return null;
    } else if (this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
    } else {
      return (
        <Container kind='footer' {...this.link ()} >
          {this.footerWarning ()}
          <Label text=' ' grow='1' kind='footer' {...this.link ()} />
          <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
        </Container>
      );
    }
  }

  dialog () {
    if (this.hasDialog () === 'yes') {
      return (
        <Dialog  width='500px' height='300px' {...this.link ()} >
          <Container kind='view' width='500px' {...this.link ()} >
            <Container kind='panes' subkind='top-margin' {...this.link ()} >

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text='Se connecter' grow='1' kind='title' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='user' hint-text='Nom d´utilisateur' grow='1' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='lock' hint-text='Mot de passe' grow='1' {...this.link ()} />
                </Container>
              </Container>

            </Container>

            <Container kind='actions' {...this.link ()} >
              <Button glyph='user' text='Se connecter' grow='1' kind='action' place='left' {...this.link ()} />
              <Button glyph='close' text='Annuler' grow='1' kind='action' place='right' {...this.link ()} />
            </Container>
          </Container>
        </Dialog>
      );
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

        {this.taskBar ()}

        <Container kind='right' {...this.link ()} >

          {this.mainTab ()}
          {this.viewTab ()}
          {this.view ()}
          {this.footer ()}

        </Container>

        {this.dialog ()}

      </Container>
    );
  }
}
