// Mock for a typical co-dispatch screen.
'use strict';

import React from 'react';
import {
  Container,
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
          <Button glyph='cube' text='Poly' kind='task-logo' {...this.link ()} />
          <Button glyph='plus-square' text='Activité' kind='task' badge-value='27' {...this.link ()} />
          <Button glyph='inbox' text='En cours' kind='task' {...this.link ()} />
        </Container>

      </Container>
    );
  }
}
