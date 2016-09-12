// Co-dispatch view. 1234
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
  Ticket
} from 'electrum-arc';

export default class Dispatch extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Container kind='views' {...this.link ()} >

        <Container kind='view' {...this.link ()} >
          <Container kind='tickets' {...this.link ()} >
            <Ticket kind='header' width='300px' height='90px' {...this.link ()} >
              <Container kind='column' grow='2' {...this.link ()} >
                <Button glyph='user' kind='identity' {...this.link ()} />
              </Container>
              <Container kind='column' grow='1' {...this.link ()} >
                <Label glyph='bicycle' glyph-size='150%' {...this.link ()} />
              </Container>
              <Container kind='column' grow='3' {...this.link ()} >
                <Label text='Sandra' font-weight='bold' text-color='#fff' {...this.link ()} />
                <Label text='203.50' font-weight='bold' text-color='#fff' {...this.link ()} />
              </Container>
            </Ticket>
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket kind='header' width='300px' height='90px' {...this.link ()} >
              <Container kind='column' grow='2' {...this.link ()} >
                <Button glyph='user' kind='identity' {...this.link ()} />
              </Container>
              <Container kind='column' grow='1' {...this.link ()} >
                <Label glyph='bicycle' glyph-size='150%' {...this.link ()} />
              </Container>
              <Container kind='column' grow='3' {...this.link ()} >
                <Label text='Jean-Paul' font-weight='bold' text-color='#fff' {...this.link ()} />
                <Label text='68.00' font-weight='bold' text-color='#fff' {...this.link ()} />
              </Container>
            </Ticket>
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket kind='header' width='300px' height='90px' {...this.link ()} >
              <Container kind='column' grow='2' {...this.link ()} >
                <Button glyph='user-secret' kind='identity' {...this.link ()} />
              </Container>
              <Container kind='column' grow='1' {...this.link ()} >
                <Label glyph='car' {...this.link ()} />
              </Container>
              <Container kind='column' grow='3' {...this.link ()} >
                <Label text='Frédérique' font-weight='bold' text-color='#fff' {...this.link ()} />
                <Label text='250.00' font-weight='bold' text-color='#fff' {...this.link ()} />
              </Container>
            </Ticket>
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
            <Ticket width='300px' height='90px' {...this.link ()} >
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
    );
  }
}
