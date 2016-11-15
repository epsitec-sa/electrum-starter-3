'use strict';

import React from 'react';

import Data from './data-trips.js';
const {getTrips} = Data;

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
    this.trips = getTrips ();
  }

  getGlyphEntitySolo(glyph) {
    if (glyph) {
      return {
        Glyph:       glyph,
        Name:        'Glyph ' + glyph,
        Description: 'Generated by electrum-dev'
      };
    } else {
      return null;
    }
  }

  getMessenger (color, data) {
    data.Photo          = this.getGlyphEntitySolo (data.Photo);
    data.Transportation = this.getGlyphEntitySolo (data.Transportation);
    return (
      <MessengerTicket Color={color} data={data} ticket-id='messenger' {...this.link ()} />
    );
  }

  getTripName(tripId) {
    if (tripId.length === 2) {
      return tripId.substring (0, 1);
    } else {
      return tripId;
    }
  }

  getTripBox (selected, tripId) {
    const data = this.trips[tripId];
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <Trip kind='trip-box' data={d} Selected={selected} {...this.link ()} />
    );
  }

  getTrip (color, type, tripId) {
    const ticketId = tripId + '.' + type;  // by example: 'd1.drop'
    const data = this.trips[tripId];
    tripId = this.getTripName (tripId);  // by example: 'd'
    const d = {
      Color:  color,
      Type:   type,
      Trip:   data,
      NoDrag: color === 'selected' ? 'true' : 'false',
    };

    return (
      <Trip kind='trip-ticket' data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  getTrips (tripId) {
    const data = this.trips[tripId];
    return (
      <Trip kind='trip-tickets' data={data} trip-id={tripId} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <DragController name='messengers' drag-handle='MessengerTicket' direction='horizontal' {...this.link ()} />
        <DragController name='tickets' drag-handle='TripTicket' {...this.link ()} />
        <Splitter kind='horizontal' default-size='60%' {...this.link ()} >
          <Container kind='tickets-messengers' drag-controller='messengers' {...this.link ()} >
            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user',
                Transportation: 'bicycle',
                Name:           'Jean-Louis',
                Total:          '400.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip (null, 'pick', 'k')}
                {this.getTrip (null, 'drop', 'k')}
                {this.getTrip (null, 'pick', 'l1')}
                {this.getTrip (null, 'drop', 'l1')}
                {this.getTrip (null, 'pick', 'm')}
                {this.getTrip (null, 'drop', 'm')}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user',
                Transportation: 'bicycle',
                Name:           'Sandra',
                Total:          '203.50'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip (null, 'pick', 'n')}
                {this.getTrip (null, 'pick', 'o')}
                {this.getTrip (null, 'drop', 'n')}
                {this.getTrip (null, 'drop', 'o')}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger ('yellow', {
                Photo:          'user',
                Transportation: 'bicycle',
                Name:           'Jean-Paul',
                Total:          '68.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip (null, 'pick', 'l2')}
                {this.getTrip (null, 'pick', 'r')}
                {this.getTrip (null, 'pick', 'p')}
                {this.getTrip (null, 'drop', 'r')}
                {this.getTrip (null, 'pick', 'q')}
                {this.getTrip (null, 'drop', 'q')}
                {this.getTrip (null, 'drop', 'l2')}
                {this.getTrip (null, 'drop', 'p')}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user',
                Transportation: 'bicycle',
                Name:           'Chantal',
                Total:          '95.20'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip (null, 'pick', 's1')}
                {this.getTrip (null, 'drop', 's1')}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user-secret',
                Transportation: 'car',
                Name:           'Frédérique',
                Total:          '250.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('selected', 'pick', 's2')}
                {this.getTrip ('selected', 'pick', 't')}
                {this.getTrip ('selected', 'drop', 't')}
                {this.getTrip (null, 'drop', 's2')}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
        				Photo:          'user',
        				Transportation: 'bicycle',
        				Name:           'Marcel',
        				Total:          '0.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
        				Photo:          'user',
        				Transportation: 'truck',
        				Name:           'Simone',
        				Total:          '100.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Béatrice',
              Total:          '20.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'rocket',
              Name:           'Zoé',
              Total:          '0.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Marc',
              Total:          '0.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Victor',
              Total:          '630.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'car',
              Name:           'Jacques',
              Total:          '0.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'car',
              Name:           'Samuel',
              Total:          '0.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Georges',
              Total:          '50.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
            		Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Francine',
              Total:          '68.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>

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
            <Container kind='tickets-basket' {...this.link ()} >
              <TicketsGlue left='30px' top='50px' rotate='10deg' title='Après-midi' {...this.link ()} >
                {this.getTrips ('g')}
              </TicketsGlue>
              <TicketsGlue left='310px' top='50px' rotate='-2deg' title='Julien' {...this.link ()} >
                {this.getTrip (null, 'pick', 'h')}
                {this.getTrip (null, 'drop', 'h')}
              </TicketsGlue>
              <TicketsGlue left='590px' top='40px' rotate='5deg' title='#3' {...this.link ()} >
                {this.getTrips ('i')}
              </TicketsGlue>
              <TicketsGlue left='860px' top='60px' rotate='-10deg' title='Mardi' {...this.link ()} >
                {this.getTrips ('j')}
              </TicketsGlue>
              <TicketsGlue left='1120px' top='50px' rotate='5deg' title='#5' {...this.link ()} />
              <TicketsGlue left='1380px' top='70px' rotate='-4deg' title='Urgent' {...this.link ()} />
              <TicketsGlue left='1650px' top='50px' rotate='0deg' title='#7' {...this.link ()} />
              <TicketsGlue left='1920px' top='50px' rotate='10deg' title='#8' {...this.link ()} />
              <TicketsGlue left='20px' top='300px' rotate='-5deg' title='TODO' {...this.link ()} />
              <TicketsGlue left='290px' top='290px' rotate='10deg' title='#10' {...this.link ()} />
              <TicketsGlue left='580px' top='290px' rotate='2deg' title='#11' {...this.link ()} />
              <TicketsGlue left='840px' top='340px' rotate='5deg' title='#12' {...this.link ()} />
              <TicketsGlue left='1100px' top='290px' rotate='-8deg' title='En réserve' {...this.link ()} />
              <TicketsGlue left='1350px' top='320px' rotate='3deg' title='#14' {...this.link ()} />
              <TicketsGlue left='1600px' top='290px' rotate='-4deg' title='#15' {...this.link ()} />
              <TicketsGlue left='1880px' top='290px' rotate='5deg' title='#16' {...this.link ()} />
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
