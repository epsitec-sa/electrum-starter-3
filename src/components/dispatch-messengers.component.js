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
    // this.state = {
    //   dataMessengers:        window.document.dataMessengers,
    //   dataTrips:             window.document.dataTrips,
    //   dataMessengersContent: window.document.dataMessengersContent,
    //   dataTripBoxContent:    window.document.dataTripBoxContent,
    //   dataGlueContent:       window.document.dataGlueContent,
    //   regen:                 0,
    // };
    // window.document.dispatchMessengers = this;
    this.data = window.document.data;
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

  renderMission (selected, tripId) {
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const data = this.data.trips[tripId];
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <Trip kind='trip-box' data={d} ticket-id={ticketId} trip-id={tripId}
        urgency={data.Urgency} {...this.link ()} />
    );
  }

  renderMissions () {
    const result = [];
    for (var tripId of this.data.missions) {
      result.push (this.renderMission ('false', tripId));
    }
    return result;
  }

  renderTrips (tripId) {
    console.log (tripId);
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const data = this.data.trips[tripId];
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <Trip kind='trip-tickets' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  renderGlueTrips (tripIds) {
    const result = [];
    for (var tripId of tripIds) {
      result.push (this.renderTrips (tripId));
    }
    return result;
  }

  renderGlue (glue) {
    return (
      <TicketsGlue left={glue.left} top={glue.top} rotate={glue.rotate} title={glue.title}
        drag-source='desk' {...this.link ()} >
        {this.renderGlueTrips (glue.tripIds)}
      </TicketsGlue>
    );
  }

  renderDesk () {
    const result = [];
    for (var glue of this.data.desk) {
      result.push (this.renderGlue (glue));
    }
    return result;
  }

  renderTrip (color, type, tripId, shortName) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const data = this.data.trips[tripId];
    tripId = this.getTripName (tripId);  // by example: 'd'
    const d = {
      Color:  color,
      Type:   type,
      Trip:   data,
      NoDrag: 'false',
    };
    return (
      <Trip kind='trip-ticket' data={d} ticket-id={ticketId} trip-id={tripId} messenger={shortName} {...this.link ()} />
    );
  }

  renderTripsForMessenger (shortName) {
    const result = [];
    const content = this.data.dispatch[shortName];
    if (content) {
      for (var ticketId of content) {
        const type = ticketId.substring (ticketId.length - 4, ticketId.length);  // by exemple 'pick'
        const tripId = ticketId.substring (0, ticketId.length - 5);  // by example 'd1'
        result.push (this.renderTrip (null, type, tripId, shortName));
      }
    }
    return result;
  }

  renderMessengerAndTickets (shortName, messenger) {
    return (
      <Container kind='tickets-messenger' {...this.link ()} >
        {this.renderMessenger (shortName, messenger)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='dispatch' messenger={shortName}
          max-width='300px' {...this.link ()} >
          {this.renderTripsForMessenger (shortName)}
        </Container>
      </Container>
    );
  }

  renderDispatch () {
    const result = [];
    for (var [shortName, messenger] of Object.entries (this.data.messengers)) {
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
            {this.renderDispatch ()}
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
                  {this.renderMissions ()}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-desk' {...this.link ()} >
              {this.renderDesk ()}
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
