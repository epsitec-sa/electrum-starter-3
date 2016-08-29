// Mock for a typical dispatch screen.
'use strict';

import React from 'react';
import {
  Container,
  Ticket,
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
  Separator
} from 'electrum-arc';

import act from './actuators.js';

export default class Polypheme extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  menuOptions () {
    return [
      () => {
        return (<Button kind='menu-item' glyph='toggle-on' text='Options'
          {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='gear' text='Préférences'
          {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='cloud' text='Données'
          {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='desktop' text='Affichage'
          {...this.link ()} />);
      },
      () => {
        return (<Button kind='menu-item' glyph='search' text='Recherches extralucides'
          {...this.link ()} />);
      },
    ];
  }

  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    return (
      <Container kind='root' {...this.link ()} >

        <Container kind='task' {...this.link ()} >
          <Button action={act.NEXT ()} glyph='cube' text='Poly'
            kind='task-logo' {...this.link ()} />
          <Button glyph='plus-square' text='Activité'
            kind='task' badge-value='27' {...this.link ()} />
          <Button glyph='inbox' text='En cours'
            kind='task' {...this.link ()} />
        </Container>

        <Container kind='right' {...this.link ()} >

          <Container kind='main-tab' {...this.link ()} >
            <Button text='Dispo' width='160px' active='true'
              kind='main-tab' {...this.link ()} />
            <Button text='Co-dispo' width='160px' active='false'
              kind='main-tab' {...this.link ()} />
            <Button text='Facturation' width='160px' active='false'
              kind='main-tab' {...this.link ()} />
            <Button text='Clients' width='160px' active='false'
              kind='main-tab' {...this.link ()} />
            <Button text='Équipe' width='160px' active='false'
              kind='main-tab' {...this.link ()} />
          </Container>

          <Container kind='view-tab' {...this.link ()} >
            <TabButton text='Missions' active='true' {...this.link ()} />
            <TabButton text='Coursiers' active='false' {...this.link ()} />
          </Container>

          <Container kind='views' {...this.link ()} >

            <Container kind='view' {...this.link ()} >
              <Container kind='tickets' {...this.link ()} >
                <Ticket kind='header' width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Button glyph='user' kind='round' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label glyph='bicycle' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Sandra' font-weight='bold' text-color='#fff' {...this.link ()} />
                    <Label text='203.50' font-weight='bold' text-color='#fff' {...this.link ()} />
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='10:50' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Coop St. Laurent' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                      <Label glyph='warning' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:00' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Migros Pont-Neuf' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='3x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:35' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Mecatronic SA - Cheseaux' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#f00' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:45' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Jean-Paul Keiser - Renens' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='4x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#f00' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#ffd600' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='13:15' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Gare CFF' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='7x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
              </Container>
            </Container>

            <Container kind='view' {...this.link ()} >
              <Container kind='tickets' {...this.link ()} >
                <Ticket kind='header' width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Button glyph='user' kind='round' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label glyph='bicycle' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Jean-Paul' font-weight='bold' text-color='#fff' {...this.link ()} />
                    <Label text='68.00' font-weight='bold' text-color='#fff' {...this.link ()} />
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='10:10' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Fidusim SA' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#f00' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='10:30' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Dominique Fasel - Crissier' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='2x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
              </Container>
            </Container>

            <Container kind='view' {...this.link ()} >
              <Container kind='tickets' {...this.link ()} >
                <Ticket kind='header' width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Button glyph='user' kind='round' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label glyph='car' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Frédérique' font-weight='bold' text-color='#fff' {...this.link ()} />
                    <Label text='250.00' font-weight='bold' text-color='#fff' {...this.link ()} />
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='10:50' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Coop St. Laurent' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:00' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Migros Pont-Neuf' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='3x' width='150px' {...this.link ()} />
                      <Label glyph='warning' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:35' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Mecatronic SA - Cheseaux' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='11:45' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Jean-Paul Keiser - Renens' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='4x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='13:15' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Gare CFF' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='7x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#ffd600' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='14:20' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Coop St. Laurent' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                      <Label glyph='warning' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='14:50' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Migros Pont-Neuf' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='3x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='16:00' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Mecatronic SA - Cheseaux' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='1x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#f00' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='16:10' font-weight='bold' {...this.link ()} />
                    <Label glyph='download' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Jean-Paul Keiser - Renens' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='4x' width='150px' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#f00' {...this.link ()} />
                      <Label glyph='bookmark' glyph-color='#ffd600' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
                <Ticket width='300px' height='70px' {...this.link ()} >
                  <Container kind='column' grow='1' {...this.link ()} >
                    <Label text='16:45' font-weight='bold' {...this.link ()} />
                    <Label glyph='upload' {...this.link ()} />
                  </Container>
                  <Container kind='column' grow='3' {...this.link ()} >
                    <Label text='Gare CFF' {...this.link ()} />
                    <Container kind='row' {...this.link ()} >
                      <Label glyph='cube' text='7x' width='150px' {...this.link ()} />
                    </Container>
                  </Container>
                </Ticket>
              </Container>
            </Container>

          </Container>

          <Container kind='footer' {...this.link ()} >
            <Button glyph='gears' text='Options' kind='footer'
              menu={this.menuOptions ()} menu-direction='top'
              {...this.link ('options')} />
            <Label text='Marc Sandoz | 09h56' grow='1' kind='footer'
              {...this.link ()} />
            <Button glyph='ellipsis-v' kind='footer' {...this.link ()} />
            <Button glyph='clock-o' text='Missions' glyph-position='right'
              kind='footer' badge-value='92' {...this.link ()} />
          </Container>

        </Container>
      </Container>
    );
  }
}
