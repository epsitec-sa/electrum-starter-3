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
      open: false,
    };
  }

  /******************************************************************************/
  step () {
    // return 'login';
    // return 'mandat';
    return 'work';
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
    if (this.step () === 'login') {
      return (
        <Container kind='task' {...this.link ()} >
        </Container>
      );
    } else if (this.step () === 'mandat') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={act.NEXT ()} glyph='file' text='Mandats' text-transform='none'
            kind='task-logo' active='true' {...this.link ()} />
        </Container>
      );
    } else if (this.step () === 'work') {
      return (
        <Container kind='task' {...this.link ()} >
          <Button action={act.NEXT ()} glyph='tree' text='Bouquet' text-transform='none'
            tooltip='Changer de mandat' kind='task-logo' {...this.link ()} />
          <Button glyph='refresh' text='Synchroniser' tooltip='Synchroniser tous les mandats' kind='task' {...this.link ()} />
          <Button glyph='link' text='Se rattacher' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task' {...this.link ()} />
          <Button glyph='cloud-download' text='Attacher' tooltip='Attacher un fichier' kind='task' {...this.link ()} />
          <Button glyph='share-alt' text='Partager' tooltip='Partager le mandat au moyen d´un ticket' kind='task' {...this.link ()} />
        </Container>
      );
    }
  }

  mainTab () {
    if (this.step () === 'login') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Container kind='main-tab-login' {...this.link ()} >
            <Button text='Se connecter' kind='main-tab-login' active='true' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.step () === 'mandat') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Container kind='main-tab-login' {...this.link ()} >
            <Button text='Jean Dupond' kind='main-tab-login' {...this.link ()} />
          </Container>
        </Container>
      );
    } else if (this.step () === 'work') {
      return (
        <Container kind='main-tab' {...this.link ()} >
          <Button text='Synchro' width='200px' active='true' kind='main-tab' {...this.link ()} />
          <Button text='Paiements' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Comptabilité' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Facturations' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Button text='Salaires' width='200px' active='false' kind='main-tab' {...this.link ()} />
          <Container kind='main-tab-login' {...this.link ()} >
            <Button text='Jean Dupond' kind='main-tab-login' {...this.link ()} />
          </Container>
        </Container>
      );
    }
  }

  viewTab () {
    if (this.step () === 'login') {
      return (
        <Container kind='view-tab' {...this.link ()} >
        </Container>
      );
    } else if (this.step () === 'mandat') {
      return (
        <Container kind='view-tab' {...this.link ()} >
          <TabButton text='Choix d´un mandat' glyph='none' active='true' {...this.link ()} />
          <TabButton text='Création d´un mandat' glyph='none' active='false' {...this.link ()} />
        </Container>
      );
    } else if (this.step () === 'work') {
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
    if (this.step () === 'login') {
      return this.viewLogin ();
    } else if (this.step () === 'mandat') {
      return this.viewMandat ();
    } else if (this.step () === 'work') {
      return this.viewWork ();
    }
  }

  viewLogin () {
    return (
      <Container kind='view' width='500px' {...this.link ()} >
        <Container kind='panes' subkind='top-margin' {...this.link ()} >

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Identifiez-vous' grow='1' kind='title' {...this.link ()} />
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
          <Button glyph='play' text='Se connecter' grow='1' kind='action' place='left' {...this.link ()} />
          <Button glyph='stop' text='Se déconnecter' grow='1' kind='action' place='right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  viewMandat () {
    return (
      <Container kind='view' width='700px' {...this.link ()} >
        <Container kind='panes' subkind='top-margin' {...this.link ()} >

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Liste des mandats' grow='1' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='tree' text='Mon beau bouquet' grow='1' {...this.link ()} />
              <Button glyph='ellipsis-v' border='none' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='bicycle' text='Vélocité' grow='1' {...this.link ()} />
              <Button glyph='ellipsis-v' border='none' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='truck' text='Cargo SA' grow='1' {...this.link ()} />
              <Button glyph='ellipsis-v' border='none' {...this.link ()} />
            </Container>
          </Container>

        </Container>

        <Container kind='actions' {...this.link ()} >
          <Button glyph='check' text='Ouvrir' grow='1' kind='action' place='left' {...this.link ()} />
          <Button glyph='close' text='Annuler' grow='1' kind='action' place='right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  viewWork () {
    return (
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
    );
  }

  viewCreate () {
    return (
      <Container kind='view' width='700px' {...this.link ()} >
        <Container kind='panes' subkind='top-margin' {...this.link ()} >

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Utilisez un nom descriptif afin d´identifier clairement votre mandat' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='tag' hint-text='Nom du mandat' grow='1'
                spacing='large'  {...this.link ()} />
              <Button text='Publier' {...this.link ()} />
            </Container>
          </Container>

        </Container>
      </Container>
    );
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

          <Container kind='views' {...this.link ()} >
            {this.view ()}
          </Container>

          <Container kind='footer' {...this.link ()} >
            {this.footerWarning ()}
            <Label text=' ' grow='1' kind='footer' {...this.link ()} />
            <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
          </Container>

        </Container>

        {this.dialog ()}

      </Container>
    );
  }
}
