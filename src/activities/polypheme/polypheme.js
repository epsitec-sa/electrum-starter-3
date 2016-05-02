'use strict';

import React from 'react';
import {
  MainWindow,
  LeftContainer,
  RightContainer,
  RichButton,
  TextField,
  BasicRow,
  BasicContainer,
  MainTabContainer,
  ViewTabContainer,
  PageNavigatorContainer,
  ContentContainer,
  ActionContainer,
  Label
} from 'electrum-arc';

import act from './actuators.js';

export default class Polypheme extends React.Component {

  constructor (props) {
    super (props);

    this.state = {
      open: false,
    };
  }

  render () {
    const listTemplate = (state) => {
      const title = state.get ('title');
      return (
        <ListItem key={state.key} primaryText={title} />
      );
    };

    return (
      <div id='main' style={{display: 'flex', flexDirection: 'row', height: '100vh', backgroundColor: 'cyan',
                            padding: '10px', boxSizing: 'border-box'}}>
      <div id='left' style={{backgroundColor: 'lightblue', width: '200px'}} ></div>
      <div id='right' style={{flexGrow: '1', backgroundColor: 'gold',
                             padding: '10px', boxSizing: 'border-box',
                             display: 'flex', flexDirection: 'column'}} >
        <div id='header' style={{flexGrow: '0', height: '80px', backgroundColor: 'orange'}} ></div>
        <div id='content' style={{flexGrow: '1', backgroundColor: 'cornflowerblue'}}></div>
        <div id='footer' style={{flexGrow: '0', height: '40px', backgroundColor: 'pink'}}></div>
      </div>
      </div>
    );
  }
}
