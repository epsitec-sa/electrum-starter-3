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
  TripTickets,
  MessengerTicket,
  TripBox,
  DragController,
  Splitter
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

  getTripBox (selected, data) {
    data.Pick.Glyphs = this.getGlyphEntities (data.Pick.Glyphs);
    data.Drop.Glyphs = this.getGlyphEntities (data.Drop.Glyphs);
    data.PriceGlyphs = this.getGlyphEntities (data.PriceGlyphs);
    const d = {
      Trip:   data,
      NoDrag: 'false'
    };
    return (
      <TripBox Selected={selected} data={d} {...this.link ()} />
    );
  }

  getMessenger (color, data) {
    data.Photo          = this.getGlyphEntitySolo (data.Photo);
    data.Transportation = this.getGlyphEntitySolo (data.Transportation);
    return (
      <MessengerTicket Color={color} data={data} ticket-id='messenger' {...this.link ()} />
    );
  }

  getTrip (ticketId, tripId, color, type, data) {
    data.Pick.Glyphs = this.getGlyphEntities (data.Pick.Glyphs);
    data.Drop.Glyphs = this.getGlyphEntities (data.Drop.Glyphs);
    const d = {
      Color:  color,
      Type:   type,
      Trip:   data,
      NoDrag: color === 'selected' ? 'true' : 'false',
    };

    return (
      <TripTicket data={d} ticket-id={ticketId} trip-id={tripId} {...this.link ()} />
    );
  }

  getTrips (tripId, data) {
    data.Pick.Glyphs = this.getGlyphEntities (data.Pick.Glyphs);
    data.Drop.Glyphs = this.getGlyphEntities (data.Drop.Glyphs);
    const dp = {
      Color:  null,
      Type:   'pick',
      Trip:   data,
      NoDrag: 'false',
    };
    const dd = {
      Color:  null,
      Type:   'drop',
      Trip:   data,
      NoDrag: 'false',
    };
    const d = {
      Pick: dp,
      Drop: dd,
    };

    return (
      <TripTickets data={d} trip-id={tripId} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <DragController name='tickets' drag-handle='TripTicket' {...this.link ()} />
        <DragController name='messengers' direction='horizontal' drag-handle='MessengerTicket' {...this.link ()} />
        <Splitter kind='horizontal' default-size='60%' {...this.link ()} >
          <Container kind='tickets-messengers' drag-controller='messengers' {...this.link ()} >
            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
              Photo:          'user',
              Transportation: 'bicycle',
              Name:           'Jean-Louis',
              Total:          '400.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrips ('trips222a', {
                  Pick: {
                    Time: '13:40',
                    Description: 'Tagada & Cie'},
                  Drop: {
                    Time: '16:00',
                    Description: 'Micro AG'},
                  Count:    '3x'})}
                {this.getTrips ('trips222b', {
                  Pick: {
                    Time: '14:15',
                    Description: 'Mercier J.',
                    Glyphs:   ['bookmark-base']},
                  Drop: {
                    Time: '17:15',
                    Description: 'Flagada & Co',
                    Glyphs:   ['warning']},
                  Count:    '1x'})}
                {this.getTrips ('trips222c', {
                  Pick: {
                    Time: '16:00',
                    Description: 'Radio Flamme'},
                  Drop: {
                    Time: '17:00',
                    Description: 'Koala P.',
                    Glyphs:   ['bookmark-secondary', 'bookmark-primary']},
                  Count:    '1x'})}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user',
                Transportation: 'bicycle',
                Name:           'Sandra',
                Total:          '203.50'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrips ('trips1', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm',
                    Glyphs:   ['warning']},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG',
                    Glyphs:   ['bookmark-secondary', 'bookmark-primary']},
                  Count:    '1x'})}
                {this.getTrip ('1', 't1', 'selected', 'pick', {
                  Pick: {
                    Time: '2016-03-31T10:51:00',
                    Description: 'Coop St. Laurent',
                    Glyphs:   ['warning']},
                  Drop:  {
                    Time: '11:20',
                    Description: 'Dupond J.',
                    Zone: {Name: 'Zone A'}},
                  Count:    '2x'})}
                {this.getTrip ('2', 't2', 'selected', 'drop', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Burdet H.',
                    Glyphs:   ['warning', 'bookmark-base']},
                  Count:    '1x'})}
                {this.getTrip ('3', 't3', null, 'pick', {
                  Pick: {
                    Time: '11:20',
                    Description: 'PolyAugrien'},
                  Drop: {
                    Time: '11:45',
                    Description: 'Burdet A.',
                    Glyphs:   ['warning']},
                  Count:    '3x'})}
                {this.getTrip ('4', 't3', null, 'drop', {
                  Pick: {
                    Time: '11:20',
                    Description: 'PolyAugrien'},
                  Drop: {
                    Time: '11:45',
                    Description: 'Burdet A.',
                    Glyphs:   ['warning']},
                  Count:    '3x'})}
                {this.getTrip ('5', 't6', null, 'pick', {
                  Pick: {
                    Time: '11:45',
                    Description: 'Mecano SA',
                    Zone: {Name: 'Zone B'}},
                  Drop: {
                    Time: '13:00',
                    Description: 'Dubosson F.'},
                  Count:    '1x'})}
                {this.getTrip ('6', 't7', null, 'pick', {
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
                Transportation: 'bicycle',
                Name:           'Jean-Paul',
                Total:          '68.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('7', 't11', null, 'pick', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG'},
                  Count:    '4x'})}
                {this.getTrip ('8', 't7', null, 'drop', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie',
                    Glyphs:   ['warning']},
                  Count:    '1x'})}
                {this.getTrip ('9', 't5', 'red', 'pick', {
                  Pick: {
                    Time: '11:45',
                    Description: 'Me Mouquin G.',
                    Glyphs:   ['warning', 'bookmark-base', 'bookmark-secondary', 'bookmark-primary']},
                  Drop: {
                    Time: '13:00',
                    Description: 'Schmidt W.'},
                  Count:    '1x'})}
                {this.getTrip ('10', 't11', null, 'drop', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG'},
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
                {this.getTrip ('21', 'x1', 'yellow', 'pick', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG',
                    Glyphs:   ['warning']},
                  Count:    '1x'})}
                {this.getTrip ('21b', 'x1', 'yellow', 'drop', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG',
                    Glyphs:   ['warning']},
                  Count:    '1x'})}
                {this.getTrip ('22', 'x2', null, 'pick', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie'},
                  Count:    '1x'})}
                {this.getTrip ('22b', 'x2', null, 'drop', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie'},
                  Count:    '1x'})}
                {this.getTrip ('23', 'x3', null, 'pick', {
                  Pick: {
                    Time: '11:20',
                    Description: 'PolyAugrien'},
                  Drop: {
                    Time: '11:45',
                    Description: 'Burdet A.'},
                  Count:    '1x'})}
                {this.getTrip ('23b', 'x3', null, 'drop', {
                  Pick: {
                    Time: '11:20',
                    Description: 'PolyAugrien'},
                  Drop: {
                    Time: '11:45',
                    Description: 'Burdet A.'},
                  Count:    '1x'})}
              </Container>
            </Container>

            <Container kind='tickets-messenger' {...this.link ()} >
              {this.getMessenger (null, {
                Photo:          'user-secret',
                Transportation: 'car',
                Name:           'Frédérique',
                Total:          '250.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('11', 't1', 'selected', 'pick', {
                  Pick: {
                    Time: '10:15',
                    Description: 'Coop St. Laurent',
                    Glyphs:   ['bookmark-primary']},
                  Drop: {
                    Time: '10:55',
                    Description: 'Dupond J.'},
                  Count:    '1x'})}
                {this.getTrip ('12', 't2', 'selected', 'pick', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Burdet H.',
                    Glyphs:   ['warning', 'bookmark-base']},
                  Count:    '1x'})}
                {this.getTrip ('13', 't8', 'selected', 'drop', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie',
                    Glyphs:   ['warning', 'bookmark-secondary']},
                  Count:    '1x'})}
                {this.getTrip ('14', 't6', null, 'drop', {
                  Pick: {
                    Time: '11:45',
                    Description: 'Mecano SA',
                    Zone: {Name: 'Zone B'}},
                  Drop: {
                    Time: '13:00',
                    Description: 'Dubosson F.'},
                  Count:    '1x'})}
                {this.getTrip ('15', 't5', 'green', 'pick', {
                  Pick: {
                    Time: '11:45',
                    Description: 'Me Mouquin G.'},
                  Drop: {
                    Time: '13:00',
                    Description: 'Schmidt W.'},
                  Count:    '2x'})}
                {this.getTrip ('16', null, null, 'drop', {
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
                {this.getTrip ('17', 't8', null, 'pick', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie',
                    Glyphs:   ['warning', 'bookmark-secondary']},
                  Count:    '1x'})}
                {this.getTrip ('18', 't14', null, 'drop', {
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
                {this.getTrip ('19', 't14', null, 'pick', {
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
              Name:           'Béatrice',
              Total:          '20.00'})}
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('25', null, null, 'drop', {
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
                {this.getTrip ('26', null, null, 'drop', {
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
                {this.getTrip ('27', null, null, 'drop', {
                  Pick: {
                    Time: '08:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '09:15',
                    Description: 'Studer AG',
                    Glyphs:   ['bookmark-secondary']},
                  Count:    '4x'})}
                {this.getTrip ('28', null, null, 'pick', {
                  Pick: {
                    Time: '10:50',
                    Description: 'Coop St. Laurent'},
                  Drop: {
                    Time: '11:20',
                    Description: 'Dupond J.'},
                  Count:    '1x'})}
                {this.getTrip ('29', null, null, 'drop', {
                  Pick: {
                    Time: '11:00',
                    Description: 'Migros Pont-Neuf'},
                  Drop: {
                    Time: '11:15',
                    Description: 'Chancellerie'},
                  Count:    '1x'})}
                {this.getTrip ('30', null, null, 'drop', {
                  Pick: {
                    Time: '11:20',
                    Description: 'PolyAugrien'},
                  Drop: {
                    Time: '11:45',
                    Description: 'Burdet A.',
                    Glyphs:   ['warning']},
                  Count:    '3x'})}
                {this.getTrip ('31', null, null, 'pick', {
                  Pick: {
                    Time: '11:45',
                    Description: 'Me Mouquin G.',
                    Glyphs:   ['bookmark-base', 'bookmark-primary']},
                  Drop: {
                    Time: '13:00',
                    Description: 'Schmidt W.'},
                  Count:    '1x'})}
                {this.getTrip ('32', null, null, 'drop', {
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
                {this.getTrip ('33', null, null, 'drop', {
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
                {this.getTrip ('34', null, null, 'drop', {
                  Pick: {
                    Time: '13:30',
                    Description: 'Icomm'},
                  Drop: {
                    Time: '14:15',
                    Description: 'Studer AG',
                    Glyphs:   ['warning']},
                  Count:    '2x'})}
                {this.getTrip ('35', null, null, 'pick', {
                  Pick: {
                    Time: '10:50',
                    Description: 'Coop St. Laurent',
                    Glyphs:   ['warning', 'bookmark-primary']},
                  Drop: {
                    Time: '11:20',
                    Description: 'Dupond J.'},
                  Count:    '1x'})}
                {this.getTrip ('36', null, null, 'drop', {
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
                {this.getTrip ('37', null, null, 'drop', {
  				        Pick: {
            				Time: '13:30',
            				Description: 'Icomm'},
  				        Drop: {
            				Time: '14:15',
            				Description: 'Studer AG'},
          				Count:    '1x'})}
                {this.getTrip ('38', null, null, 'pick', {
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
              <Container kind='tickets-trips' drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('39', null, null, 'drop', {
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
                {this.getTrip ('40', 'null', null, 'drop', {
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
          <Splitter kind='vertical' default-size='750px' min-size='10px' {...this.link ()} >
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
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '2016-03-31T10:51:00',
                      Description: 'Coop St. Laurent',
                      Zone:    {Name: 'Zone A'},
                      Glyphs:  ['phone-square', 'bookmark-secondary']},
                    Drop: {
                      Time:    '11:20',
                      Description: 'Dupond J.',
                      Glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                    Count:       '2 pces',
                    Weight:      '1.3 kg',
                    Price:       '100.00',
                    PriceGlyphs: ['warning']})}
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '11:00',
                      Description: 'Migros Plein-Palais',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['bookmark-base']},
                    Drop: {
                      Time:    '11:35',
                      Description: 'Alfred D.',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['bookmark-base', 'bookmark-primary']},
                    Count:       '1 pce',
                    Weight:      '0.2 kg',
                    Price:       '30.00',
                    PriceGlyphs: null})}
                  {this.getTripBox ('true', {
                    Pick: {
                      Time:    '11:15',
                      Description: 'Icomm',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  null},
                    Drop: {
                      Time:    '12:00',
                      Description: 'Studer AG',
                      Zone:    {Name: 'Zone A'},
                      Glyphs:  ['bookmark-base', 'bookmark-primary']},
                    Count:       '2 pces',
                    Weight:      '1.2 kg',
                    Price:       '130.00',
                    PriceGlyphs: null})}
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '11:45',
                      Description: 'Burder A.',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['bookmark-primary']},
                    Drop: {
                      Time:    '13:15',
                      Description: 'PolyAugrien',
                      Glyphs:  ['phone-square']},
                    Count:       '2 pces',
                    Weight:      '1.2 kg',
                    Price:       '130.00',
                    PriceGlyphs: null})}
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '14:00',
                      Description: 'Coop St. Laurent',
                      Zone:    {Name: 'Zone A'},
                      Glyphs:  ['bookmark-secondary']},
                    Drop: {
                      Time:    '14:50',
                      Description: 'Dupond J.',
                      Zone:    {Name: 'Zone C'},
                      Glyphs:  ['phone-square', 'bookmark-primary']},
                    Count:       '2 pces',
                    Weight:      '1.3 kg',
                    Price:       '120.00',
                    PriceGlyphs: ['warning']})}
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '14:30',
                      Description: 'Migros Plein-Palais',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['bookmark-primary']},
                    Drop: {
                      Time:    '15:05',
                      Description: 'Alfred D.',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['usd']},
                    Count:       '1 pce',
                    Weight:      '1.0 kg',
                    Price:       '75.00',
                    PriceGlyphs: null})}
                  {this.getTripBox (false, {
                    Pick: {
                      Time:    '15:00',
                      Description: 'Migros Pont-Neuf',
                      Zone:    {Name: 'Zone A'},
                      Glyphs:  ['bookmark-secondary']},
                    Drop: {
                      Time:    '17:30',
                      Description: 'Alfred D.',
                      Zone:    {Name: 'Zone B'},
                      Glyphs:  ['usd', 'bookmark-base', 'bookmark-primary']},
                    Count:       '5 pces',
                    Weight:      '10.0 kg',
                    Price:       '250.00',
                    PriceGlyphs: null})}
                </Container>
              </Container>
            </Container>
            <Container kind='tickets-basket' {...this.link ()} >
              <Container kind='tickets-glue' left='30px' top='50px' rotate='10deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
                {this.getTrips ('trips10', {
    				      Pick: {
            				Time: '13:30',
            				Description: 'Icomm'},
    				      Drop: {
            				Time: '14:15',
            				Description: 'Studer AG'},
          				Count:    '2x'})}
              </Container>
              <Container kind='tickets-glue' left='280px' top='50px' rotate='-2deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
                {this.getTrip ('42', 'tt11', null, 'pick', {
                  TripId: 't109',
    				      Pick: {
            				Time: '11:45',
            				Description: 'Me Mouquin G.',
            				Glyphs:   ['warning', 'bookmark-primary']},
    				      Drop: {
            				Time: '13:00',
            				Description: 'Schmidt W.'},
          				Count:    '1x'})}
                  {this.getTrip ('43', 'tt11', null, 'drop', {
                    TripId: 't109',
      				      Pick: {
              				Time: '11:45',
              				Description: 'Me Mouquin G.',
              				Glyphs:   ['warning', 'bookmark-primary']},
      				      Drop: {
              				Time: '13:00',
              				Description: 'Schmidt W.'},
            				Count:    '1x'})}
              </Container>
              <Container kind='tickets-glue' left='530px' top='20px' rotate='5deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
                {this.getTrips ('trips11', {
    				      Pick: {
            				Time: '11:00',
            				Description: 'Migros Pont-Neuf',
            				Glyphs:   ['warning']},
    				      Drop: {
            				Time: '11:15',
            				Description: 'Chancellerie'},
          				Count:    '1x'})}
              </Container>
              <Container kind='tickets-glue' left='750px' top='60px' rotate='-10deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
                {this.getTrips ('trips12', {
    				      Pick: {
            				Time: '10:50',
            				Description: 'Coop St. Laurent'},
    				      Drop: {
            				Time: '11:20',
            				Description: 'Dupond J.'},
          				Count:    '1x'})}
              </Container>
              <Container kind='tickets-glue' left='990px' top='50px' rotate='5deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1210px' top='70px' rotate='-4deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1450px' top='30px' rotate='0deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1690px' top='30px' rotate='10deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='20px' top='260px' rotate='-5deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='260px' top='250px' rotate='10deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='520px' top='250px' rotate='2deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='750px' top='300px' rotate='5deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='980px' top='250px' rotate='-10deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1200px' top='280px' rotate='3deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1420px' top='250px' rotate='-4deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
              <Container kind='tickets-glue' left='1670px' top='250px' rotate='5deg'
                min-width='220px' min-height='164px'
                drag-controller='tickets' {...this.link ()} >
              </Container>
            </Container>
          </Splitter>
        </Splitter>
      </Container>
    );
  }
}
