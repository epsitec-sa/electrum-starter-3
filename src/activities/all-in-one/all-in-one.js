'use strict';

import React from 'react';
import {
  Container,
  Footer,
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
  Notification,
  DispatchTrips,
  DispatchMessengers,
  Router,
  Route,
  View
} from 'electrum-arc';
import {
  Codispatch
} from '../../all-components.js';

import act from './actuators.js';

export default class AllInOne extends React.Component {

  constructor (props) {
    super (props);

    this.notificationNumber = 1;
    this.notificationGeneration = 0;

    const notifications = [
      {
        Glyph:   {Glyph: 'bicycle'},
        Color:   'base',
        Message: 'Migros Pont-Neuf — Lausanne\\nDupond J. — Renens',
      },
      {
        Glyph:   {Glyph: 'warning'},
        Color:   'primary',
        Message: 'Frédérique est absent cet après-midi.',
      },
      {
        Glyph:   {Glyph: 'car'},
        Color:   'success',
        Message: 'Coop St- Laurent — Lausanne\\nNicoud S. — Lausanne',
      },
      {
        Glyph:   {Glyph: 'bicycle'},
        Color:   'secondary',
        Message: 'Icomm — Crissier\\nSchmidt H. — Prilly',
      },
      {
        Glyph:   {Glyph: 'bicycle'},
        Color:   'base',
        Message: 'Gare CFF — Lausanne\\nPolyaugrien — Lausanne',
      },
      {
        Glyph:   {Glyph: 'bicycle'},
        Color:   'base',
        Message: 'Migros Pont-Neuf — Lausanne\\nAndré B. — Pully',
        Status:  'not-read',
      },
      {
        Glyph:   {Glyph: 'warning'},
        Color:   'primary',
        Message: 'La livraison n\'est pas possible en raison de travaux à Lausanne, rue du Midi, du 12.10.2016 au 25.10.2016.\\n' +
                 'Il faut accéder par la rue du Centre puis faire les derniers mètres à pied.',
        Status:  'not-read',
      },
    ];
    this.state = {
      // currentStep: 'login',
      currentStep: 'codispatch',
      currentMandat: null,
      showNotifications: false,
      notifications: notifications,
      notificationGeneration: this.notificationGeneration++,
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

  addNotification () {
    let n = {
      Glyph:   {Glyph: 'rocket'},
      Color:   'base',
      Message: 'Nouveau message numéro ' + this.notificationNumber++,
      Status:  'not-read',
    };
    this.getNotifications ().push (n);
    this.nextGenerationNotification ();
    this.setShowNotifications (true);
  }

  subNotification () {
    this.getNotifications ().pop ();
    this.nextGenerationNotification ();
  }

  getNotReadNotificationsCount () {
    let count = 0;
    this.getNotifications ().forEach (n => {
      if (n.Status === 'not-read') {
        count++;
      }
    });
    return count;
  }

  swapShowNotifications () {
    this.setShowNotifications (!this.getShowNotifications ());
  }

  getShowNotifications () {
    return this.state.showNotifications;
  }

  setShowNotifications (show) {
    this.getNotifications ().forEach (n => {
      if (!show) {
        n.Status = 'read';
      }
    });
    this.setState ( {
      showNotifications: show,
    });
    this.nextGenerationNotification ();
  }

  getNotifications () {
    return this.state.notifications;
  }

  nextGenerationNotification () {
    this.setState ( {
      notificationGeneration: this.notificationGeneration++
    });
  }

  activeMandat (name) {
    return (this.getMandat () === name) ? 'true' : 'false';
  }

  glyphMandat (name) {
    const x = {
      Nouveau:   'diamond',
      Genève:    'tree',
      Lausanne:  'bicycle',
      Yverdon:   'truck',
      Neuchâtel: 'rocket',
      Berne:     'cube',
      Zurich:    'institution',
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

  mandatZone () {
    if (this.getStep () === 'login' ||
        this.getStep () === 'logout' ||
        this.getStep () === 'mandats' ||
        this.getStep () === 'mandat-create') {
      return null;
    } else {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
        </Container>
      );
    }
  }

  taskBar () {
    if (this.getStep () === 'login' || this.getStep () === 'logout' || this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
    } else if (this.getStep () === 'dispatch-trips' ||
               this.getStep () === 'dispatch-messengers') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='clock-o' text='Missions'
            kind='task-bar' badge-value='54' {...this.link ()} />
          <Button glyph='inbox' text='Desk'
            kind='task-bar' badge-value='2' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'codispatch') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='plus-square' text='Activité'
            kind='task-bar' badge-value='27' {...this.link ()} />
          <Button glyph='inbox' text='En cours'
            kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'synchro') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='refresh' text='Synchroniser' tooltip='Synchroniser tous les mandats' kind='task-bar' {...this.link ()} />
          <Button glyph='link' text='Se rattacher' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task-bar' {...this.link ()} />
          <Button glyph='cloud-download' text='Attacher' tooltip='Attacher un fichier' kind='task-bar' {...this.link ()} />
          <Button glyph='share-alt' text='Partager' tooltip='Partager le mandat au moyen d´un ticket' kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-journal') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='search' text='Chercher' kind='task-bar' {...this.link ()} />
          <Button glyph='plus-circle' text='TVA' kind='task-bar' {...this.link ()} />
          <Button glyph='columns' text='Boucler' kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-plan') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='search' text='Chercher' kind='task-bar' {...this.link ()} />
          <Button glyph='check' text='Vérifier' kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'fact') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='search' text='Chercher' kind='task-bar' {...this.link ()} />
          <Button glyph='print' text='Imprimer' kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'sal') {
      return (
        <Container kind='task-bar' {...this.link ()} >
          <Button glyph='euro' text='Faire' kind='task-bar' {...this.link ()} />
        </Container>
      );
    } else {
      return (
        <Container kind='task-bar' {...this.link ()} >
        </Container>
      );
    }
  }

  mainTab () {
    if (this.getStep () === 'login' ||
        this.getStep () === 'logout') {
      return null;
    } else if (this.getStep () === 'mandats' ||
               this.getStep () === 'mandat-create') {
      return (
        <Container kind='main-tab' {...this.link ()} >
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
            text='Vide' width='200px' kind='main-tab' {...this.link ()} />
        </Container>
      );
    }
  }

  loginZone () {
    if (this.getStep () === 'login' ||
        this.getStep () === 'logout') {
      return null;
    } else {
      return (
        <Container kind='main-tab-right' {...this.link ()} >
          <Button action={act.NEXT ()} glyph='tv' kind='main-tab-right' {...this.link ()} />
          <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-right' {...this.link ()} />
        </Container>
      );
    }
  }

  viewTab () {
    if (this.getStep () === 'dispatch-trips' || this.getStep () === 'dispatch-messengers') {
      return (
        <Router kind='view-tab' name='dispo' active='missions' {...this.link ()} >
          <Route name='missions' text='Missions' kind='view-tab' {...this.link ()} />
          <Route name='roadbooks' text='Coursiers' kind='view-tab' {...this.link ()} />
        </Router>
      );
    } else if (this.getStep () === 'codispatch') {
      return (
        <Router kind='view-tab' name='codispo' active='1' {...this.link ()} >
          <Route name='1' text='Nom du client | 10:42' kind='view-tab' closable='true' {...this.link ()} />
          <Route name='2' text='Nom du client | 10:30' kind='view-tab' closable='true' {...this.link ()} />
          <Route name='3' text='Nom de la mission | 09:56' kind='view-tab' closable='true' {...this.link ()} />
        </Router>
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
      return null;
    }
  }

  notificationsZone() {
    if (this.getStep () === 'login' ||
        this.getStep () === 'logout') {
      return null;
    } else {
      return (
        <Container kind='view-tab-right' {...this.link ()} >
          <Button action={() => this.addNotification ()}
            glyph='plus' kind='view-tab-right' {...this.link ()} />
          <Button action={() => this.subNotification ()}
            glyph='minus' kind='view-tab-right' spacing='large' {...this.link ()} />
          <Button action={() => this.swapShowNotifications ()}
            text='Notifications' glyph='bell' glyph-position='right'
            badge-value={this.getNotReadNotificationsCount ()} kind='view-tab-right' {...this.link ()} />
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
    } else if (this.getStep () === 'dispatch-trips' ||
               this.getStep () === 'dispatch-messengers' ||
               this.getStep () === 'codispatch') {
      return this.viewAll ();
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
                    <Label text='Ajouter un mandat' font-weight='bold' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Genève')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Genève')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Genève')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Genève' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Vélocité Genève' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Lausanne')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Lausanne')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Lausanne')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Lausanne' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Vélocité Lausanne' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Yverdon')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Yverdon')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Yverdon')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Yverdon' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Vélocité Yverdon' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Neuchâtel')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Neuchâtel')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Neuchâtel')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Neuchâtel' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Vélocité Neuchâtel' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Berne')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Berne')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Berne')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Berne' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Eco-Berne' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
                <Button action={() => this.setMandat ('Zurich')} kind='box' width='200px' height='200px'
                  active={this.activeMandat ('Zurich')} {...this.link ()} >
                  <Container kind='box' {...this.link ()} >
                    <Label glyph={this.glyphMandat ('Zurich')} glyph-size='300%' kind='center-to-box' row='1' {...this.link ()} />
                    <Label text='Zurich' font-weight='bold' kind='center-to-box' {...this.link ()} />
                    <Separator {...this.link ()} />
                    <Label text='Zurich Transport AG' kind='center-to-box' {...this.link ()} />
                  </Container>
                </Button>
              </Container>
            </Container>

            <Container kind='actions' subkind='no-shadow' {...this.link ()} >
              <Button action={() => this.setStep ('codispatch')} glyph='check'  text='Ouvrir'    kind='action' width='160px' place='left' {...this.link ()} />
              <Button glyph='pencil' text='Modifier'  kind='action' width='160px' {...this.link ()} />
              <Button glyph='trash'  text='Cacher' kind='action' width='160px' {...this.link ()} />
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

  viewAll () {
    const result = [];
    let index = 0;
    result.push (this.viewDispatchTrips (index++));
    result.push (this.viewDispatchMessengers (index++));
    result.push (this.viewCodispatch (index++));
    return result;
  }

  viewDispatchTrips (index) {
    return (
      <View key={index} kind='views' router='dispo' route='missions' {...this.link ()} >
        <DispatchTrips {...this.link ()} />
      </View>
    );
  }

  viewDispatchMessengers (index) {
    return (
      <View key={index} kind='views' router='dispo' route='roadbooks' {...this.link ()} >
        <DispatchMessengers {...this.link ()} />
      </View>
    );
  }

  viewCodispatch (index) {
    return (
      <View key={index} kind='views' router='codispo' route='1' {...this.link ()} >
        <Codispatch {...this.link ()} />
      </View>
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
                <Label text='Polyphème' grow='1' kind='title' {...this.link ()} />
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

  viewNotifications () {
    return (
      <Notifications
        data={this.getNotifications ()}
        show={this.getShowNotifications ()}
        generation={this.notificationGeneration}
        {...this.link ()} />
    );
  }

  viewEmpty () {
    return null;
  }

  footer () {
    if (this.getStep () === 'login' || this.getStep () === 'logout') {
      return null;
    } else if (this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
    } else {
      return (
        <Footer {...this.link ()} >
          {this.footerWarning ()}
          <Label text=' ' grow='1' kind='footer' {...this.link ()} />
          <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
        </Footer>
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

        <Container kind='left-bar' {...this.link ()} >
          {this.mandatZone ()}
          {this.taskBar ()}
        </Container>

        <Container kind='right' {...this.link ()} >
          <Container kind='content' {...this.link ()} >
            <Container kind='top-bar' {...this.link ()} >
              {this.mainTab ()}
              {this.loginZone ()}
            </Container>
            <Container kind='second-bar' {...this.link ()} >
              {this.viewTab ()}
              {this.notificationsZone ()}
            </Container>
            {this.view ()}
          </Container>
          {this.footer ()}
          {this.viewNotifications ()}
        </Container>

        {this.dialog ()}

      </Container>
    );
  }
}
