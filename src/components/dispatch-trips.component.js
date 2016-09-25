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

  getJob (data) {
    return (
      <TripBox data={data} {...this.link ()} />
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
                {this.getJob ({
                  pickTime:    '10:50',
                  pickDesc:    'Coop St. Laurent',
                  pickZone:    'Zone A',
                  pickGlyphs:  ['phone-square', 'bookmark-secondary'],
                  dropTime:    '11:20',
                  dropDesc:    'Dupond J.',
                  dropZone:    'Zone C',
                  dropGlyphs:  ['usd', 'bookmark-base', 'bookmark-primary'],
                  count:       '2 pces',
                  weight:      '1.3 kg',
                  price:       '100.00',
                  priceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '11:00',
                  pickDesc:    'Migros Plein-Palais',
                  pickZone:    'Zone B',
                  pickGlyphs:  ['bookmark-base'],
                  dropTime:    '11:35',
                  dropDesc:    'Alfred D.',
                  dropZone:    'Zone B',
                  dropGlyphs:  ['bookmark-base', 'bookmark-primary'],
                  count:       '1 pce',
                  weight:      '0.2 kg',
                  price:       '30.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  selected:    'true',
                  pickTime:    '11:15',
                  pickDesc:    'Icomm',
                  pickZone:    'Zone B',
                  pickGlyphs:  null,
                  dropTime:    '12:00',
                  dropDesc:    'Studer AG',
                  dropZone:    'Zone A',
                  dropGlyphs:  null,
                  count:       '2 pces',
                  weight:      '1.2 kg',
                  price:       '130.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '11:45',
                  pickDesc:    'Burder A.',
                  pickZone:    'Zone B',
                  pickGlyphs:  null,
                  dropTime:    '13:15',
                  dropDesc:    'PolyAugrien',
                  dropZone:    'Zone A',
                  dropGlyphs:  null,
                  count:       '2 pces',
                  weight:      '1.2 kg',
                  price:       '130.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '14:00',
                  pickDesc:    'Coop St. Laurent',
                  pickZone:    'Zone A',
                  pickGlyphs:  ['bookmark-secondary'],
                  dropTime:    '14:50',
                  dropDesc:    'Dupond J.',
                  dropZone:    'Zone C',
                  dropGlyphs:  ['phone-square', 'bookmark-primary'],
                  count:       '2 pces',
                  weight:      '1.3 kg',
                  price:       '120.00',
                  priceGlyphs: 'warning'})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '14:30',
                  pickDesc:    'Migros Plein-Palais',
                  pickZone:    'Zone B',
                  pickGlyphs:  ['bookmark-primary'],
                  dropTime:    '15:05',
                  dropDesc:    'Alfred D.',
                  dropZone:    'Zone B',
                  dropGlyphs:  ['usd'],
                  count:       '1 pce',
                  weight:      '1.0 kg',
                  price:       '75.00',
                  priceGlyphs: null})}
              </Container>
              <Container kind='row-pane' {...this.link ()} >
                {this.getJob ({
                  pickTime:    '15:00',
                  pickDesc:    'Migros Pont-Neuf',
                  pickZone:    'Zone A',
                  pickGlyphs:  ['bookmark-secondary'],
                  dropTime:    '17:30',
                  dropDesc:    'Alfred D.',
                  dropZone:    'Zone B',
                  dropGlyphs:  ['usd', 'bookmark-base', 'bookmark-primary'],
                  count:       '5 pces',
                  weight:      '10.0 kg',
                  price:       '250.00',
                  priceGlyphs: null})}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
