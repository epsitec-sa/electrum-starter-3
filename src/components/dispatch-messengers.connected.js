'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Electrum from 'electrum';

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

function mapStateToProps (state) {
  return {
    trips:             state.trips,
    messengers:        state.messengers,
    messengersContent: state.messengersContent,
    tripBoxContent:    state.tripBoxContent,
    glueContent:       state.glueContent,
  };
}

class DispatchMessengersConnected extends React.Component {

  constructor (props) {
    super (props);
  }

  renderMessenger (shortName, messenger) {
    return (
      <MessengerTicket Color={null} data={messenger} ticket-id={shortName} {...Electrum.link (this.props)} />
    );
  }

  getTripName (tripId) {
    if (tripId.length === 2) {
      return tripId.substring (0, 1);
    } else {
      return tripId;
    }
  }

  getConnectTrip (Trip, tripId, color, type) {
    const mapStateToProps = function (state, props) {
      return Object.assign ({}, props, {
        data: {
          Color:  color,
          Type:   type,
          Trip:   state.trips[tripId],
          NoDrag: 'false',
        },
      });
    };
    return connect (mapStateToProps, null, null, {pure: false}) (Trip);
  }

  renderTripBox (selected, tripId) {
    const ticketId = tripId + '.both';  // by example: 'd1.both'
    const ConnectedTrip = this.getConnectTrip (Trip, tripId);
    // ???return (
    // ???  <ConnectedTrip kind='trip-box' ticket-id={ticketId} trip-id={tripId}
    // ???    urgency={data.Urgency} {...Electrum.link (this.props)} />
    // ???);
    return (
      <ConnectedTrip kind='trip-box' ticket-id={ticketId} trip-id={tripId}
        {...Electrum.link (this.props)} />
    );
  }

  renderTripBoxes () {
    const result = [];
    for (var tripId of this.props.tripBoxContent) {
      result.push (this.renderTripBox ('false', tripId));
    }
    return result;
  }

  renderGlue (glue) {
    return (
      <TicketsGlue left={glue.left} top={glue.top} rotate={glue.rotate} title={glue.title}
        drag-source='trip-tickets' {...Electrum.link (this.props)} >
        {this.renderTrips (glue.tripId)}
      </TicketsGlue>
    );
  }

  renderGlues () {
    const result = [];
    for (var glue of this.props.glueContent) {
      result.push (this.renderGlue (glue));
    }
    return result;
  }

  renderTrips (tripId) {
    if (tripId) {
      const ticketId = tripId + '.both';  // by example: 'd1.both'
      const ConnectedTrip = this.getConnectTrip (Trip, tripId);
      return (
        <ConnectedTrip kind='trip-tickets' ticket-id={ticketId} trip-id={tripId} {...Electrum.link (this.props)} />
      );
    } else {
      return null;
    }
  }

  renderTrip (color, type, tripId, shortName) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const ConnectedTrip = this.getConnectTrip (Trip, tripId, color, type);
    return (
      <ConnectedTrip kind='trip-ticket' ticket-id={ticketId} trip-id={tripId} messenger={shortName} {...Electrum.link (this.props)} />
    );
  }

  renderTripsForMessenger (shortName) {
    const result = [];
    const content = this.props.messengersContent[shortName];
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
      <Container kind='tickets-messenger' {...Electrum.link (this.props)} >
        {this.renderMessenger (shortName, messenger)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='trip-ticket' messenger={shortName}
          max-width='300px' {...Electrum.link (this.props)} >
          {this.renderTripsForMessenger (shortName)}
        </Container>
      </Container>
    );
  }

  renderMessengersAndTickets () {
    const result = [];
    for (var [shortName, messenger] of Object.entries (this.props.messengers)) {
      result.push (this.renderMessengerAndTickets (shortName, messenger));
    }
    return result;
  }

  render () {
    return (
      <Container kind='tickets-root' {...Electrum.link (this.props)} >
        <DragController name='messengers' drag-handle='MessengerTicket' direction='horizontal' {...Electrum.link (this.props)} />
        <DragController name='tickets' drag-handle='TripTicket' {...Electrum.link (this.props)} />
        <Splitter kind='horizontal' default-size='60%' {...Electrum.link (this.props)} >
          <Container kind='tickets-messengers' drag-controller='messengers' {...Electrum.link (this.props)} >
            {this.renderMessengersAndTickets ()}
          </Container>
          <Splitter kind='vertical' default-size='0px' min-size='0px' {...Electrum.link (this.props)} >
            <Container kind='view-stretch' {...Electrum.link (this.props)} >
              <Container kind='pane-top' {...Electrum.link (this.props)} >
                <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                  grow='1' spacing='large' combo-type='calendar'
                  combo-direction='right' flying-balloon-anchor='bottom'
                  {...Electrum.link (this.props)} />
                <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                  grow='1' spacing='large' combo-type='clock'
                  flying-balloon-anchor='right' {...Electrum.link (this.props)} />
                <TextFieldCombo shape='rounded' hint-text='Chercher'
                  grow='2' combo-glyph='Search' {...Electrum.link (this.props)} />
              </Container>
              <Container kind='panes' {...Electrum.link (this.props)} >
                <Container kind='column' drag-controller='tickets' drag-source='trip-box' {...Electrum.link (this.props)} >
                  {this.renderTripBoxes ()}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-basket' {...Electrum.link (this.props)} >
              {this.renderGlues ()}
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}

export default connect (mapStateToProps, null, null, {pure: false}) (DispatchMessengersConnected);
