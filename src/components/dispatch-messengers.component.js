'use strict';

import React from 'react';
import {
  Container,
  Button,
  TabButton,
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
  TripTicket,
  MessengerTicket
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
    this.messengerHeight = '70px';
    this.ticketHeight    = '90px';
    this.ticketWidth     = '220px';
  }

  getMessenger (data) {
    return (
      <MessengerTicket width={this.ticketWidth} height={this.messengerHeight} data={data} {...this.link ()} />
    );
  }

  getTrip (data) {
    return (
      <TripTicket width={this.ticketWidth} height={this.ticketHeight} data={data} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <Container kind='tickets-messengers' {...this.link ()} >

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
              photo:          'user',
              transportation: 'bicycle',
              name:           'Sandra',
              total:          '203.50'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
                color:    'blue',
                type:     'pick',
                pickTime: '10:50',
                pickDesc: 'Coop St. Laurent',
                dropTime: '11:20',
                dropDesc: 'Dupond J.',
                count:    2,
                glyphs:   'warning'})}
              {this.getTrip ({
                color:    'blue',
                type:     'drop',
                pickTime: '11:00',
                pickDesc: 'Migros Pont-Neuf',
                dropTime: '11:15',
                dropDesc: 'Chancellerie',
                count:    1,
                glyphs:   ['warning', 'bookmark-base']})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:20',
        				pickDesc: 'PolyAugrien',
        				dropTime: '11:45',
        				dropDesc: 'Burdet A.',
        				count:    3,
        				glyphs:   'warning'})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    1,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    1,
        				glyphs:   ['bookmark-secondary', 'bookmark-primary']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
              photo:          'user',
              transportation: 'bicycle',
              name:           'Jean-Paul',
              total:          '68.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:00',
        				pickDesc: 'Migros Pont-Neuf',
        				dropTime: '11:15',
        				dropDesc: 'Chancellerie',
        				count:    1,
        				glyphs:   'warning'})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    1,
        				glyphs:   ['warning', 'bookmark-base', 'bookmark-secondary', 'bookmark-primary']})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user-secret',
      				transportation: 'car',
      				name:           'Frédérique',
      				total:          '250.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
                color:    'blue',
        				type:     'pick',
        				pickTime: '10:15',
        				pickDesc: 'Coop St. Laurent',
        				dropTime: '10:55',
        				dropDesc: 'Dupond J.',
        				count:    1,
        				glyphs:   ['bookmark-primary']})}
              {this.getTrip ({
                color:    'blue',
        				type:     'pick',
        				pickTime: '10:50',
        				pickDesc: 'Coop St. Laurent',
        				dropTime: '11:20',
        				dropDesc: 'Dupond J.',
        				count:    2,
        				glyphs:   null})}
              {this.getTrip ({
                color:    'blue',
        				type:     'drop',
        				pickTime: '11:00',
        				pickDesc: 'Migros Pont-Neuf',
        				dropTime: '11:15',
        				dropDesc: 'Chancellerie',
        				count:    1,
        				glyphs:   ['warning', 'bookmark-secondary']})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:20',
        				pickDesc: 'PolyAugrien',
        				dropTime: '11:45',
        				dropDesc: 'Burdet A.',
        				count:    1,
        				glyphs:   'warning'})}
              {this.getTrip ({
                color:    'green',
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    2,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    1,
        				glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
      				photo:          'user',
      				transportation: 'bicycle',
      				name:           'Marcel',
      				total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
      				photo:          'user',
      				transportation: 'truck',
      				name:           'Simone',
      				total:          '100.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          	  photo:          'user',
      				transportation: 'bicycle',
      				name:           'Jean-Louis',
      				total:          '400.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   ['bookmark-primary']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'yellow',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Chantal',
      				total:          '95.20'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
                color:    'yellow',
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
              {this.getTrip ({
                color:    'yellow',
        				type:     'drop',
        				pickTime: '11:00',
        				pickDesc: 'Migros Pont-Neuf',
        				dropTime: '11:15',
        				dropDesc: 'Chancellerie',
        				count:    1,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:20',
        				pickDesc: 'PolyAugrien',
        				dropTime: '11:45',
        				dropDesc: 'Burdet A.',
        				count:    1,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    2,
        				glyphs:   ['bookmark-base', 'bookmark-secondary']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Béatrice',
      				total:          '20.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'rocket',
      				name:           'Zoé',
      				total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Marc',
      				total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '08:30',
        				pickDesc: 'Icomm',
        				dropTime: '09:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   ['bookmark-secondary']})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '10:50',
        				pickDesc: 'Coop St. Laurent',
        				dropTime: '11:20',
        				dropDesc: 'Dupond J.',
        				count:    2,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:00',
        				pickDesc: 'Migros Pont-Neuf',
        				dropTime: '11:15',
        				dropDesc: 'Chancellerie',
        				count:    1,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:20',
        				pickDesc: 'PolyAugrien',
        				dropTime: '11:45',
        				dropDesc: 'Burdet A.',
        				count:    3,
        				glyphs:   'warning'})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    1,
        				glyphs:   ['bookmark-base', 'bookmark-primary']})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    1,
        				glyphs:   ['warning', 'bookmark-base', 'bookmark-secondary']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Victor',
      				total:          '630.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'car',
      				name:           'Jacques',
      				total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '10:50',
        				pickDesc: 'Coop St. Laurent',
        				dropTime: '11:20',
        				dropDesc: 'Dupond J.',
        				count:    2,
        				glyphs:   ['warning', 'bookmark-primary']})}
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '11:00',
        				pickDesc: 'Migros Pont-Neuf',
        				dropTime: '11:15',
        				dropDesc: 'Chancellerie',
        				count:    1,
        				glyphs:   'warning'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'car',
      				name:           'Samuel',
      				total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   null})}
              {this.getTrip ({
        				type:     'pick',
        				pickTime: '11:45',
        				pickDesc: 'Me Mouquin G.',
        				dropTime: '13:00',
        				dropDesc: 'Schmidt W.',
        				count:    2,
        				glyphs:   ['bookmark-base', 'bookmark-secondary', 'bookmark-primary']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Georges',
      				total:          '50.00'})}
            <Container kind='tickets' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ({
              color:          'blue',
          		photo:          'user',
      				transportation: 'bicycle',
      				name:           'Francine',
      				total:          '68.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ({
        				type:     'drop',
        				pickTime: '13:30',
        				pickDesc: 'Icomm',
        				dropTime: '14:15',
        				dropDesc: 'Studer AG',
        				count:    4,
        				glyphs:   'warning'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ('xxx')}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ('xxx')}
              {this.getTrip (null)}
              {this.getTrip ()}
            </Container>
          </Container>

        </Container>

        <Container kind='tickets-basket' height='300px' {...this.link ()} >
          <Container kind='tickets-glue' left='50px' top='50px' rotate='10deg' {...this.link ()} >
            {this.getTrip ({
      				type:     'pick',
      				pickTime: '13:30',
      				pickDesc: 'Icomm',
      				dropTime: '14:15',
      				dropDesc: 'Studer AG',
      				count:    4,
      				glyphs:   null})}
            {this.getTrip ({
      				type:     'drop',
      				pickTime: '13:30',
      				pickDesc: 'Icomm',
      				dropTime: '14:15',
      				dropDesc: 'Studer AG',
      				count:    4,
      				glyphs:   'bookmark-base'})}
          </Container>
          <Container kind='tickets-glue' left='300px' top='50px' rotate='-2deg' {...this.link ()} >
            {this.getTrip ({
              color:    'red',
      				type:     'pick',
      				pickTime: '11:45',
      				pickDesc: 'Me Mouquin G.',
      				dropTime: '13:00',
      				dropDesc: 'Schmidt W.',
      				count:    2,
      				glyphs:   ['warning', 'bookmark-primary']})}
            {this.getTrip ({
      				type:     'drop',
      				pickTime: '11:45',
      				pickDesc: 'Me Mouquin G.',
      				dropTime: '13:00',
      				dropDesc: 'Schmidt W.',
      				count:    2,
      				glyphs:   ['bookmark-base', 'bookmark-secondary', 'bookmark-primary']})}
          </Container>
          <Container kind='tickets-glue' left='600px' top='20px' rotate='5deg' {...this.link ()} >
            {this.getTrip ({
      				type:     'pick',
      				pickTime: '11:00',
      				pickDesc: 'Migros Pont-Neuf',
      				dropTime: '11:15',
      				dropDesc: 'Chancellerie',
      				count:    1,
      				glyphs:   'warning'})}
            {this.getTrip ({
      				type:     'drop',
      				pickTime: '11:00',
      				pickDesc: 'Migros Pont-Neuf',
      				dropTime: '11:15',
      				dropDesc: 'Chancellerie',
      				count:    1,
      				glyphs:   'bookmark-secondary'})}
          </Container>
          <Container kind='tickets-glue' left='800px' top='60px' rotate='-10deg' {...this.link ()} >
            {this.getTrip ({
      				type:     'pick',
      				pickTime: '10:50',
      				pickDesc: 'Coop St. Laurent',
      				dropTime: '11:20',
      				dropDesc: 'Dupond J.',
      				count:    2,
      				glyphs:   null})}
            {this.getTrip ({
      				type:     'drop',
      				pickTime: '10:50',
      				pickDesc: 'Coop St. Laurent',
      				dropTime: '11:20',
      				dropDesc: 'Dupond J.',
      				count:    2,
      				glyphs:   ['warning', 'bookmark-primary']})}
          </Container>
        </Container>
      </Container>
    );
  }
}
