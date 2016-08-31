// Mock for a typical co-dispatch screen.
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
          <Button action={act.NEXT ()} glyph='cube' text='Poly' kind='task-logo' {...this.link ()} />
          <Button glyph='plus-square' text='Activité' kind='task' badge-value='27' {...this.link ()} />
          <Button glyph='inbox' text='En cours' kind='task' {...this.link ()} />
        </Container>

        <Container kind='right' {...this.link ()} >

          <Container kind='main-tab' {...this.link ()} >
            <Button text='Dispo' width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Co-dispo' width='160px' active='true' kind='main-tab' {...this.link ()} />
            <Button text='Facturation' width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Clients' width='160px' active='false' kind='main-tab' {...this.link ()} />
            <Button text='Équipe' width='160px' active='false' kind='main-tab' {...this.link ()} />
          </Container>

          <Container kind='view-tab' {...this.link ()} >
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
