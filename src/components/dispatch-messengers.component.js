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
  }

  getMessenger (color, data) {
    return (
      <MessengerTicket color={color} data={data} {...this.link ()} />
    );
  }

  getTrip (color, type, data) {
    return (
      <TripTicket color={color} type={type} data={data} {...this.link ()} />
    );
  }

  render () {
    return (
      <Container kind='tickets-root' {...this.link ()} >
        <Container kind='tickets-messengers' {...this.link ()} >

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          {Glyph: 'user'},
              Transportation: {Glyph: 'bicycle'},
              Name:           'Sandra',
              Total:          '203.50'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ('selected', 'pick', {
                Pick: {
                  Time: '10:50',
                  Desc: 'Coop St. Laurent'},
                Drop:  {
                  Time: '11:20',
                  Desc: 'Dupond J.'},
                Count:    2,
                Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip ('selected', 'drop', {
                Pick: {
                  Time: '11:00',
                  Desc: 'Migros Pont-Neuf'},
                Drop: {
                  Time: '11:15',
                  Desc: 'Chancellerie'},
                Count:    1,
                Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-base'}]})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '11:20',
                  Desc: 'PolyAugrien'},
                Drop: {
                  Time: '11:45',
                  Desc: 'Burdet A.'},
                Count:    3,
                Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip (null, 'pick', {
                Pick: {
                  Time: '11:45',
                  Desc: 'Me Mouquin G.'},
                Drop: {
                  Time: '13:00',
                  Desc: 'Schmidt W.'},
                Count:    1,
                Glyphs:   null})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '13:30',
                  Desc: 'Icomm'},
                Drop: {
                  Time: '14:15',
                  Desc: 'Studer AG'},
                Count:    1,
                Glyphs:   [{Glyph: 'bookmark-secondary'}, {Glyph: 'bookmark-primary'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          {Glyph: 'user'},
              Transportation: {Glyph: 'bicycle'},
              Name:           'Jean-Paul',
              Total:          '68.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '11:00',
                  Desc: 'Migros Pont-Neuf'},
                Drop: {
                  Time: '11:15',
                  Desc: 'Chancellerie'},
                Count:    1,
                Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Desc: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Desc: 'Schmidt W.'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-base'}, {Glyph: 'bookmark-secondary'}, {Glyph: 'bookmark-primary'}]})}
              {this.getTrip (null, 'drop', {
                Pick: {
                  Time: '13:30',
                  Desc: 'Icomm'},
                Drop: {
                  Time: '14:15',
                  Desc: 'Studer AG'},
                Count:    4,
                Glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
              Photo:          {Glyph: 'user-secret'},
              Transportation: {Glyph: 'car'},
              Name:           'Frédérique',
              Total:          '250.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ('selected', 'pick', {
                Pick: {
                  Time: '10:15',
                  Desc: 'Coop St. Laurent'},
                Drop: {
                  Time: '10:55',
                  Desc: 'Dupond J.'},
                Count:    1,
                Glyphs:   [{Glyph: 'bookmark-primary'}]})}
              {this.getTrip ('selected', 'pick', {
				        Pick: {
          				Time: '10:50',
          				Desc: 'Coop St. Laurent'},
				        Drop: {
          				Time: '11:20',
          				Desc: 'Dupond J.'},
        				Count:    2,
        				Glyphs:   null})}
              {this.getTrip ('selected', 'drop', {
				        Pick: {
          				Time: '11:00',
          				Desc: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Desc: 'Chancellerie'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-secondary'}]})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Desc: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Desc: 'Burdet A.'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip ('green', 'pick', {
				        Pick: {
          				Time: '11:45',
          				Desc: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Desc: 'Schmidt W.'},
        				Count:    2,
        				Glyphs:   null})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    1,
        				Glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
      				Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Marcel',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
      				Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'truck'},
      				Name:           'Simone',
      				Total:          '100.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          	  Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Jean-Louis',
      				Total:          '400.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'bookmark-primary'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger ('yellow', {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Chantal',
      				Total:          '95.20'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip ('yellow', 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip ('yellow', 'drop', {
				        Pick: {
          				Time: '11:00',
          				Desc: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Desc: 'Chancellerie'},
        				Count:    1,
        				Glyphs:   null})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Desc: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Desc: 'Burdet A.'},
        				Count:    1,
        				Glyphs:   null})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Desc: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Desc: 'Schmidt W.'},
        				Count:    2,
        				Glyphs:   [{Glyph: 'bookmark-base'}, {Glyph: 'bookmark-secondary'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Béatrice',
      				Total:          '20.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'rocket'},
      				Name:           'Zoé',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Marc',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '08:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '09:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'bookmark-secondary'}]})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '10:50',
          				Desc: 'Coop St. Laurent'},
				        Drop: {
          				Time: '11:20',
          				Desc: 'Dupond J.'},
        				Count:    2,
        				Glyphs:   null})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:00',
          				Desc: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Desc: 'Chancellerie'},
        				Count:    1,
        				Glyphs:   null})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:20',
          				Desc: 'PolyAugrien'},
				        Drop: {
          				Time: '11:45',
          				Desc: 'Burdet A.'},
        				Count:    3,
        				Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Desc: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Desc: 'Schmidt W.'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'bookmark-base'}, {Glyph: 'bookmark-primary'}]})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-base'}, {Glyph: 'bookmark-secondary'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Victor',
      				Total:          '630.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   null})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'car'},
      				Name:           'Jacques',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '10:50',
          				Desc: 'Coop St. Laurent'},
				        Drop: {
          				Time: '11:20',
          				Desc: 'Dupond J.'},
        				Count:    2,
        				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-primary'}]})}
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '11:00',
          				Desc: 'Migros Pont-Neuf'},
				        Drop: {
          				Time: '11:15',
          				Desc: 'Chancellerie'},
        				Count:    1,
        				Glyphs:   [{Glyph: 'warning'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'car'},
      				Name:           'Samuel',
      				Total:          '0.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   null})}
              {this.getTrip (null, 'pick', {
				        Pick: {
          				Time: '11:45',
          				Desc: 'Me Mouquin G.'},
				        Drop: {
          				Time: '13:00',
          				Desc: 'Schmidt W.'},
        				Count:    2,
        				Glyphs:   [{Glyph: 'bookmark-base'}, {Glyph: 'bookmark-secondary'}, {Glyph: 'bookmark-primary'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Georges',
      				Total:          '50.00'})}
            <Container kind='tickets' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, {
          		Photo:          {Glyph: 'user'},
      				Transportation: {Glyph: 'bicycle'},
      				Name:           'Francine',
      				Total:          '68.00'})}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, 'drop', {
				        Pick: {
          				Time: '13:30',
          				Desc: 'Icomm'},
				        Drop: {
          				Time: '14:15',
          				Desc: 'Studer AG'},
        				Count:    4,
        				Glyphs:   [{Glyph: 'warning'}]})}
            </Container>
          </Container>

          <Container kind='tickets-messenger' {...this.link ()} >
            {this.getMessenger (null, null, 'xxx')}
            <Container kind='tickets-trips' {...this.link ()} >
              {this.getTrip (null, null, 'xxx')}
              {this.getTrip (null, null, null)}
              {this.getTrip ()}
            </Container>
          </Container>

        </Container>

        <Container kind='tickets-basket' height='300px' {...this.link ()} >
          <Container kind='tickets-glue' left='50px' top='50px' rotate='10deg' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '13:30',
        				Desc: 'Icomm'},
				      Drop: {
        				Time: '14:15',
        				Desc: 'Studer AG'},
      				Count:    4,
      				Glyphs:   null})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '13:30',
        				Desc: 'Icomm'},
				      Drop: {
        				Time: '14:15',
        				Desc: 'Studer AG'},
      				Count:    4,
      				Glyphs:   [{Glyph: 'bookmark-base'}]})}
          </Container>
          <Container kind='tickets-glue' left='300px' top='50px' rotate='-2deg' {...this.link ()} >
            {this.getTrip ('red', 'pick', {
				      Pick: {
        				Time: '11:45',
        				Desc: 'Me Mouquin G.'},
				      Drop: {
        				Time: '13:00',
        				Desc: 'Schmidt W.'},
      				Count:    2,
      				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-primary'}]})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '11:45',
        				Desc: 'Me Mouquin G.'},
				      Drop: {
        				Time: '13:00',
        				Desc: 'Schmidt W.'},
      				Count:    2,
      				Glyphs:   [{Glyph: 'bookmark-base'}, {Glyph: 'bookmark-secondary'}, {Glyph: 'bookmark-primary'}]})}
          </Container>
          <Container kind='tickets-glue' left='600px' top='20px' rotate='5deg' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '11:00',
        				Desc: 'Migros Pont-Neuf'},
				      Drop: {
        				Time: '11:15',
        				Desc: 'Chancellerie'},
      				Count:    1,
      				Glyphs:   [{Glyph: 'warning'}]})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '11:00',
        				Desc: 'Migros Pont-Neuf'},
				      Drop: {
        				Time: '11:15',
        				Desc: 'Chancellerie'},
      				Count:    1,
      				Glyphs:   [{Glyph: 'bookmark-secondary'}]})}
          </Container>
          <Container kind='tickets-glue' left='800px' top='60px' rotate='-10deg' {...this.link ()} >
            {this.getTrip (null, 'pick', {
				      Pick: {
        				Time: '10:50',
        				Desc: 'Coop St. Laurent'},
				      Drop: {
        				Time: '11:20',
        				Desc: 'Dupond J.'},
      				Count:    2,
      				Glyphs:   null})}
            {this.getTrip (null, 'drop', {
				      Pick: {
        				Time: '10:50',
        				Desc: 'Coop St. Laurent'},
				      Drop: {
        				Time: '11:20',
        				Desc: 'Dupond J.'},
      				Count:    2,
      				Glyphs:   [{Glyph: 'warning'}, {Glyph: 'bookmark-primary'}]})}
          </Container>
        </Container>
      </Container>
    );
  }
}
