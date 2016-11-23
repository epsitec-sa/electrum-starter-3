'use strict';

import React from 'react';
import {
  Container,
  Trip,
  TextFieldCombo,
  DragController
} from 'electrum-arc';

import Data from './data-trips.js';
const {getTrips} = Data;

export default class DispatchTrips extends React.Component {

  constructor (props) {
    super (props);
    this.trips = getTrips ();
  }

  getTripBox (selected, tripId) {
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const data = this.trips[tripId];
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <Trip kind='trip-box' data={d} ticket-id={ticketId} trip-id={tripId}
        urgency={data.Urgency} {...this.link ()} />
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
            <DragController name='tickets' {...this.link ()} />
            <Container kind='column' drag-controller='tickets' {...this.link ()} >
              {this.getTripBox ('false', 'a')}
              {this.getTripBox ('false', 'b')}
              {this.getTripBox ('false', 'c')}
              {this.getTripBox ('false', 'd')}
              {this.getTripBox ('false', 'e')}
              {this.getTripBox ('false', 'f')}
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
