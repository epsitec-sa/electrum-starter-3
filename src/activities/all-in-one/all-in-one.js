'use strict';

import React from 'react';
import {
  Container,
  Dialog,
  Ticket,
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

export default class Synchro extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      currentStep: 'login',
      currentMandat: null,
    };
  }

  /******************************************************************************/
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
    return this.state.currentMandat;
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
    } else if (this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
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
          <Button glyph='plus-circle' text='TVA' kind='task' {...this.link ()} />
          <Button glyph='columns' text='Boucler' kind='task' {...this.link ()} />
          <Button glyph='search' text='Chercher' kind='task' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-plan') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={() => this.setStep ('mandats')}
            glyph={this.glyphMandat (this.getMandat ())}
            text={this.getMandat ()} text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='check' text='Vérifier' kind='task' {...this.link ()} />
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
          <Container kind='main-tab-login' {...this.link ()} >
            <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-login' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.getStep () === 'synchro') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Button text='Synchro' width='200px' active='true' kind='main-tab' {...this.link ()} />
          <Button text='Paiements' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button action={() => this.setStep ('compta-journal')} text='Comptabilité' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Facturations' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Salaires' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Container kind='main-tab-login' {...this.link ()} >
            <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-login' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.getStep () === 'compta-journal' || this.getStep () === 'compta-plan') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Button action={() => this.setStep ('synchro')} text='Synchro' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Paiements' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Comptabilité' width='200px' active='true' kind='main-tab' {...this.link ()} />
          <Button text='Facturations' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Salaires' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Container kind='main-tab-login' {...this.link ()} >
            <Button action={() => this.setStep ('logout')} text='Jean Dupond' kind='main-tab-login' {...this.link ()} />
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
    } else if (this.getStep () === 'synchro') {
      return (
        <Container kind='view-tab' {...this.link ()} >
        </Container>
      );
    } else if (this.getStep () === 'compta-journal') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <TabButton text='Ecritures' glyph='none' active='true' {...this.link ()} />
          <TabButton action={() => this.setStep ('compta-plan')} text='Plan comptable' glyph='none' active='false' {...this.link ()} />
          <TabButton text='Bilan' glyph='none' active='false' {...this.link ()} />
          <TabButton text='PP' glyph='none' active='false' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-plan') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <TabButton action={() => this.setStep ('compta-journal')} text='Ecritures' glyph='none' active='false' {...this.link ()} />
          <TabButton text='Plan comptable' glyph='none' active='true' {...this.link ()} />
          <TabButton text='Bilan' glyph='none' active='false' {...this.link ()} />
          <TabButton text='PP' glyph='none' active='false' {...this.link ()} />
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
    } else if (this.getStep () === 'synchro') {
      return this.viewSynchro ();
    } else if (this.getStep () === 'compta-journal') {
      return this.viewComptaJournal ();
    } else if (this.getStep () === 'compta-plan') {
      return this.viewComptaPlan ();
    }
  }

  viewLogin () {
    return (
      <div>
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
            <LabelTextField label-glyph='lock' hint-text='Mot de passe' grow='1' {...this.link ()} />
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
      </div>
    );
  }

  viewLogout () {
    return (
      <div>
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
            <Button action={() => this.setStep ('synchro')} text='Annuler' grow='1' kind='action' place='single' {...this.link ()} />
          </Container>
        </Container>
        <Container kind='floating-footer' height='100px' {...this.link ()} >
          <Separator width='300px' kind='floating-footer' {...this.link ()} />
          <Label text='Crésus — EPSITEC SA' kind='floating-footer' {...this.link ()} />
        </Container>
      </div>
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
              <Button action={() => this.setStep ('synchro')} glyph='check'  text='Ouvrir'    kind='action' width='160px' place='left' {...this.link ()} />
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
                  this.setStep ('synchro');
                }} glyph='check'  text='Créer'     kind='action' width='160px' place='left' {...this.link ()} />
              <Button action={() => this.setStep ('mandats')} glyph='close'  text='Annuler'   kind='action' width='160px' place='right' {...this.link ()} />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }

  viewSynchro () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='700px' {...this.link ()} >
          <Container kind='panes' subkind='top-margin' {...this.link ()} >

            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Dossiers partagés' grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='television' text='Machine CGU' grow='1' {...this.link ()} />
                <Button glyph='caret-up' border='none' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='folder' text='Mimi.cre' grow='1' {...this.link ()} />
                <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                <Button glyph='cloud-upload' tooltip='Détacher' border='none' {...this.link ()} />
                <Button glyph='exchange' tooltip='Migrer' border='none' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='folder' text='MimiSal_2016.salx' grow='1' {...this.link ()} />
                <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                <Button glyph='cloud-upload' tooltip='Détacher' border='none' {...this.link ()} />
                <Button glyph='exchange' tooltip='Migrer' border='none' {...this.link ()} />
              </Container>
            </Container>

            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Utilisateurs' grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='user' text='guidi@epsitec.ch' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label glyph='user' text='jean.dupond@bluewin.ch' grow='1' {...this.link ()} />
              </Container>
            </Container>

          </Container>
        </Container>
      </Container>
    );
  }

  viewComptaJournal () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='1000px' {...this.link ()} >
          <Container kind='panes' subkind='top-margin' {...this.link ()} >

            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Journal des écritures' grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Date' font-weight='bold' grow='1' {...this.link ()} />
                <Label text='Débit' font-weight='bold' grow='1' {...this.link ()} />
                <Label text='Crédit' font-weight='bold' grow='1' {...this.link ()} />
                <Label text='Pièce' font-weight='bold' grow='1' {...this.link ()} />
                <Label text='Libellé' font-weight='bold' grow='4' {...this.link ()} />
                <Label text='Somme' font-weight='bold' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <Label text='01.01.2016' grow='1' {...this.link ()} />
                <Label text='1010' grow='1' {...this.link ()} />
                <Label text='9010' grow='1' {...this.link ()} />
                <Label text='73' grow='1' {...this.link ()} />
                <Label text='Solde à nouveau' grow='4' {...this.link ()} />
                <Label text='12´004.00' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='01.01.2016' grow='1' {...this.link ()} />
                <Label text='1100' grow='1' {...this.link ()} />
                <Label text='9010' grow='1' {...this.link ()} />
                <Label text='74' grow='1' {...this.link ()} />
                <Label text='Solde à nouveau' grow='4' {...this.link ()} />
                <Label text='5´600.00' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='01.01.2016' grow='1' {...this.link ()} />
                <Label text='1120' grow='1' {...this.link ()} />
                <Label text='9010' grow='1' {...this.link ()} />
                <Label text='75' grow='1' {...this.link ()} />
                <Label text='Solde à nouveau' grow='4' {...this.link ()} />
                <Label text='20.10' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='01.01.2016' grow='1' {...this.link ()} />
                <Label text='2000' grow='1' {...this.link ()} />
                <Label text='9010' grow='1' {...this.link ()} />
                <Label text='76' grow='1' {...this.link ()} />
                <Label text='Solde à nouveau' grow='4' {...this.link ()} />
                <Label text='792.40' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='01.01.2016' grow='1' {...this.link ()} />
                <Label text='2100' grow='1' {...this.link ()} />
                <Label text='9010' grow='1' {...this.link ()} />
                <Label text='77' grow='1' {...this.link ()} />
                <Label text='Solde à nouveau' grow='4' {...this.link ()} />
                <Label text='1´702.05' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <Label text='14.01.2016' grow='1' {...this.link ()} />
                <Label text='1000' grow='1' {...this.link ()} />
                <Label text='1010' grow='1' {...this.link ()} />
                <Label text='79' grow='1' {...this.link ()} />
                <Label text='Virement janvier' grow='4' {...this.link ()} />
                <Label text='100.00' justify='right' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='28.01.2016' grow='1' {...this.link ()} />
                <Label text='1100' grow='1' {...this.link ()} />
                <Label text='2100' grow='1' {...this.link ()} />
                <Label text='80' grow='1' {...this.link ()} />
                <Label text='Loyer janvier locaux Blanpain' grow='4' {...this.link ()} />
                <Label text='2´300.00' justify='right' grow='1' {...this.link ()} />
              </Container>
            </Container>

          </Container>
          <Container kind='actions' {...this.link ()} >
            <Button glyph='arrow-up' text='Nouvelle écriture' width='0px' grow='1'
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

  viewComptaPlan () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='1000px' {...this.link ()} >
          <Container kind='panes' subkind='top-margin' {...this.link ()} >

            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Plan comptable' grow='1' kind='title' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='Numéro' font-weight='bold' grow='1' {...this.link ()} />
                <Label text='Titre' font-weight='bold' grow='4' {...this.link ()} />
                <Label text='Catégorie' font-weight='bold' grow='1' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <Label text='1000' grow='1' {...this.link ()} />
                <Label text='Caisse' grow='4' {...this.link ()} />
                <Label text='Actif' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='1010' grow='1' {...this.link ()} />
                <Label text='Banque BCV' grow='4' {...this.link ()} />
                <Label text='Actif' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='1020' grow='1' {...this.link ()} />
                <Label text='Banque UBS' grow='4' {...this.link ()} />
                <Label text='Actif' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='1030' grow='1' {...this.link ()} />
                <Label text='PostFinance' grow='4' {...this.link ()} />
                <Label text='Actif' grow='1' {...this.link ()} />
              </Container>
              <Separator {...this.link ()} />
              <Container kind='row-pane' {...this.link ()} >
                <Label text='2000' grow='1' {...this.link ()} />
                <Label text='Créanciers' grow='4' {...this.link ()} />
                <Label text='Passif' grow='1' {...this.link ()} />
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                <Label text='2100' grow='1' {...this.link ()} />
                <Label text='Immobilisations' grow='4' {...this.link ()} />
                <Label text='Passif' grow='1' {...this.link ()} />
              </Container>
            </Container>

          </Container>
          <Container kind='actions' {...this.link ()} >
            <Button glyph='arrow-up' text='Nouveau compte' width='0px' grow='1'
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

  footer () {
    if (this.getStep () === 'login' || this.getStep () === 'logout') {
      return null;
    } else if (this.getStep () === 'mandats' || this.getStep () === 'mandat-create') {
      return null;
    } else if (this.getStep () === 'compta-journal') {
      return (
        <Container kind='footer' {...this.link ()} >
          {this.footerWarning ()}
          <Label text='7 écritures' grow='1' kind='footer' {...this.link ()} />
          <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
        </Container>
      );
    } else if (this.getStep () === 'compta-plan') {
      return (
        <Container kind='footer' {...this.link ()} >
          {this.footerWarning ()}
          <Label text='152 comptes' grow='1' kind='footer' {...this.link ()} />
          <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
        </Container>
      );
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
