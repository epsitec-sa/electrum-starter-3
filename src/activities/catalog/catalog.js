'use strict';

import React from 'react';
import {
  Label,
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
  FlatButton,
  RaisedButton,
  IconButton,
  RichButton,
  FloatingActionButton,
  RadioButton,
  Checkbox,
  BasicCheckbox,
  Toggle,
  Badge,
  TextField,
  SelectField,
  AutoComplete,
  DatePicker,
  TimePicker,
  BasicField,
  BasicList,
  ListItem,
  MenuItem,
  IconMenu,
  Popover,
  Slider,
  Paper,
  Divider,
  BasicRow,
  BasicLabel
} from 'electrum-arc';

import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import CodeIcon from 'material-ui/lib/svg-icons/action/code';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import act from './actuators.js';
import Filter from './filter';

export default class Catalog extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    this.setState ({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState ({
      open: false,
    });
  };

  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    const style = {
      button: {
        marginRight: 20,
      },
      popover: {
        padding: 20,
      },
    };

    const paperStyle1 = {
      height: 100,
      width: 100,
      marginTop: 20,
      marginRight: 20,
      marginBottom: 20,
      marginLeft: 0,
      textAlign: 'center',
      display: 'inline-block',
    };

    const paperStyle2 = {
      width: 400,
      padding: 20,
    };

    const paperStyle3 = {
      width: 850,
      padding: 20,
    };

    const paperStyle4 = {
      width: 200,
      padding: 0,
    };

    const paperStyle5 = {
      width: 600,
      padding: 20,
    };

    const planets = [
      'Mercure',
      'Vénus',
      'Terre',
      'Mars',
      'Jupiter',
      'Saturne',
      'Uranus',
      'Neptune',
      'Pluton'
    ];

    const colors = [
      'Noir', 'Blanc', 'Rouge', 'Vert', 'Bleu', 'Jaune', 'Orange', 'Gris', 'Violet', 'Marron',
      'Cyan', 'Magenta', 'Ocre', 'Brun', 'Rose', 'Terracota', 'Lilas', 'Pourpre', 'Bordeaux', 'Bronze',
      'Menthe', 'Olive', 'Prune', 'Or', 'Ambre', 'Aubergine', 'Auburn', 'Avocat', 'Beige', 'Anthracite',
      'Argent', 'Azur', 'Acajou', 'Turquoie', 'Petrol', 'Fauve', 'Fouchsia', 'Indigo', 'Lapis-lazuli',
    ];

    return (
      <div style={{padding: '10px 0px 0px 30px'}}>
        <h1>Catalog of components</h1>
        <h6><a href="http://www.material-ui.com/#/components/">documentation</a></h6>

        <h1>Toolbars</h1>
        <Toolbar {...this.link ()}>
          <ToolbarGroup float="left" {...this.link ()}>
            <ToolbarTitle text="Options" {...this.link ()} />
          </ToolbarGroup>
          <ToolbarGroup float="right" {...this.link ()}>
            <ToolbarSeparator {...this.link ()} />
            <RaisedButton primary action={act.TEST} label="Open" {...this.link ()} />
            <RaisedButton action={act.TEST} label="Close" {...this.link ()} />
            <ToolbarSeparator {...this.link ()} />
            <IconButton action={act.TEST} tooltip="Close the toolbar" {...this.link ()} />
          </ToolbarGroup>
        </Toolbar>

        <h1>Text fields</h1>
        <TextField id="field" {...this.link ('field')} />
        <br/>
        <br/>
        <TextField id="fieldWithError" {...this.link ('fieldWithError')} />
        <br/>
        <br/>
        <TextField id="multilineField" {...this.link ('multilineField')} />

        <h1>Select fields</h1>
        <SelectField value={2} {...this.link ()} >
          <MenuItem value={1} primaryText="Lundi"    {...this.link ()} />
          <MenuItem value={2} primaryText="Mardi"    {...this.link ()} />
          <MenuItem value={3} primaryText="Mercredi" {...this.link ()} />
          <MenuItem value={4} primaryText="Jeudi"    {...this.link ()} />
          <MenuItem value={5} primaryText="Vendredi" {...this.link ()} />
        </SelectField>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <SelectField value={3} {...this.link ()} >
          <MenuItem value={1} label="8h - 12h"  primaryText="Matin"      {...this.link ()} />
          <MenuItem value={2} label="14h - 17h" primaryText="Après-midi" {...this.link ()} />
          <MenuItem value={3} label="8h - 17h"  primaryText="Journée"    {...this.link ()} />
        </SelectField>

        <h1>Auto complete</h1>
        <AutoComplete floatingLabelText="Planète" filter={Filter.caseInsensitiveFilter} dataSource={planets} {...this.link ()} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <AutoComplete floatingLabelText="Couleur" filter={Filter.fuzzyFilter} dataSource={colors} {...this.link ()} />

        <h1>Date picker</h1>
        <DatePicker action={act.TEST}
          hintText="Date de naissance"
          value="3/31/2016"
          id="datePicker" {...this.link ('datePicker')} />

        <h1>Time picker</h1>
        <TimePicker action={act.TEST}
          hintText="Heure de livraison"
          value="12:25"
          id="timePicker" {...this.link ('datePicker')} />

        <h1>Buttons</h1>
        <div>
          <FlatButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <FlatButton style={style.button}
            linkButton={true} href="http://www.epsitec.ch"a label="Epsitec" {...this.link ()} />
        </div>
        <div>
          <RaisedButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <RaisedButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <RaisedButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <IconButton action={act.TEST} tooltip="Close the window" {...this.link ()}>
            <NavigationClose />
          </IconButton>
          <IconButton action={act.TEST} tooltip="Show code" {...this.link ()}>
            <CodeIcon />
          </IconButton>
          <IconButton awesome kind="small" glyph="camera" size="1x" active
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
          <IconButton awesome kind="small" glyph="cog" size="1x" active spin
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
          <IconButton awesome kind="small" glyph="car" size="1x" active rounded
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
        </div>
        <div>
          <RaisedButton action={act.TEST} label="Button with primary badge" {...this.link ()} />
          <Badge style={style.button} badgeContent="12" primary={true} {...this.link ()} />
          <RaisedButton action={act.TEST} label="Button with secondary badge" {...this.link ()} />
          <Badge style={style.button} badgeContent="7" secondary={true} {...this.link ()} />
        </div>
        <div style={style}>
          <FloatingActionButton style={style.button}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} mini={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} secondary={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
          <FloatingActionButton style={style.button} secondary={true} mini={true}
            {...this.link ()}><ContentAdd /></FloatingActionButton>
        </div>
        <Divider {...this.link ()} />

        <h1>Radio buttons</h1>
        <RadioButton action={act.TEST} label="Rouge" id="radioRed"   {...this.link ('radioRed')} />
        <RadioButton action={act.TEST} label="Vert"  id="radioGreen" {...this.link ('radioGreen')} />
        <RadioButton action={act.TEST} label="Bleu"  id="radioBlue"  {...this.link ('radioBlue')} />
        <Divider {...this.link ()} />

        <h1>Checkbox</h1>
        <Checkbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
        <Checkbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
        <Checkbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
        <Divider {...this.link ()} />

        <h1>Toggle</h1>
        <Toggle action={act.TEST} label="Paul"   id="toggle1" {...this.link ('toggle1')} />
        <Toggle action={act.TEST} label="Alfred" id="toggle2" {...this.link ('toggle2')} />
        <Divider {...this.link ()} />

        <h1>Paper</h1>
        <div>
        <Paper zDepth={1} style={paperStyle1} {...this.link ()} />
        <Paper zDepth={2} style={paperStyle1} {...this.link ()} />
        <Paper zDepth={3} style={paperStyle1} {...this.link ()} />
        <Paper zDepth={4} style={paperStyle1} {...this.link ()} />
        <Paper zDepth={5} style={paperStyle1} {...this.link ()} />
        </div>
        <Paper zDepth={3} style={paperStyle2} {...this.link ()}>
          <TextField floatingLabelText="Prénom" {...this.link ()} />
          <TextField floatingLabelText="Nom"    {...this.link ()} />
          <Checkbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
          <Checkbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
          <Checkbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
          <br />
          <RaisedButton style={style.button} primary action={act.TEST} label="OK"      {...this.link ()} />
          <RaisedButton style={style.button}         action={act.TEST} label="Annuler" {...this.link ()} />
        </Paper>
        <br />
        <Paper zDepth={3} style={paperStyle2} {...this.link ()}>
          <TextField hintText="Prénom" {...this.link ()} />
          <TextField hintText="Nom"    {...this.link ()} />
          <Checkbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
          <Checkbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
          <Checkbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
          <br />
          <RaisedButton style={style.button} primary action={act.TEST} label="OK"      {...this.link ()} />
          <RaisedButton style={style.button}         action={act.TEST} label="Annuler" {...this.link ()} />
        </Paper>
        <br />
        <Divider {...this.link ()} />

        <h1>Basic list</h1>
        <Paper zDepth={3} style={paperStyle2} {...this.link ()}>
          <BasicList template={listTemplate} {...this.link ('basiclist')} />
        </Paper>
        <br />
        <Divider {...this.link ()} />

        <h1>Icon menu</h1>
        <IconMenu
          iconButtonElement={<IconButton {...this.link ()}><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}} {...this.link ()} >
          <MenuItem primaryText="Lundi"    {...this.link ()} />
          <MenuItem primaryText="Mardi"    {...this.link ()} />
          <MenuItem primaryText="Mercredi" {...this.link ()} />
          <MenuItem primaryText="Jeudi"    {...this.link ()} />
          <MenuItem primaryText="Vendredi" {...this.link ()} />
        </IconMenu>

        <h1>Popover</h1>
        <div>
          <RaisedButton onTouchTap={this.handleTouchTap} label="Filtrer" {...this.link ()} />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            {...this.link ()}
          >
            <div style={style.popover}>
              <TextField hintText="Critère" {...this.link ()} />
              <Checkbox label="Mots entiers" {...this.link ()} />
              <br />
              <RaisedButton primary={true} label="Valider" {...this.link ()} />
            </div>
          </Popover>
        </div>
        <br />
        <Divider {...this.link ()} />

        <h1>Sliders</h1>
        <Paper zDepth={3} style={paperStyle2} {...this.link ()}>
          <Slider {...this.link ()} />
          <Slider defaultValue={0.5} {...this.link ()} />
          <Slider defaultValue={1} step={0.10} {...this.link ()} />
        </Paper>
        <br />
        <Paper zDepth={3} style={paperStyle2} {...this.link ()}>
          <Slider description="Rouge" defaultValue={0.1} {...this.link ()} />
          <Slider description="Vert"  defaultValue={0.5} {...this.link ()} />
          <Slider description="Bleu"  defaultValue={0.6} {...this.link ()} />
        </Paper>
        <br />
        <Divider {...this.link ()} />

        <h1>Polyphème material-ui</h1>
        <Paper zDepth={3} style={paperStyle3} {...this.link ()}>
          <div>
            Expéditeur
            <Paper zDepth={1} style={paperStyle4} {...this.link ()}>
              <Toggle action={act.TEST} label="Nouveau" id="toggle1" {...this.link ()} />
            </Paper>
            <RaisedButton style={style.button} action={act.TEST} label="Ajouter" {...this.link ()} />
            <IconMenu
              iconButtonElement={<IconButton {...this.link ()}><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}} {...this.link ()} >
              <MenuItem primaryText="Supprimer" {...this.link ()} />
              <MenuItem primaryText="Chercher"  {...this.link ()} />
              <MenuItem primaryText="Autre"     {...this.link ()} />
            </IconMenu>
          </div>
          <div>
            <TextField hintText="Date" {...this.link ()} />
            &nbsp;&nbsp;
            <TextField hintText="Période" {...this.link ()} />
            &nbsp;&nbsp;
            <TextField hintText="Zone" {...this.link ()} />
          </div>
          <div>
            <TextField hintText="Nom du client" {...this.link ()} />
          </div>
          <div>
            <TextField hintText="Référence client" {...this.link ()} />
            <Checkbox action={act.TEST} label="Facturé à" id="" {...this.link ()} />
          </div>
        </Paper>
        <br />
        <Divider {...this.link ()} />

        <h1>Polyphème custom</h1>
        <Paper zDepth={3} style={paperStyle5} {...this.link ()}>
          <BasicRow>
            <BasicLabel text="EXPÉDITEUR" grow="1" {...this.link ()} />
            <RichButton glyph="toggle-off" text="Nouveau" borderless flowContinuation="spacing" {...this.link ()} />
            <RichButton glyph="plus" text="Ajouter" flowContinuation="spacing" {...this.link ()} />
            <RichButton glyph="ellipsis-v" {...this.link ()} />
          </BasicRow>
          <BasicRow>
            <BasicField hintText="Date" grow="1" flowContinuation="overlay" {...this.link ()} />
            <RichButton glyph="calendar" flowContinuation="spacing" {...this.link ()} />
            <BasicField hintText="Période" grow="2" flowContinuation="overlay" {...this.link ()} />
            <RichButton glyph="clock-o" flowContinuation="spacing" {...this.link ()} />
            <BasicField hintText="Zone" grow="1" flowContinuation="overlay" {...this.link ()} />
            <RichButton glyph="map-marker" {...this.link ()} />
          </BasicRow>
          <BasicRow>
            <RichButton glyph="user" flowContinuation="overlay" {...this.link ()} />
            <BasicField hintText="Nom du client" {...this.link ()} />
          </BasicRow>
          <BasicRow>
            <RichButton glyph="tag" flowContinuation="overlay" {...this.link ()} />
            <BasicField hintText="Référence client" flowContinuation="spacing" {...this.link ()} />
            <RichButton glyph="check-square" text="facturé à" borderless rightIcon {...this.link ()} />
          </BasicRow>
        </Paper>
        <br />
        <Divider {...this.link ()} />
      </div>
    );
  }
}
