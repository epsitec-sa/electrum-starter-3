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
  Separator
} from 'electrum-arc';

export default class Codispatch extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    return (
      <Container kind='view' width='700px' {...this.link ()} >
        <Container kind='pane-navigator' {...this.link ()} >
          <Button text='Expéditeur' width='0px' grow='1'
            active='true'  kind='pane-navigator' {...this.link ()} />
          <Button text='Prestation' width='0px' grow='1'
            active='false' kind='pane-navigator' {...this.link ()} />
          <Button text='Destinataire' width='0px' grow='1'
            active='false' kind='pane-navigator' {...this.link ()} />
          <Button text='Colis' width='0px' grow='1'
            active='false' kind='pane-navigator' {...this.link ()} />
          <Button text='Facture' width='0px' grow='1'
            active='false' kind='pane-navigator' {...this.link ()} />
        </Container>

        <Container kind='panes' {...this.link ()} >
          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Expéditeur' grow='1' kind='title' {...this.link ()} />
              <Button glyph='toggle-off' text='Nouveau' border='none'
                spacing='large' {...this.link ()} />
              <Button glyph='plus' text='Ajouter' spacing='large' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                grow='1' spacing='large' combo-type='calendar'
                combo-direction='right' flying-balloon-anchor='bottom'
                {...this.link ('exp-date')} />
              <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                grow='2' spacing='large' combo-type='clock'
                flying-balloon-anchor='right' {...this.link ('exp-time')} />
              <TextFieldCombo hint-text='Zone' combo-glyph='map-marker'
                grow='1' combo-type='zone' {...this.link ('exp-zone')} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='user'
                hint-text='Nom du client' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='tag' hint-text='Référence client'
                spacing='large' {...this.link ()} />
              <Button glyph='check-square' text='facturé à' border='none'
                glyph-position='right' {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Prestation' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Button text='Standard (1h)' width='0px' grow='1'
                spacing='large' {...this.link ()} />
              <Button text='Urgent (30 min)' width='0px' grow='1'
                spacing='large' {...this.link ()} />
              <Button text='Dring Dring' width='0px' grow='1'
                {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Button text='Course régulière' width='0px' grow='1'
                spacing='large' {...this.link ()} />
              <Button text='Multi' width='0px' grow='1'
                spacing='large' {...this.link ()} />
              <Button text='Case postale' width='0px' grow='1'
                {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Destinataire' grow='1' kind='title'
                {...this.link ()} />
              <Button glyph='toggle-off' text='Nouveau' border='none'
                spacing='large' {...this.link ()} />
              <Button glyph='plus' text='Ajouter' spacing='large'
                {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <TextFieldCombo hint-text='Date' combo-glyph='calendar'
                grow='1' spacing='large' combo-type='calendar'
                combo-direction='right' {...this.link ('dest-date')} />
              <TextFieldCombo hint-text='Période' combo-glyph='clock-o'
                grow='2' spacing='large' combo-type='clock'
                {...this.link ('dest-time')} />
              <TextFieldCombo hint-text='Zone' combo-glyph='map-marker'
                grow='1' combo-type='zone' {...this.link ('dest-zone')} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='user'
                hint-text='Nom du client' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='comment' hint-text='Remarque'
                spacing='large' {...this.link ()} />
              <Button glyph='comment' glyph='square-o' text='facturé à'
                border='none' glyph-position='right' {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Colis' grow='1' kind='title' {...this.link ()} />
              <Button glyph='plus' text='Ajouter' spacing='large'
                {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Button glyph='trash-o' spacing='large' {...this.link ()} />
              <TextFieldCombo value='Standard box' combo-glyph='cube'
                hint-text='Type' grow='1' spacing='large' combo-type='box'
                {...this.link ('box1-type')} />
              <LabelTextField label-glyph='balance-scale' value='3.6 kg'
                hint-text='Poids' grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='arrows-h' value='50 x 75 x 20'
                hint-text='Dimensions' grow='1' spacing='overlap'
                {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Button glyph='trash-o' spacing='large' {...this.link ()} />
              <TextFieldCombo hint-text='Type' combo-glyph='cube' grow='1'
                spacing='large' combo-type='box' {...this.link ('box2-type')} />
              <LabelTextField label-glyph='balance-scale' hint-text='Poids'
                grow='1' spacing='large' {...this.link ()} />
              <LabelTextField label-glyph='arrows-h' hint-text='Dimensions'
                grow='1' spacing='overlap' {...this.link ()} />
            </Container>
            <Container kind='row-pane' subkind='info' {...this.link ()} >
              <Label text='Nb de colis 2' kind='info' width='0px'
                grow='1' {...this.link ()} />
              <Label text='Total 3.6 kg' kind='info' width='0px'
                grow='1' {...this.link ()} />
              <Label text='IATA total 3.6 kg' kind='info' width='0px'
                grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='comment' hint-text='Remarque'
                {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Facture' grow='1' kind='title' {...this.link ()} />
              <Button glyph='plus' text='Ajouter' spacing='large'
                {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='compact' {...this.link ()} >
              <Label text='Standard A - C' justify='left'
                width='0px' grow='4' {...this.link ()} />
              <Label text='50.00' justify='right'
                width='0px' grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='compact' {...this.link ()} >
              <Label text='Supplément poids' justify='left'
                width='0px' grow='4' {...this.link ()} />
              <Label text='12.00' justify='right'
                width='0px' grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='compact' subkind='wide-info'
              {...this.link ()} >
              <Label text='Sous-total' justify='left'
                width='0px' grow='4' {...this.link ()} />
              <Label text='62.00' justify='right'
                width='0px' grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='compact' {...this.link ()} >
              <Label text='Avance d´argent' justify='left'
                width='0px' grow='4' {...this.link ()} />
              <Label text='55.00' justify='right'
                width='0px' grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='glued' subkind='wide-info'
              {...this.link ()} >
              <Label text='Total' justify='left'
                width='0px' grow='4' {...this.link ()} />
              <Label text='117.00' justify='right'
                width='0px' grow='1' {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Divers' grow='1' kind='title' {...this.link ()} />
              <Button glyph='ellipsis-v' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <LabelTextField shape='rounded' label-glyph='tag'
                hint-text='Essai rounded shape' spacing='large'
                {...this.link ()} />
              <Button glyph='plus' text='Ajouter' {...this.link ()} />
              <Badge value='1' {...this.link ()} />
              <Badge value='12' {...this.link ()} />
              <Badge value='123' {...this.link ()} />
              <Badge value='1234' {...this.link ()} />
              <Badge value='12345' {...this.link ()} />
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <Container kind='flying-balloon' {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='bottom'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='left'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
              <Container kind='flying-balloon' triangle-position='right'
                {...this.link ()} >
                <Button glyph='gears' text='Réglages' {...this.link ()} />
              </Container>
            </Container>
            <Container kind='row-pane' spacing='large' {...this.link ()} >
              <Container kind='flying-balloon' width='150px' {...this.link ()} >
                <Container kind='compact-row' {...this.link ()} >
                  <Label text='Mecatronic' kind='flying-balloon'
                    font-weight='bold' justify='left' grow='2' {...this.link ()} />
                  <Label text='17.05.16' kind='flying-balloon'
                    justify='right' grow='1' {...this.link ()} />
                </Container>
                <Container kind='compact-row' {...this.link ()} >
                  <Label text='Torena SA' kind='flying-balloon'
                    font-weight='bold' justify='left' grow='2' {...this.link ()} />
                  <Label text='18.05.16' kind='flying-balloon'
                    justify='right' grow='1' {...this.link ()} />
                </Container>
              </Container>
            </Container>
          </Container>

        </Container>

        <Container kind='actions' {...this.link ()} >
          <Button glyph='trash-o' text='Annuler' width='0px' grow='1'
            kind='action' place='left' {...this.link ()} />
          <Button glyph='paste' text='Modèle' width='0px' grow='1'
            kind='action' place='middle' {...this.link ()} />
          <Button glyph='inbox' text='Attendre' width='0px' grow='1'
            kind='action' place='middle' {...this.link ()} />
          <Button glyph='check' text='Valider' width='0px' grow='1'
            kind='action' place='right' {...this.link ()} />
        </Container>
      </Container>
    );
  }
}
