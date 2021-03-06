import {React} from 'electrum';
import {
  Container,
  Dialog,
  Ticket,
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
  Separator
} from 'electrum-arc';

import act from './actuators.js';

export default class Synchro extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  /******************************************************************************/
  uiType () {
    // return 'synchro';
    return 'polypheme';
  }

  viewType () {
    return 'mandat';
    // return 'create';
  }

  hasFooterWarning () {
    return 'no';
    // return 'yes';
  }

  hasDialog () {
    return 'no';
    // return 'yes';
  }
  /******************************************************************************/

  task () {
    if (this.uiType () === 'synchro') {
      return this.synchroTask ();
    } else {
      return this.polyphemeTask ();
    }
  }

  mainTab () {
    if (this.uiType () === 'synchro') {
      return this.synchroMainTab ();
    } else {
      return this.polyphemeMainTab ();
    }
  }

  viewTab () {
    if (this.uiType () === 'synchro') {
      return this.synchroViewTab ();
    } else {
      return this.polyphemeViewTab ();
    }
  }

  synchroTask () {
    const active = (this.viewType () === 'create') ? 'true' : 'false';
    return (
      <Container kind='task' width='300px' {...this.link ()} >
        <Button action={act.NEXT ()} glyph='cloud' text='Crésus SYNCHRO' text-transform='none'
          kind='task-logo' {...this.link ()} />
        <Label text='Gestion des mandats' kind='task' {...this.link ()} />
        <Button text='Synchroniser' glyph='refresh' tooltip='Synchroniser tous les mandats' kind='task-tab' {...this.link ()} />
        <Button text='Créer un mandat' glyph='plus' tooltip='Crée un nouveau mandat' kind='task-tab' active={active} {...this.link ()} />
        <Button text='Se rattacher à un mandat' glyph='link' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task-tab' {...this.link ()} />
        <Label text='Vos mandats' kind='task' {...this.link ()} />
        <Button text='Mon beau bouquet' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' kind='task' active='true' {...this.link ()} />
        <Button text='Chorale Fa-si-la chanter' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' kind='task' active='false' {...this.link ()} />
        <Button text='Club VTT' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' kind='task' active='false' {...this.link ()} />
      </Container>
    );
  }

  polyphemeTask () {
    const active = (this.viewType () === 'create') ? 'true' : 'false';
    return (
      <Container kind='task' width='300px' {...this.link ()} >
        <Button action={act.NEXT ()} glyph='cloud' text='Crésus SYNCHRO' text-transform='none'
          kind='task-logo' {...this.link ()} />
        <Button text='Synchroniser' glyph='refresh' tooltip='Synchroniser tous les mandats' kind='task-tab' {...this.link ()} />
        <Button text='Créer un mandat' glyph='plus' tooltip='Crée un nouveau mandat' kind='task-tab' active={active} {...this.link ()} />
        <Button text='Se rattacher à un mandat' glyph='link' tooltip='Utilise un ticket (fichier .crsync) pour vous rattacher à un mandat' kind='task-tab' {...this.link ()} />
      </Container>
    );
  }

  synchroMainTab () {
    return (
      <Container kind='main-tab' {...this.link ()} >
        <Container kind='main-tab-right' {...this.link ()} >
          <Button text='Jean Dupond' kind='main-tab-right' {...this.link ()} />
          <Button glyph='ban' tooltip='Se déconnecter' kind='main-tab-right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  footerWarning () {
    if (this.hasFooterWarning () === 'yes') {
      return (
        <Button glyph='close' text='Nom d´utilisateur ou mot de passe incorrect' kind='warning' glyph-position='right' {...this.link ()} />
      );
    } else {
      return null;
    }
  }

  polyphemeMainTab () {
    return (
      <Container kind='main-tab' {...this.link ()} >
        <Button text='Mandats' width='200px' active='true' kind='main-tab' {...this.link ()} />
        <Container kind='main-tab-right' {...this.link ()} >
          <Button text='Jean Dupond' kind='main-tab-right' {...this.link ()} />
          <Button glyph='ban' tooltip='Se déconnecter' kind='main-tab-right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  synchroViewTab () {
    return null;
  }

  polyphemeViewTab () {
    const active = (this.viewType () === 'mandat') ? 'true' : 'false';
    return (
      <Container kind='view-tab' {...this.link ()} >
        <Button text='Mon beau bouquet' kind='view-tab' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' active={active} {...this.link ()} />
        <Button text='Chorale Fa-si-la chanter' kind='view-tab' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' active='false' {...this.link ()} />
        <Button text='Club VTT' kind='view-tab' glyph='chain-broken' glyph-tooltip='Retirer la synchronisation du mandat' active='false' {...this.link ()} />
      </Container>
    );
  }

  view () {
    if (this.viewType () === 'mandat') {
      return this.viewMandat ();
    } else {
      return this.viewCreate ();
    }
  }

  dialog () {
    if (this.hasDialog () === 'yes') {
      return (
        <Dialog  width='500px' height='300px' {...this.link ()} >
          <Container kind='view' width='500px' {...this.link ()} >
            <Container kind='panes' subkind='top-margin' {...this.link ()} >

              <Container kind='pane' {...this.link ()} >
                <Container kind='row-pane' {...this.link ()} >
                  <Label text='Se connecter' grow='1' kind='title' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='user' hint-text='Nom d´utilisateur' grow='1' {...this.link ()} />
                </Container>
                <Container kind='row-pane' {...this.link ()} >
                  <LabelTextField label-glyph='lock' hint-text='Mot de passe' grow='1' {...this.link ()} />
                </Container>
              </Container>

            </Container>

            <Container kind='actions' {...this.link ()} >
              <Button glyph='user' text='Se connecter' grow='1' kind='action' place='left' {...this.link ()} />
              <Button glyph='close' text='Annuler' grow='1' kind='action' place='right' {...this.link ()} />
            </Container>
          </Container>
        </Dialog>
      );
    } else {
      return null;
    }
  }

  viewMandat () {
    return (
      <Container kind='view' width='700px' {...this.link ()} >
        <Container kind='panes' subkind='top-margin' {...this.link ()} >

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Dossiers partagés' grow='1' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='television' text='Machine CGU' grow='1' {...this.link ()} />
              <Button glyph='caret-up' border='none' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='folder' text='Mimi.cre' grow='1' {...this.link ()} />
              <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
              <Button glyph='cloud-upload' tooltip='Détacher' border='none' {...this.link ()} />
              <Button glyph='exchange' tooltip='Migrer' border='none' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='folder' text='MimiSal_2016.salx' grow='1' {...this.link ()} />
              <Label text='01.01.2016 - 31.12.2016' grow='1' {...this.link ()} />
              <Button glyph='cloud-upload' tooltip='Détacher' border='none' {...this.link ()} />
              <Button glyph='exchange' tooltip='Migrer' border='none' {...this.link ()} />
            </Container>
          </Container>

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Utilisateurs' grow='1' kind='title' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='user' text='guidi@epsitec.ch' grow='1' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <Label glyph='user' text='jean.dupond@bluewin.ch' grow='1' {...this.link ()} />
            </Container>
          </Container>

        </Container>

        <Container kind='actions' {...this.link ()} >
          <Button glyph='cloud-download' text='Attacher un fichier' grow='1' kind='action' place='left' {...this.link ()} />
          <Button glyph='share-alt' text='Partager le mandat au moyen d´un ticket' grow='1' kind='action' place='right' {...this.link ()} />
        </Container>
      </Container>
    );
  }

  viewCreate () {
    return (
      <Container kind='view' width='700px' {...this.link ()} >
        <Container kind='panes' subkind='top-margin' {...this.link ()} >

          <Container kind='pane' {...this.link ()} >
            <Container kind='row-pane' {...this.link ()} >
              <Label text='Utilisez un nom descriptif afin d´identifier clairement votre mandat' {...this.link ()} />
            </Container>
            <Container kind='row-pane' {...this.link ()} >
              <LabelTextField label-glyph='tag' hint-text='Nom du mandat' grow='1'
                spacing='large'  {...this.link ()} />
              <Button text='Publier' {...this.link ()} />
            </Container>
          </Container>

        </Container>
      </Container>
    );
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

        {this.task ()}

        <Container kind='right' {...this.link ()} >

          {this.mainTab ()}
          {this.viewTab ()}

          <Container kind='views' {...this.link ()} >
            {this.view ()}
          </Container>

          <Container kind='footer' {...this.link ()} >
            {this.footerWarning ()}
            <Label text=' ' grow='1' kind='footer' {...this.link ()} />
            <Button glyph='gears' text='Options' kind='footer' {...this.link ()} />
          </Container>

        </Container>

        {this.dialog ()}

      </Container>
    );
  }
}
