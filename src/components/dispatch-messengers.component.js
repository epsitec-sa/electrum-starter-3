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
    this.data = window.document.data;
  }

  renderMessenger (shortName, messenger, index) {
    messenger.ticketId = shortName;
    messenger.index    = index;
    return (
      <MessengerTicket data={messenger} {...this.link ()} />
    );
  }

  getTripName (tripId) {
    if (tripId.length === 2) {
      return tripId.substring (0, 1);
    } else {
      return tripId;
    }
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
      <Trip kind='trip-box' data={d} {...this.link ()} />
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

  renderTrips (tripId, index) {
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
      <Trip kind='trip-tickets' data={d} {...this.link ()} />
    );
  }

  renderGlueTrips (tripIds) {
    const result = [];
    let index = 0;
    for (var tripId of tripIds) {
      if (tripId.endsWith ('.pick') || tripId.endsWith ('.drop')) {
        const type = tripId.substring (tripId.length - 4, tripId.length);  // by example 'drop'
        tripId = tripId.substring (0, tripId.length - 5);  // by example 'e'
        result.push (this.renderTrip (null, type, tripId, null, false, index++));
      } else {
        result.push (this.renderTrips (tripId, index++));
      }
    }
    return result;
  }

  renderGlue (glue, index) {
    return (
      <TicketsGlue left={glue.left} top={glue.top} rotate={glue.rotate} title={glue.title}
        drag-source='desk' index={index} {...this.link ()} >
        {this.renderGlueTrips (glue.tripIds)}
      </TicketsGlue>
    );
  }

  renderDesk () {
    const result = [];
    let index = 0;
    for (var glue of this.data.desk) {
      result.push (this.renderGlue (glue, index++));
    }
    return result;
  }

  renderTrip (color, type, tripId, shortName, warning, index) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const data = this.data.trips[tripId];
    tripId = this.getTripName (tripId);  // by example: 'd'
    const d = {
      Color:      color,
      Type:       type,
      Trip:       data,
      NoDrag:     'false',
      ticketId:   ticketId,
      tripId:     tripId,
      messenger:  shortName,
      index:      index,
      warning:    warning,
    };
    return (
      <Trip kind='trip-ticket' data={d} {...this.link ()} />
    );
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
      return index > i;  // true if pick is under drop
    } else if (type === 'drop') {
      const i = this.getIndex (shortName, tripId + '.pick');
      return index < i;  // true if drop is over pick
    } else {
      return false;
    }
  }

  renderTripsForMessenger (shortName) {
    const result = [];
    const content = this.data.dispatch[shortName];
    if (content) {
      let index = 0;
      for (var ticketId of content) {
        const type = ticketId.substring (ticketId.length - 4, ticketId.length);  // by exemple 'pick'
        const tripId = ticketId.substring (0, ticketId.length - 5);  // by example 'd1'
        const warning = this.getWarning (shortName, tripId, type, index);
        result.push (this.renderTrip (null, type, tripId, shortName, warning, index++));
      }
    }
    return result;
  }

  renderMessengerAndTickets (shortName, messenger, index) {
    return (
      <Container kind='tickets-messenger' {...this.link ()} >
        {this.renderMessenger (shortName, messenger, index)}
        <Container kind='tickets-trips' drag-controller='tickets' drag-source='dispatch' messenger={shortName}
          max-width='300px' {...this.link ()} >
          {this.renderTripsForMessenger (shortName)}
        </Container>
      </Container>
    );
  }

  renderDispatch () {
    const result = [];
    let index = 0;
    for (var [shortName, messenger] of Object.entries (this.data.messengers)) {
      result.push (this.renderMessengerAndTickets (shortName, messenger, index++));
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
