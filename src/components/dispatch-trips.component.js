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
    this.data = window.document.data.new.TicketsToDispatch;
  }

  renderTicket (ticket) {
    return (
      <Trip kind='trip-box' data={ticket} {...this.link ()} />
    );
  }

  renderTickets (tickets) {
    const result = [];
    for (var ticket of tickets) {
      result.push (this.renderTicket (ticket));
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
              {this.renderTickets (this.data.Tickets)}
            </Container>
          </Container>
        </Container>
      </Container>
    );
  }
}
