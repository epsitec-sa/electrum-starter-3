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
    const data = window.document.dataTrips[tripId];
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
    for (var tripId of window.document.dataTripBoxContent) {
      result.push (this.renderTripBox ('false', tripId));
    }
    return result;
  }

  renderGlue (glue) {
    return (
      <TicketsGlue left={glue.left} top={glue.top} rotate={glue.rotate} title={glue.title}
        drag-source='trip-tickets' {...this.link ()} >
        {this.renderTrips (glue.tripId)}
      </TicketsGlue>
    );
  }

  renderGlues () {
    const result = [];
    for (var glue of window.document.dataGlueContent) {
      result.push (this.renderGlue (glue));
    }
    return result;
  }

  renderTrips (tripId) {
    if (tripId) {
      const ticketId = tripId + '.both';  // by example: 'd1.both'
      const data = window.document.dataTrips[tripId];
      const d = {
        Trip:   data,
        NoDrag: 'false'
      };
      return (
        <Trip kind='trip-tickets' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
      );
    } else {
      return null;
    }
  }

  renderTrip (color, type, tripId) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const data = window.document.dataTrips[tripId];
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
    const content = window.document.dataMessengersContent[shortName];
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
    for (var [shortName, messenger] of Object.entries (window.document.dataMessengers)) {
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
              {this.renderGlues ()}
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
