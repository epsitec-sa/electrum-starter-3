'use strict';

import React from 'react';
import {
  Container,
  TripBox,
  TextFieldCombo
} from 'electrum-arc';

export default class DispatchTrips extends React.Component {

  constructor (props) {
    super (props);
  }

  getTrip (selected, data) {
    return (
      <TripBox selected={selected} data={data} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='700px' {...this.link ()} >

          <Container kind='pane-top' {...this.link ()} >
            <TextFieldCombo hint-text='Date' combo-glyph='calendar'
              grow='1' spacing='large' combo-type='calendar'
              combo-direction='right' flying-balloon-anchor='bottom'
              {...this.link ('exp-date')} />
            <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
              grow='1' spacing='large' combo-type='clock'
              flying-balloon-anchor='right' {...this.link ('exp-time')} />
            <TextFieldCombo shape='rounded' hint-text='Chercher'
              grow='2' combo-glyph='Search' {...this.link ()} />
          </Container>

          <Container kind='panes' {...this.link ()} >
            <Container kind='pane' {...this.link ()} >
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '10:50',
                    desc:    'Coop St. Laurent',
                    zone:    'Zone A',
                    glyphs:  ['phone-square', 'bookmark-secondary']},
                  drop: {
                    time:    '11:20',
                    desc:    'Dupond J.',
                    zone:    'Zone C',
                    glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                  count:       '2 pces',
                  weight:      '1.3 kg',
                  price:       '100.00',
                  priceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '11:00',
                    desc:    'Migros Plein-Palais',
                    zone:    'Zone B',
                    glyphs:  ['bookmark-base']},
                  drop: {
                    time:    '11:35',
                    desc:    'Alfred D.',
                    zone:    'Zone B',
                    glyphs:  ['bookmark-base', 'bookmark-primary']},
                  count:       '1 pce',
                  weight:      '0.2 kg',
                  price:       '30.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip ('true', {
                  pick: {
                    time:    '11:15',
                    desc:    'Icomm',
                    zone:    'Zone B',
                    glyphs:  null},
                  drop: {
                    time:    '12:00',
                    desc:    'Studer AG',
                    zone:    'Zone A',
                    glyphs:  null},
                  count:       '2 pces',
                  weight:      '1.2 kg',
                  price:       '130.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '11:45',
                    desc:    'Burder A.',
                    zone:    'Zone B',
                    glyphs:  null},
                  drop: {
                    time:    '13:15',
                    desc:    'PolyAugrien',
                    zone:    'Zone A',
                    glyphs:  null},
                  count:       '2 pces',
                  weight:      '1.2 kg',
                  price:       '130.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '14:00',
                    desc:    'Coop St. Laurent',
                    zone:    'Zone A',
                    glyphs:  ['bookmark-secondary']},
                  drop: {
                    time:    '14:50',
                    desc:    'Dupond J.',
                    zone:    'Zone C',
                    glyphs:  ['phone-square', 'bookmark-primary']},
                  count:       '2 pces',
                  weight:      '1.3 kg',
                  price:       '120.00',
                  priceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '14:30',
                    desc:    'Migros Plein-Palais',
                    zone:    'Zone B',
                    glyphs:  ['bookmark-primary']},
                  drop: {
                    time:    '15:05',
                    desc:    'Alfred D.',
                    zone:    'Zone B',
                    glyphs:  ['usd']},
                  count:       '1 pce',
                  weight:      '1.0 kg',
                  price:       '75.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  pick: {
                    time:    '15:00',
                    desc:    'Migros Pont-Neuf',
                    zone:    'Zone A',
                    glyphs:  ['bookmark-secondary']},
                  drop: {
                    time:    '17:30',
                    desc:    'Alfred D.',
                    zone:    'Zone B',
                    glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                  count:       '5 pces',
                  weight:      '10.0 kg',
                  price:       '250.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, 'xxx')}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
