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
                  Pick: {
                    Time:    '10:50',
                    Desc:    'Coop St. Laurent',
                    Zone:    'Zone A',
                    Glyphs:  ['phone-square', 'bookmark-secondary']},
                  Drop: {
                    Time:    '11:20',
                    Desc:    'Dupond J.',
                    Zone:    'Zone C',
                    Glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                  Count:       '2 pces',
                  Weight:      '1.3 kg',
                  Price:       '100.00',
                  PriceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  Pick: {
                    Time:    '11:00',
                    Desc:    'Migros Plein-Palais',
                    Zone:    'Zone B',
                    Glyphs:  ['bookmark-base']},
                  Drop: {
                    Time:    '11:35',
                    Desc:    'Alfred D.',
                    Zone:    'Zone B',
                    Glyphs:  ['bookmark-base', 'bookmark-primary']},
                  Count:       '1 pce',
                  Weight:      '0.2 kg',
                  Price:       '30.00',
                  PriceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip ('true', {
                  Pick: {
                    Time:    '11:15',
                    Desc:    'Icomm',
                    Zone:    'Zone B',
                    Glyphs:  null},
                  Drop: {
                    Time:    '12:00',
                    Desc:    'Studer AG',
                    Zone:    'Zone A',
                    Glyphs:  null},
                  Count:       '2 pces',
                  Weight:      '1.2 kg',
                  Price:       '130.00',
                  PriceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  Pick: {
                    Time:    '11:45',
                    Desc:    'Burder A.',
                    Zone:    'Zone B',
                    Glyphs:  null},
                  Drop: {
                    Time:    '13:15',
                    Desc:    'PolyAugrien',
                    Zone:    'Zone A',
                    Glyphs:  null},
                  Count:       '2 pces',
                  Weight:      '1.2 kg',
                  Price:       '130.00',
                  PriceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  Pick: {
                    Time:    '14:00',
                    Desc:    'Coop St. Laurent',
                    Zone:    'Zone A',
                    Glyphs:  ['bookmark-secondary']},
                  Drop: {
                    Time:    '14:50',
                    Desc:    'Dupond J.',
                    Zone:    'Zone C',
                    Glyphs:  ['phone-square', 'bookmark-primary']},
                  Count:       '2 pces',
                  Weight:      '1.3 kg',
                  Price:       '120.00',
                  PriceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  Pick: {
                    Time:    '14:30',
                    Desc:    'Migros Plein-Palais',
                    Zone:    'Zone B',
                    Glyphs:  ['bookmark-primary']},
                  Drop: {
                    Time:    '15:05',
                    Desc:    'Alfred D.',
                    Zone:    'Zone B',
                    Glyphs:  ['usd']},
                  Count:       '1 pce',
                  Weight:      '1.0 kg',
                  Price:       '75.00',
                  PriceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getTrip (false, {
                  Pick: {
                    Time:    '15:00',
                    Desc:    'Migros Pont-Neuf',
                    Zone:    'Zone A',
                    Glyphs:  ['bookmark-secondary']},
                  Drop: {
                    Time:    '17:30',
                    Desc:    'Alfred D.',
                    Zone:    'Zone B',
                    Glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                  Count:       '5 pces',
                  Weight:      '10.0 kg',
                  Price:       '250.00',
                  PriceGlyphs: null})}
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
