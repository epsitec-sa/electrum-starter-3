import React from 'react';
import {
  MuToolbar,
  MuToolbarGroup,
  MuToolbarSeparator,
  MuToolbarTitle,
  MuFlatButton,
  MuRaisedButton,
  MuIconButton,
  Button,
  MuFloatingActionButton,
  MuRadioButton,
  MuCheckbox,
  BasicCheckbox,
  MuToggle,
  MuBadge,
  MuTextField,
  MuSelectField,
  MuAutoComplete,
  MuDatePicker,
  MuTimePicker,
  BasicField,
  MuBasicList,
  MuListItem,
  MuMenuItem,
  MuIconMenu,
  MuPopover,
  MuSlider,
  MuPaper,
  MuDivider,
  BasicRow,
  BasicContainer,
  BasicLabel
} from 'electrum-arc';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
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
        <MuListItem key={state.key} primaryText={title} />
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
      width: 640,
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
        <MuToolbar {...this.link ()}>
          <MuToolbarGroup float="left" {...this.link ()}>
            <MuToolbarTitle text="Options" {...this.link ()} />
          </MuToolbarGroup>
          <MuToolbarGroup float="right" {...this.link ()}>
            <MuToolbarSeparator {...this.link ()} />
            <MuRaisedButton primary action={act.TEST} label="Open" {...this.link ()} />
            <MuRaisedButton action={act.TEST} label="Close" {...this.link ()} />
            <MuToolbarSeparator {...this.link ()} />
            <MuIconButton action={act.TEST} tooltip="Close the toolbar" {...this.link ()} />
          </MuToolbarGroup>
        </MuToolbar>

        <h1>Text fields</h1>
        <MuTextField id="field" {...this.link ('field')} />
        <br/>
        <br/>
        <MuTextField id="fieldWithError" {...this.link ('fieldWithError')} />
        <br/>
        <br/>
        <MuTextField id="multilineField" {...this.link ('multilineField')} />

        <h1>Select fields</h1>
        <MuSelectField value={2} {...this.link ()} >
          <MuMenuItem value={1} primaryText="Lundi"    {...this.link ()} />
          <MuMenuItem value={2} primaryText="Mardi"    {...this.link ()} />
          <MuMenuItem value={3} primaryText="Mercredi" {...this.link ()} />
          <MuMenuItem value={4} primaryText="Jeudi"    {...this.link ()} />
          <MuMenuItem value={5} primaryText="Vendredi" {...this.link ()} />
        </MuSelectField>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <MuSelectField value={3} {...this.link ()} >
          <MuMenuItem value={1} label="8h - 12h"  primaryText="Matin"      {...this.link ()} />
          <MuMenuItem value={2} label="14h - 17h" primaryText="Après-midi" {...this.link ()} />
          <MuMenuItem value={3} label="8h - 17h"  primaryText="Journée"    {...this.link ()} />
        </MuSelectField>

        <h1>Auto complete</h1>
        <MuAutoComplete floatingLabelText="Planète" filter={Filter.caseInsensitiveFilter} dataSource={planets} {...this.link ()} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <MuAutoComplete floatingLabelText="Couleur" filter={Filter.fuzzyFilter} dataSource={colors} {...this.link ()} />

        <h1>Date picker</h1>
        <MuDatePicker action={act.TEST}
          hintText="Date de naissance"
          value="3/31/2016"
          id="datePicker" {...this.link ('datePicker')} />

        <h1>Time picker</h1>
        <MuTimePicker action={act.TEST}
          hintText="Heure de livraison"
          value="12:25"
          id="timePicker" {...this.link ('datePicker')} />

        <h1>Buttons</h1>
        <div>
          <MuFlatButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <MuFlatButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <MuFlatButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <MuFlatButton style={style.button}
            linkButton={true} href="http://www.epsitec.ch"a label="Epsitec" {...this.link ()} />
        </div>
        <div>
          <MuRaisedButton style={style.button} action={act.TEST} label="click me" {...this.link ()} />
          <MuRaisedButton style={style.button} primary action={act.TEST} label="click me" {...this.link ()} />
          <MuRaisedButton style={style.button} secondary action={act.TEST} label="click me" {...this.link ()} />
          <MuIconButton action={act.TEST} tooltip="Close the window" {...this.link ()}>
            <NavigationClose />
          </MuIconButton>
          <MuIconButton action={act.TEST} tooltip="Show code" {...this.link ()}>
            <CodeIcon />
          </MuIconButton>
          <MuIconButton awesome kind="small" glyph="camera" size="1x" active
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
          <MuIconButton awesome kind="small" glyph="cog" size="1x" active spin
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
          <MuIconButton awesome kind="small" glyph="car" size="1x" active rounded
            action={act.TEST} tooltip="Font Awesome" {...this.link ()} />
        </div>
        <div>
          <MuRaisedButton action={act.TEST} label="Button with primary badge" {...this.link ()} />
          <MuBadge style={style.button} badgeContent="12" primary={true} {...this.link ()} />
          <MuRaisedButton action={act.TEST} label="Button with secondary badge" {...this.link ()} />
          <MuBadge style={style.button} badgeContent="7" secondary={true} {...this.link ()} />
        </div>
        <div style={style}>
          <MuFloatingActionButton style={style.button}
            {...this.link ()}><ContentAdd /></MuFloatingActionButton>
          <MuFloatingActionButton style={style.button} mini={true}
            {...this.link ()}><ContentAdd /></MuFloatingActionButton>
          <MuFloatingActionButton style={style.button} secondary={true}
            {...this.link ()}><ContentAdd /></MuFloatingActionButton>
          <MuFloatingActionButton style={style.button} secondary={true} mini={true}
            {...this.link ()}><ContentAdd /></MuFloatingActionButton>
        </div>
        <MuDivider {...this.link ()} />

        <h1>Radio buttons</h1>
        <MuRadioButton action={act.TEST} label="Rouge" id="radioRed"   {...this.link ('radioRed')} />
        <MuRadioButton action={act.TEST} label="Vert"  id="radioGreen" {...this.link ('radioGreen')} />
        <MuRadioButton action={act.TEST} label="Bleu"  id="radioBlue"  {...this.link ('radioBlue')} />
        <MuDivider {...this.link ()} />

        <h1>Checkbox</h1>
        <MuCheckbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
        <MuCheckbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
        <MuCheckbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
        <MuDivider {...this.link ()} />

        <h1>Toggle</h1>
        <MuToggle action={act.TEST} label="Paul"   id="toggle1" {...this.link ('toggle1')} />
        <MuToggle action={act.TEST} label="Alfred" id="toggle2" {...this.link ('toggle2')} />
        <MuDivider {...this.link ()} />

        <h1>Paper</h1>
        <div>
        <MuPaper zDepth={1} style={paperStyle1} {...this.link ()} />
        <MuPaper zDepth={2} style={paperStyle1} {...this.link ()} />
        <MuPaper zDepth={3} style={paperStyle1} {...this.link ()} />
        <MuPaper zDepth={4} style={paperStyle1} {...this.link ()} />
        <MuPaper zDepth={5} style={paperStyle1} {...this.link ()} />
        </div>
        <MuPaper zDepth={3} style={paperStyle2} {...this.link ()}>
          <MuTextField floatingLabelText="Prénom" {...this.link ()} />
          <MuTextField floatingLabelText="Nom"    {...this.link ()} />
          <MuCheckbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
          <MuCheckbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
          <MuCheckbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
          <br />
          <MuRaisedButton style={style.button} primary action={act.TEST} label="OK"      {...this.link ()} />
          <MuRaisedButton style={style.button}         action={act.TEST} label="Annuler" {...this.link ()} />
        </MuPaper>
        <br />
        <MuPaper zDepth={3} style={paperStyle2} {...this.link ()}>
          <MuTextField hintText="Prénom" {...this.link ()} />
          <MuTextField hintText="Nom"    {...this.link ()} />
          <MuCheckbox action={act.TEST} label="Rouge" id="checkRed"   {...this.link ('checkRed')} />
          <MuCheckbox action={act.TEST} label="Vert"  id="checkGreen" {...this.link ('checkGreen')} />
          <MuCheckbox action={act.TEST} label="Bleu"  id="checkBlue"  {...this.link ('checkBlue')} />
          <br />
          <MuRaisedButton style={style.button} primary action={act.TEST} label="OK"      {...this.link ()} />
          <MuRaisedButton style={style.button}         action={act.TEST} label="Annuler" {...this.link ()} />
        </MuPaper>
        <br />
        <MuDivider {...this.link ()} />

        <h1>Basic list</h1>
        <MuPaper zDepth={3} style={paperStyle2} {...this.link ()}>
          <MuBasicList template={listTemplate} {...this.link ('basiclist')} />
        </MuPaper>
        <br />
        <MuDivider {...this.link ()} />

        <h1>Icon menu</h1>
        <MuIconMenu
          iconButtonElement={<MuIconButton {...this.link ()}><MoreVertIcon /></MuIconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}} {...this.link ()} >
          <MuMenuItem primaryText="Lundi"    {...this.link ()} />
          <MuMenuItem primaryText="Mardi"    {...this.link ()} />
          <MuMenuItem primaryText="Mercredi" {...this.link ()} />
          <MuMenuItem primaryText="Jeudi"    {...this.link ()} />
          <MuMenuItem primaryText="Vendredi" {...this.link ()} />
        </MuIconMenu>

        <h1>Popover</h1>
        <div>
          <MuRaisedButton onTouchTap={this.handleTouchTap} label="Filtrer" {...this.link ()} />
          <MuPopover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            {...this.link ()}
          >
            <div style={style.popover}>
              <MuTextField hintText="Critère" {...this.link ()} />
              <MuCheckbox label="Mots entiers" {...this.link ()} />
              <br />
              <MuRaisedButton primary={true} label="Valider" {...this.link ()} />
            </div>
          </MuPopover>
        </div>
        <br />
        <MuDivider {...this.link ()} />

        <h1>Sliders</h1>
        <MuPaper zDepth={3} style={paperStyle2} {...this.link ()}>
          <MuSlider {...this.link ()} />
          <MuSlider defaultValue={0.5} {...this.link ()} />
          <MuSlider defaultValue={1} step={0.10} {...this.link ()} />
        </MuPaper>
        <br />
        <MuPaper zDepth={3} style={paperStyle2} {...this.link ()}>
          <MuSlider description="Rouge" defaultValue={0.1} {...this.link ()} />
          <MuSlider description="Vert"  defaultValue={0.5} {...this.link ()} />
          <MuSlider description="Bleu"  defaultValue={0.6} {...this.link ()} />
        </MuPaper>
        <br />
        <MuDivider {...this.link ()} />

        <h1>Polyphème material-ui</h1>
        <MuPaper zDepth={3} style={paperStyle3} {...this.link ()}>
         <div>
           Expéditeur
           <MuPaper zDepth={1} style={paperStyle4} {...this.link ()}>
             <MuToggle action={act.TEST} label="Nouveau" id="toggle1" {...this.link ()} />
           </MuPaper>
           <MuRaisedButton style={style.button} action={act.TEST} label="Ajouter" {...this.link ()} />
           <MuIconMenu
             iconButtonElement={<MuIconButton {...this.link ()}><MoreVertIcon /></MuIconButton>}
             anchorOrigin={{horizontal: 'left', vertical: 'top'}}
             targetOrigin={{horizontal: 'left', vertical: 'top'}} {...this.link ()} >
             <MuMenuItem primaryText="Supprimer" {...this.link ()} />
             <MuMenuItem primaryText="Chercher"  {...this.link ()} />
             <MuMenuItem primaryText="Autre"     {...this.link ()} />
           </MuIconMenu>
         </div>
         <div>
           <MuTextField hintText="Date" {...this.link ()} />
           &nbsp;&nbsp;
           <MuTextField hintText="Période" {...this.link ()} />
           &nbsp;&nbsp;
           <MuTextField hintText="Zone" {...this.link ()} />
         </div>
         <div>
           <MuTextField hintText="Nom du client" {...this.link ()} />
         </div>
         <div>
           <MuTextField hintText="Référence client" {...this.link ()} />
           <MuCheckbox action={act.TEST} label="Facturé à" id="" {...this.link ()} />
         </div>
        </MuPaper>
        <br />
        <MuDivider {...this.link ()} />

        <br />
        <MuDivider {...this.link ()} />
      </div>
    );
  }
}
