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
    this.messengers        = window.document.dataMessengers;
    this.trips             = window.document.dataTrips;
    this.messengersContent = window.document.dataMessengersContent;
    this.tripBoxContent    = window.document.dataTripBoxContent;
    this.glueContent       = window.document.dataGlueContent;
  }

  renderMessenger (shortName, messenger) {
    return (
      <MessengerTicket Color={null} data={messenger} ticket-id={shortName} {...this.link ()} />
    );
  }

  getTripName (tripId) {
    if (tripId.length === 2) {
      return tripId.substring (0, 1);
    } else {
      return tripId;
    }
  }

  renderTripBox (selected, tripId) {
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

  renderTripBoxes () {
    const result = [];
    for (var tripId of this.tripBoxContent) {
      result.push (this.renderTripBox ('false', tripId));
    }
    return result;
  }

  renderTrips (tripId) {
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const data = this.trips[tripId];
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <Trip kind='trip-tickets' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  renderTrip (color, type, tripId) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const data = this.trips[tripId];
    tripId = this.getTripName (tripId);  // by example: 'd'
    const d = {
      Color:  color,
      Type:   type,
      Trip:   data,
      NoDrag: 'false',
    };
    return (
      <Trip kind='trip-ticket' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  renderTripsForMessenger (shortName) {
    const result = [];
    const content = this.messengersContent[shortName];
    if (content) {
      for (var ticketId of content) {
        const type = ticketId.substring (ticketId.length - 4, ticketId.length);  // by exemple 'pick'
        const tripId = ticketId.substring (0, ticketId.length - 5);  // by example 'd1'
        result.push (this.renderTrip (null, type, tripId));
      }
    }
    return result;
  }

  renderMessengerAndTickets (shortName, messenger) {
    console.log ('abc');
    return (
      <Container kind='tickets-messenger' {...this.link ()} >
        {this.renderMessenger (shortName, messenger)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='trip-ticket'
          max-width='300px' {...this.link ()} >
          {this.renderTripsForMessenger (shortName)}
        </Container>
      </Container>
    );
  }

  renderMessengersAndTickets () {
    const result = [];
    for (var [shortName, messenger] of Object.entries (this.messengers)) {
      result.push (this.renderMessengerAndTickets (shortName, messenger));
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
            {this.renderMessengersAndTickets ()}
          </Container>
          <Splitter kind='vertical' default-size='0px' min-size='0px' {...this.link ()} >
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
                <Container kind='column' drag-controller='tickets' drag-source='trip-box'
                  {...this.link ()} >
                  {this.renderTripBoxes ()}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-basket' {...this.link ()} >
              <TicketsGlue left='30px' top='50px' rotate='5deg' title='Après-midi'
                drag-source='trip-tickets' {...this.link ()} >
                {this.renderTrips ('g')}
              </TicketsGlue>
              <TicketsGlue left='310px' top='50px' rotate='-1deg' title='Julien'
                drag-source='trip-tickets' {...this.link ()} >
                {this.renderTrip (null, 'pick', 'h')}
                {this.renderTrip (null, 'drop', 'h')}
              </TicketsGlue>
              <TicketsGlue left='590px' top='40px' rotate='2deg' title='#3'
                drag-source='trip-tickets' {...this.link ()} >
                {this.renderTrips ('i')}
              </TicketsGlue>
              <TicketsGlue left='860px' top='60px' rotate='-5deg' title='Mardi'
                drag-source='trip-tickets' {...this.link ()} >
                {this.renderTrips ('j')}
              </TicketsGlue>
              <TicketsGlue left='1120px' top='50px' rotate='2deg' title='#5'
                drag-source='trip-tickets' {...this.link ()} />
              <TicketsGlue left='1380px' top='70px' rotate='-2deg' title='Urgent'
                drag-source='trip-tickets' {...this.link ()} />
              <TicketsGlue left='1650px' top='50px' rotate='0deg' title='#7'
                drag-source='trip-tickets' {...this.link ()} />
              <TicketsGlue left='1920px' top='50px' rotate='5deg' title='#8'
                drag-source='trip-tickets' {...this.link ()} />
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
