// Co-dispatch view. 1234
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
  Separator,
  Ticket
} from 'electrum-arc';

export default class Dispatch extends React.Component {

  constructor (props) {
    super (props);
  }

  runnerHeight = '70px';
  ticketHeight = '90px';
  ticketWidth  = '220px';

  getRunner (photo, transportation, name, total) {
    return (
      <Ticket kind='header' width={this.ticketWidth} height={this.runnerHeight} {...this.link ()} >
        <Container kind='column' grow='2' {...this.link ()} >
          <Button glyph={photo} kind='identity' {...this.link ()} />
        </Container>
        <Container kind='column' grow='1' {...this.link ()} >
          <Label glyph={transportation} glyph-size='150%' {...this.link ()} />
        </Container>
        <Container kind='column' grow='3' {...this.link ()} >
          <Label text={name} font-weight='bold' text-color='#fff' {...this.link ()} />
          <Label text={total} font-weight='bold' text-color='#fff' {...this.link ()} />
        </Container>
      </Ticket>
    );
  }

  getRun (type, pickTime, pickDesc, dropTime, dropDesc, count, glyphs) {
    const pickWeight = (type === 'pick') ? 'bold' : 'normal';
    const dropWeight = (type === 'drop') ? 'bold' : 'normal';
    const direction  = (type === 'pick') ? 'upload' : 'download';
    return (
      <Ticket width={this.ticketWidth} height={this.ticketHeight} {...this.link ()} >
        <Container kind='column' grow='1' {...this.link ()} >
          <Label text={pickTime} font-weight={pickWeight} {...this.link ()} />
          <Label text={dropTime} font-weight={dropWeight} {...this.link ()} />
          <Label glyph={direction} {...this.link ()} />
        </Container>
        <Container kind='column' grow='3' {...this.link ()} >
          <Label text={pickDesc} font-weight={pickWeight} {...this.link ()} />
          <Label text={dropDesc} font-weight={dropWeight} {...this.link ()} />
          <Container kind='row' {...this.link ()} >
            <Label glyph='cube' spacing='compact' {...this.link ()} />
            <Label text={count + 'x'} grow='1' {...this.link ()} />
            <Label glyph={glyphs} spacing='compact' {...this.link ()} />
            <Label glyph='bookmark' glyph-color='#f00' spacing='compact' {...this.link ()} />
            <Label glyph='bookmark' glyph-color='#ffd600' spacing='compact' {...this.link ()} />
          </Container>
        </Container>
      </Ticket>
    );
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >

        <Container kind='view' {...this.link ()} >
          <Container kind='tickets' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Sandra', '203.50')}
            {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, 'warning')}
            {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
            {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    3, 'warning')}
            {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   1, 'warning')}
            {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Stouder AG',   1, 'warning')}
          </Container>
        </Container>

        <Container kind='view' {...this.link ()} >
          <Container kind='tickets' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Jean-Paul', '68.00')}
            {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
            {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   1, 'warning')}
            {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Stouder AG',   4, 'warning')}
          </Container>
        </Container>

        <Container kind='view' {...this.link ()} >
          <Container kind='tickets' {...this.link ()} >
            {this.getRunner ('user-secret', 'car', 'Frédérique', '250.00')}
            {this.getRun ('pick', '10:15', 'Coop St. Laurent', '10:55', 'Dupond J.',    1, 'warning')}
            {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, 'warning')}
            {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
            {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    1, 'warning')}
            {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   2, 'warning')}
            {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Stouder AG',   1, 'warning')}
          </Container>
        </Container>

      </Container>
    );
  }
}
