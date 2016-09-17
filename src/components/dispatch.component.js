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

  getGlyph (glyph) {
    if (glyph.startsWith ('bookmark-')) {
      const color = glyph.substring (9);
      return (
        <Label glyph='bookmark' glyph-color={color} spacing='compact' {...this.link ()} />
      );
    } else {
      return (
        <Label glyph={glyph} spacing='compact' {...this.link ()} />
      );
    }
  }

  getGlyphs (glyphs) {
    if (glyphs === null) {
      return null;
    } else if (typeof (glyphs) === 'string') {
      return this.getGlyph (glyphs);
    } else {
      let line = [];
      glyphs.forEach (glyph => {
        line.push (this.getGlyph (glyph));
      });
      return line;
    }
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
            {this.getGlyphs (glyphs)}
          </Container>
        </Container>
      </Ticket>
    );
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <Container kind='tickets-runners' {...this.link ()} >

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Sandra', '203.50')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, 'warning')}
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, ['warning', 'bookmark-base'])}
              {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    3, 'warning')}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   1, null)}
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    1, ['bookmark-secondary', 'bookmark-primary'])}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Jean-Paul', '68.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   1, ['warning', 'bookmark-base', 'bookmark-secondary', 'bookmark-primary'])}
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user-secret', 'car', 'Frédérique', '250.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('pick', '10:15', 'Coop St. Laurent', '10:55', 'Dupond J.',    1, ['bookmark-primary'])}
              {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, null)}
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, ['warning', 'bookmark-secondary'])}
              {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    1, 'warning')}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   2, null)}
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    1, null)}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Marcel', '0.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'truck', 'Simone', '100.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Jean-Louis', '400.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, ['bookmark-primary'])}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Chantal', '95.20')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, null)}
              {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    1, null)}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   2, ['bookmark-base', 'bookmark-secondary'])}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Béatrice', '20.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'rocket', 'Zoé', '0.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Marc', '0.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '08:30', 'Icomm',            '09:15', 'Studer AG',    4, ['bookmark-secondary'])}
              {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, null)}
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, null)}
              {this.getRun ('drop', '11:20', 'PolyAugrien',      '11:45', 'Burdet A.',    3, 'warning')}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   1, ['bookmark-base', 'bookmark-primary'])}
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    1, ['warning', 'bookmark-base', 'bookmark-secondary'])}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Victor', '630.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'car', 'Jacques', '0.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
              {this.getRun ('pick', '10:50', 'Coop St. Laurent', '11:20', 'Dupond J.',    2, ['warning', 'bookmark-primary'])}
              {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'car', 'Samuel', '0.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
              {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   2, ['bookmark-base', 'bookmark-secondary', 'bookmark-primary'])}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Georges', '50.00')}
            <Container kind='tickets' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
            </Container>
          </Container>

          <Container kind='tickets-runner' {...this.link ()} >
            {this.getRunner ('user', 'bicycle', 'Francine', '68.00')}
            <Container kind='tickets-runs' {...this.link ()} >
              {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, 'warning')}
            </Container>
          </Container>

        </Container>

        <Container kind='tickets-basket' height='180px' {...this.link ()} >
          <Container kind='tickets-glue' {...this.link ()} >
            {this.getRun ('drop', '13:30', 'Icomm',            '14:15', 'Studer AG',    4, null)}
          </Container>
          <Container kind='tickets-glue' {...this.link ()} >
            {this.getRun ('pick', '11:45', 'Me Mouquin G.',    '13:00', 'Schmidt W.',   2, ['bookmark-base', 'bookmark-secondary', 'bookmark-primary'])}
          </Container>
          <Container kind='tickets-glue' {...this.link ()} >
            {this.getRun ('drop', '11:00', 'Migros Pont-Neuf', '11:15', 'Chancellerie', 1, 'warning')}
          </Container>
        </Container>
      </Container>
    );
  }
}
