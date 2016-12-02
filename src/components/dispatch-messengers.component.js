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
  Separator,
  Ticket,
  Trip,
  TicketsGlue,
  MessengerTicket,
  DragController,
  Splitter
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
    // window.document.dispatch = this;
    this.data = window.document.data.new;
  }

  renderMessenger (messengerBook) {
    return (
      <MessengerTicket data={messengerBook} {...this.link ()} />
    );
  }

  renderTrip (ticket) {
    return (
      <Trip kind='trip-tickets' data={ticket} {...this.link ()} />
    );
  }

  renderTrayTickets (tickets) {
    const result = [];
    for (var ticket of tickets) {
      result.push (this.renderTrip (ticket));
    }
    return result;
  }

  renderTray (tray) {
    const x = tray.Position.split (',')[0];
    const y = tray.Position.split (',')[1];
    return (
      <TicketsGlue left={x} top={y} rotate={tray.Rotation} title={tray.Name}
        drag-source='desk' {...this.link ()} >
        {this.renderTrayTickets (tray.Tickets)}
      </TicketsGlue>
    );
  }

  renderDesk (ticketsTrays) {
    const result = [];
    for (var tray of ticketsTrays) {
      result.push (this.renderTray (tray));
    }
    return result;
  }

  getIndex (shortName, ticketId) {
    const content = this.data.dispatch[shortName];
    let index = 0;
    for (var x of content) {
      if (x === ticketId) {
        return index;
      }
      index++;
    }
    return -1;
  }

  getWarning (shortName, tripId, type, index) {
    if (type === 'pick') {
      const i = this.getIndex (shortName, tripId + '.drop');
      return i !== -1 && index > i;  // true if pick is under drop
    } else if (type === 'drop') {
      const i = this.getIndex (shortName, tripId + '.pick');
      return i !== -1 && index < i;  // true if drop is over pick
    } else {
      return false;
    }
  }

  renderTicket (ticket) {
    if (ticket.Type === 'both') {
      return (
        <Trip kind='trip-box' data={ticket} {...this.link ()} />
      );
    } else if (ticket.Type === 'pick' || ticket.Type === 'drop') {
      return (
        <Trip kind='trip-ticket' data={ticket} {...this.link ()} />
      );
    }
  }

  renderTickets (tickets) {
    const result = [];
    for (var ticket of tickets) {
      result.push (this.renderTicket (ticket));
    }
    return result;
  }

  renderMessengerBook (messengerBook) {
    return (
      <Container kind='tickets-messenger' {...this.link ()} >
        {this.renderMessenger (messengerBook)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='dispatch'
          max-width='300px' {...this.link ()} >
          {this.renderTickets (messengerBook.Tickets)}
        </Container>
      </Container>
    );
  }

  renderMessengersBooks (messengersBooks) {
    const result = [];
    for (var messengerBook of messengersBooks) {
      result.push (this.renderMessengerBook (messengerBook));
    }
    return result;
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <DragController name='messengers' drag-handle='MessengerTicket' direction='horizontal' {...this.link ()} />
        <DragController name='tickets' drag-handle='TripTicket' {...this.link ()} />
        <Splitter kind='horizontal' default-size='60%' {...this.link ()} >
          <Container kind='tickets-messengers' drag-controller='messengers' {...this.link ()} >
            {this.renderMessengersBooks (this.data.MessengersBooks)}
          </Container>
          <Splitter kind='vertical' default-size='750px' min-size='0px' {...this.link ()} >
            <Container kind='view-stretch' {...this.link ()} >
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
                <Container kind='column' drag-controller='tickets' drag-source='missions' {...this.link ()} >
                  {this.renderTickets (this.data.TicketsToDispatch.Tickets)}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-desk' {...this.link ()} >
              {this.renderDesk (this.data.TicketsTrays)}
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
