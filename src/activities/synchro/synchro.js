'use strict';

import React from 'react';
import {
  Container,
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

  uiType () {
    // return 'synchro';
    return 'polypheme';
  }

  task () {
    if (this.uiType () === 'synchro') {
      return this.synchroTask ();
    } else {
      return this.polyphemeTask ();
    }
  }

  mainTab () {
    if (this.uiType () === 'synchro') {
      return this.synchroMainTab ();
    } else {
      return this.polyphemeMainTab ();
    }
  }

  viewTab () {
    if (this.uiType () === 'synchro') {
      return this.synchroViewTab ();
    } else {
      return this.polyphemeViewTab ();
    }
  }

  synchroTask () {
    return (
      <Container kind='task' width='300px' {...this.link ()} >
        <Button action={act.NEXT ()} glyph='cloud' text='Crésus Synchro'
          kind='task-logo' {...this.link ()} />
        <Label text='Gestion des mandats' kind='task' {...this.link ()} />
        <Button text='Synchroniser' glyph='refresh' tooltip='Synchroniser tous les mandats' kind='task-tab' {...this.link ()} />
        <Button text='Créer un mandat' glyph='plus' tooltip='Crée un nouveau mandat' kind='task-tab' {...this.link ()} />
        <Button text='Se rattacher à un mandat' glyph='file' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task-tab' {...this.link ()} />
        <Label text='Vos mandats' kind='task' {...this.link ()} />
        <TabButton text='Mon beau bouquet' kind='task' active='true' {...this.link ()} />
        <TabButton text='Chorale Fa-si-la chanter' kind='task' active='false' {...this.link ()} />
        <TabButton text='Club VTT' kind='task' active='false' {...this.link ()} />
      </Container>
    );
  }

  polyphemeTask () {
    return (
      <Container kind='task' width='250px' {...this.link ()} >
        <Button action={act.NEXT ()} glyph='cloud' text='Crésus Synchro'
          kind='task-logo' {...this.link ()} />
        <Button text='Synchroniser' glyph='refresh' tooltip='Synchroniser tous les mandats' kind='task-tab' {...this.link ()} />
        <Button text='Créer un mandat' glyph='plus' tooltip='Crée un nouveau mandat' kind='task-tab' {...this.link ()} />
        <Button text='Se rattacher à un mandat' glyph='file' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task-tab' {...this.link ()} />
      </Container>
    );
  }

  synchroMainTab () {
    return (
      <Container kind='main-tab' {...this.link ()} >
      </Container>
    );
  }

  polyphemeMainTab () {
    return (
      <Container kind='main-tab' {...this.link ()} >
        <Button text='Mandats' width='200px' active='true' kind='main-tab' {...this.link ()} />
      </Container>
    );
  }

  synchroViewTab () {
    return null;
  }

  polyphemeViewTab () {
    return (
      <Container kind='view-tab' {...this.link ()} >
        <TabButton text='Mon beau bouquet' active='true' {...this.link ()} />
        <TabButton text='Chorale Fa-si-la chanter' active='false' {...this.link ()} />
        <TabButton text='Club VTT' active='false' {...this.link ()} />
      </Container>
    );
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

        {this.task ()}

        <Container kind='right' {...this.link ()} >

          {this.mainTab ()}
          {this.viewTab ()}

          <Container kind='views' {...this.link ()} >
            <Container kind='view' width='700px' {...this.link ()} >

              <Container kind='pane-navigator' {...this.link ()} >
                <Button text='Machine CGU' width='0px' grow='1' active='true'  kind='pane-navigator' {...this.link ()} />
                <Button text='Machine Dupond' width='0px' grow='1' active='false'  kind='pane-navigator' {...this.link ()} />
                <Button text='Utilisateurs' width='0px' grow='1' active='false' kind='pane-navigator' {...this.link ()} />
              </Container>

              <Container kind='panes' {...this.link ()} >

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Machine CGU' grow='1' kind='title' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='folder' text='Mimi.cre' grow='1' {...this.link ()} />
                    <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                    <Button glyph='ellipsis-v' border='none' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='folder' text='MimiSal_2016.salx' grow='1' {...this.link ()} />
                    <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                    <Button glyph='ellipsis-v' border='none' {...this.link ()} />
                  </Container>
                </Container>

                <Container kind='pane' {...this.link ()} >
                  <Container kind='row-pane' {...this.link ()} >
                    <Label text='Machine Dupond' grow='1' kind='title' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='folder' text='Fidu.cre' grow='1' {...this.link ()} />
                    <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                    <Button glyph='ellipsis-v' border='none' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='folder' text='Fidu_2016.salx' grow='1' {...this.link ()} />
                    <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                    <Button glyph='ellipsis-v' border='none' {...this.link ()} />
                  </Container>
                  <Container kind='row-pane' {...this.link ()} >
                    <Label glyph='folder' text='Fidu.fac' grow='1' {...this.link ()} />
                    <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
                    <Button glyph='ellipsis-v' border='none' {...this.link ()} />
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

                <Container kind='actions' {...this.link ()} >
                  <Button glyph='link' text='Attacher' width='0px' grow='1' kind='action' place='left' {...this.link ()} />
                  <Button glyph='save' text='Enregistrer ticket' width='0px' grow='1' kind='action' place='right' {...this.link ()} />
                </Container>

            </Container>
          </Container>

          <Container kind='footer' {...this.link ()} >
          </Container>

        </Container>

      </Container>
    );
  }
}
