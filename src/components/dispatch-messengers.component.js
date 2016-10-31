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
  TripTicket,
  MessengerTicket,
  Splitter,
  DragController
} from 'electrum-arc';

export default class DispatchMessengers extends React.Component {

  constructor (props) {
    super (props);
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

  getGlyphEntity(glyph) {
    if (glyph) {
      return {
        id:     'foo',
        offset: 0,
        value:  {
          Glyph:       glyph,
          Name:        'Glyph ' + glyph,
          Description: 'Generated by electrum-dev'
        }};
    } else {
      return null;
    }
  }

  getGlyphEntities(glyphs) {
    if (glyphs) {
      var array = [];
      glyphs.forEach (g => {
        array.push (this.getGlyphEntity (g));
      });
      return array;
    } else {
      return null;
    }
  }

  getMessenger (color, data) {
    data.Photo          = this.getGlyphEntitySolo (data.Photo);
    data.Transportation = this.getGlyphEntitySolo (data.Transportation);
    return (
      <MessengerTicket Color={color} data={data} {...this.link ()} />
    );
  }

  getTrip (color, type, data) {
    data.Pick.Glyphs = this.getGlyphEntities (data.Pick.Glyphs);
    data.Drop.Glyphs = this.getGlyphEntities (data.Drop.Glyphs);
    const d = {
      Color: color,
      Type:  type,
      Trip:  data,
      NotDraggable: color === 'selected' ? 'true' : 'false'
    };

    return (
      <TripTicket data={d} {...this.link ()} />
    );
  }



  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <DragController name='tickets' drag-handle='TripTicket' {...this.link ()} />
        <DragController name='messengers' direction='horizontal' drag-handle='MessengerTicket' {...this.link ()} />
        <Container kind='tickets-messengers' drag-controller='messengers'  {...this.link ()} >
          <Container kind='tickets-messenger'  {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Sandra',
              Total:          '203.50'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip ('selected', 'pick', {
                Pick: {
                  Time: '2016-03-31T10:51:00',
                  Description: 'Coop St. Laurent',
                  Glyphs:   ['warning']},
                Drop:  {
                  Time: '11:20',
                  Description: 'Dupond J.',
                  Zone: {Name: 'Zone A'}},
                Count:    '2x'})}
              {this.getTrip ('selected', 'drop', {
                Pick: {
                  Time: '11:00',
                  Description: 'Migros Pont-Neuf'},
                Drop: {
                  Time: '11:15',
                  Description: 'Chancellerie',
                  Glyphs:   ['warning', 'bookmark-base']},
                Count:    '1x'})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '11:20',
                  Description: 'PolyAugrien'},
                Drop: {
                  Time: '11:45',
                  Description: 'Burdet A.',
                  Glyphs:   ['warning']},
                Count:    '3x'})}
              {this.getTrip (null, 'pick', {
                Pick: {
                  Time: '11:45',
                  Description: 'Me Mouquin G.',
                  Zone: {Name: 'Zone B'}},
                Drop: {
                  Time: '13:00',
                  Description: 'Schmidt W.'},
                Count:    '1x'})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '13:30',
                  Description: 'Icomm'},
                Drop: {
                  Time: '14:15',
                  Description: 'Studer AG',
                  Glyphs:   ['bookmark-secondary', 'bookmark-primary']},
                Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Jean-Paul',
              Total:          '68.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '11:00',
                  Description: 'Migros Pont-Neuf'},
                Drop: {
                  Time: '11:15',
                  Description: 'Chancellerie',
                  Glyphs:   ['warning']},
                Count:    '1x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Description: 'Me Mouquin G.',
          				Glyphs:   ['warning', 'bookmark-base', 'bookmark-secondary', 'bookmark-primary']},
				        Drop: {
          				Time: '13:00',
          				Description: 'Schmidt W.'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '13:30',
                  Description: 'Icomm'},
                Drop: {
                  Time: '14:15',
                  Description: 'Studer AG'},
                Count:    '4x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger'  {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          'user-secret',
              Transportation: 'car',
              Name:           'Frédérique',
              Total:          '250.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip ('selected', 'pick', {
                Pick: {
                  Time: '10:15',
                  Description: 'Coop St. Laurent',
                  Glyphs:   ['bookmark-primary']},
                Drop: {
                  Time: '10:55',
                  Description: 'Dupond J.'},
                Count:    '1x'})}
              {this.getTrip ('selected', 'pick', {
				        Pick: {
          				Time: '10:50',
          				Description: 'Coop St. Laurent'},
				        Drop: {
          				Time: '11:20',
          				Description: 'Dupond J.'},
        				Count:    '2x'})}
              {this.getTrip ('selected', 'drop', {
				        Pick: {
          				Time: '11:00',
          				Description: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Description: 'Chancellerie',
          				Glyphs:   ['warning', 'bookmark-secondary']},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Description: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Description: 'Burdet A.',
          				Glyphs:   ['warning']},
        				Count:    '1x'})}
              {this.getTrip ('green', 'pick', {
				        Pick: {
          				Time: '11:45',
          				Description: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Description: 'Schmidt W.'},
        				Count:    '2x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
      				Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Marcel',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '4x',
        				Glyphs:   ['warning']})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
      				Photo:          'user',
      				Transportation: 'truck',
      				Name:           'Simone',
      				Total:          '100.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          	  Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Jean-Louis',
      				Total:          '400.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['bookmark-primary']},
        				Count:    '4x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ('yellow', {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Chantal',
      				Total:          '95.20'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip ('yellow', 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning']},
        				Count:    '1x'})}
              {this.getTrip ('yellow', 'drop', {
				        Pick: {
          				Time: '11:00',
          				Description: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Description: 'Chancellerie'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Description: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Description: 'Burdet A.'},
        				Count:    '1x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Description: 'Me Mouquin G.',
          				Glyphs:   ['bookmark-base', 'bookmark-secondary']},
				        Drop: {
          				Time: '13:00',
          				Description: 'Schmidt W.'},
        				Count:    '2x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Béatrice',
      				Total:          '20.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning']},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'rocket',
      				Name:           'Zoé',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '2x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Marc',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '08:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '09:15',
          				Description: 'Studer AG',
          				Glyphs:   ['bookmark-secondary']},
        				Count:    '4x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '10:50',
          				Description: 'Coop St. Laurent'},
				        Drop: {
          				Time: '11:20',
          				Description: 'Dupond J.'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:00',
          				Description: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Description: 'Chancellerie'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Description: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Description: 'Burdet A.',
          				Glyphs:   ['warning']},
        				Count:    '3x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Description: 'Me Mouquin G.',
          				Glyphs:   ['bookmark-base', 'bookmark-primary']},
				        Drop: {
          				Time: '13:00',
          				Description: 'Schmidt W.'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning', 'bookmark-base', 'bookmark-secondary']},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Victor',
      				Total:          '630.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'car',
      				Name:           'Jacques',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning']},
        				Count:    '2x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '10:50',
          				Description: 'Coop St. Laurent',
          				Glyphs:   ['warning', 'bookmark-primary']},
				        Drop: {
          				Time: '11:20',
          				Description: 'Dupond J.'},
        				Count:    '1x'})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:00',
          				Description: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Description: 'Chancellerie',
          				Glyphs:   ['warning']},
        				Count:    '1x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'car',
      				Name:           'Samuel',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG'},
        				Count:    '1x'})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Description: 'Me Mouquin G.',
          				Glyphs:   ['bookmark-base', 'bookmark-secondary', 'bookmark-primary']},
				        Drop: {
          				Time: '13:00',
          				Description: 'Schmidt W.'},
        				Count:    '2x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Georges',
      				Total:          '50.00'})}
            <Container kind='tickets'  drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning']},
        				Count:    '4x'})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          'user',
      				Transportation: 'bicycle',
      				Name:           'Francine',
      				Total:          '68.00'})}
            <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Description: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Description: 'Studer AG',
          				Glyphs:   ['warning']},
        				Count:    '1x'})}
            </Container>
          </Container>

        </Container>

        <Container kind='tickets-basket'  height='300px' {...this.link ()} >
          <Container kind='tickets-glue' left='50px' top='50px' rotate='10deg' drag-controller='tickets' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '13:30',
        				Description: 'Icomm'},
				      Drop: {
        				Time: '14:15',
        				Description: 'Studer AG'},
      				Count:    '2x'})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '13:30',
        				Description: 'Icomm'},
				      Drop: {
        				Time: '14:15',
        				Description: 'Studer AG',
        				Glyphs:   ['bookmark-base']},
      				Count:    '1x'})}
          </Container>
          <Container kind='tickets-glue' left='300px' top='50px' rotate='-2deg' drag-controller='tickets' {...this.link ()} >
            {this.getTrip ('red', 'pick', {
				      Pick: {
        				Time: '11:45',
        				Description: 'Me Mouquin G.',
        				Glyphs:   ['warning', 'bookmark-primary']},
				      Drop: {
        				Time: '13:00',
        				Description: 'Schmidt W.'},
      				Count:    '1x'})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '11:45',
        				Description: 'Me Mouquin G.'},
				      Drop: {
        				Time: '13:00',
        				Description: 'Schmidt W.',
        				Glyphs:   ['bookmark-base', 'bookmark-secondary', 'bookmark-primary']},
      				Count:    '2x'})}
          </Container>
          <Container kind='tickets-glue' left='600px' top='20px' rotate='5deg' drag-controller='tickets' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '11:00',
        				Description: 'Migros Pont-Neuf',
        				Glyphs:   ['warning']},
				      Drop: {
        				Time: '11:15',
        				Description: 'Chancellerie'},
      				Count:    '1x'})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '11:00',
        				Description: 'Migros Pont-Neuf'},
				      Drop: {
        				Time: '11:15',
        				Description: 'Chancellerie',
        				Glyphs:   ['bookmark-secondary']},
      				Count:    '1x'})}
          </Container>
          <Container kind='tickets-glue' left='800px' top='60px' rotate='-10deg' drag-controller='tickets' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '10:50',
        				Description: 'Coop St. Laurent'},
				      Drop: {
        				Time: '11:20',
        				Description: 'Dupond J.'},
      				Count:    '1x'})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '10:50',
        				Description: 'Coop St. Laurent'},
				      Drop: {
        				Time: '11:20',
        				Description: 'Dupond J.',
        				Glyphs:   ['warning', 'bookmark-primary']},
      				Count:    '2x'})}
          </Container>
        </Container>
      </Container>
    );
  }
}
