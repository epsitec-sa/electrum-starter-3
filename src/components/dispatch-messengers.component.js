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
  TicketsTray,
  MessengerTicket,
  DragController,
  Splitter
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
    window.document.dispatch = this;
    this.data = window.document.data;
  }

  mouseOut () {
    console.log ('*** mouseOut ***');
    this.forceUpdate ();
  }

  renderMessenger (messengerBook) {
    return (
      <MessengerTicket data={messengerBook} onMouseOut={() => this.mouseOut ()} {...this.link ()} />
    );
  }

  renderTicket (ticket, kind, index) {
    return (
      <Trip key={index} kind={kind} data={ticket} {...this.link ()} />
    );
  }

  renderTrayTickets (tickets) {
    const result = [];
    let index = 0;
    for (var ticket of tickets) {
      const kind = (ticket.Type === 'pair') ? 'trip-tickets' : 'trip-ticket';
      result.push (this.renderTicket (ticket, kind, index++));
    }
    return result;
  }

  renderTray (tray, index) {
    const x = tray.Position.split (',')[0];
    const y = tray.Position.split (',')[1];
    return (
      <TicketsTray key={index} left={x} top={y} rotate={tray.Rotation} title={tray.Name}
        drag-source='desk' data={tray} {...this.link ()} >
        {this.renderTrayTickets (tray.Tickets)}
      </TicketsTray>
    );
  }

  renderDesk (ticketsTrays) {
    const result = [];
    let index = 0;
    for (var tray of ticketsTrays) {
      result.push (this.renderTray (tray, index++));
    }
    return result;
  }

  renderTickets (tickets, kind) {
    const result = [];
    let index = 0;
    for (var ticket of tickets) {
      result.push (this.renderTicket (ticket, kind, index++));
    }
    return result;
  }

  renderMessengerBook (messengerBook, index) {
    return (
      <Container key={index} kind='tickets-messenger' id={messengerBook.id} {...this.link ()} >
        {this.renderMessenger (messengerBook)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='dispatch'
          id={messengerBook.id} max-width='300px' {...this.link ()} >
          {this.renderTickets (messengerBook.Tickets, 'trip-ticket')}
        </Container>
      </Container>
    );
  }

  renderMessengersBooks (messengersBooks) {
    const result = [];
    let index = 0;
    for (var messengerBook of messengersBooks) {
      result.push (this.renderMessengerBook (messengerBook, index++));
    }
    return result;
  }

  onSplitterMessengersChanged (size) {
    this.data.MessengersSize = size;
  }

  onSplitterTicketsToDispatchChanged (size) {
    this.data.TicketsToDispatchSize = size;
  }

  splitterMessengersSize () {
    if (this.data.MessengersSize) {
      return this.data.MessengersSize;
    } else {
      return '60%';  // default value
    }
  }

  splitterTicketsToDispatchSize () {
    if (this.data.TicketsToDispatchSize) {
      return this.data.TicketsToDispatchSize;
    } else {
      return '750px';  // default value
    }
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <DragController name='messengers' drag-handle='MessengerTicket' direction='horizontal' {...this.link ()} />
        <DragController name='tickets' drag-handle='TripTicket' {...this.link ()} />
        <Splitter kind='horizontal' default-size={this.splitterMessengersSize ()}
          onSizeChanged={size => this.onSplitterMessengersChanged (size)} {...this.link ()} >
          <Container kind='tickets-messengers' drag-controller='messengers' drag-source='messengers' {...this.link ()} >
            {this.renderMessengersBooks (this.data.MessengersBooks)}
          </Container>
          <Splitter kind='vertical' default-size={this.splitterTicketsToDispatchSize ()} min-size='0px'
            onSizeChanged={size => this.onSplitterTicketsToDispatchChanged (size)} {...this.link ()} >
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
                  {this.renderTickets (this.data.TicketsToDispatch.Tickets, 'trip-box')}
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
