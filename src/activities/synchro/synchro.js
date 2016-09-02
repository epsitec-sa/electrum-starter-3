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

  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    return (
      <Container kind='root' {...this.link ()} >

        <Container kind='task' width='300px' {...this.link ()} >
          <Button action={act.NEXT ()} glyph='cloud' text='Crésus Synchro'
            kind='task-logo' {...this.link ()} />
          <Label text='Gestion des mandats' kind='task' {...this.link ()} />
          <Button text='Mettre à jour' glyph='refresh' tooltip='Met à jour la liste des mandats' kind='task-tab' {...this.link ()} />
          <Button text='Nouveau mandat' glyph='plus' tooltip='Crée un nouveau mandat' kind='task-tab' {...this.link ()} />
          <Button text='Utiliser un ticket' glyph='file' tooltip='Utilise un ticket pour se connecter à un autre mandat' kind='task-tab' {...this.link ()} />
          <Label text='Vos mandats' kind='task' {...this.link ()} />
          <TabButton text='Mon beau bouquet' kind='task' active='true' {...this.link ()} />
          <TabButton text='Chorale Fa-si-la chanter' kind='task' active='false' {...this.link ()} />
          <TabButton text='Club VTT' kind='task' active='false' {...this.link ()} />
        </Container>

        <Container kind='right' {...this.link ()} >

          <Container kind='main-tab' {...this.link ()} >
          </Container>

          <Container kind='views' {...this.link ()} >
          </Container>

          <Container kind='footer' {...this.link ()} >
          </Container>

        </Container>

      </Container>
    );
  }
}
