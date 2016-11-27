'use strict';

import React from 'react';
import {
  Container,
  Trip,
  TextFieldCombo,
  DragController
} from 'electrum-arc';

export default class DispatchTrips extends React.Component {

  constructor (props) {
    super (props);
    this.data = window.document.data;
  }

  renderMission (selected, tripId, index) {
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const data = this.data.trips[tripId];
    const d = {
      Trip:     data,
      NoDrag:   'false',
      ticketId: ticketId,
      tripId:   tripId,
      index:    index,
    };
    return (
      <Trip kind='trip-box' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  renderMissions () {
    const result = [];
    let index = 0;
    for (var tripId of this.data.missions) {
      result.push (this.renderMission ('false', tripId, index++));
    }
    return result;
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >
        <Container kind='view' width='800px' {...this.link ()} >

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
              {this.renderMissions ()}
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
