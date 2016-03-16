'use strict';

import React from 'react';
import {Icon, Badge} from '../all-components.js';
export default class IconBadge extends React.Component {
  render () {
    const {state, glyph, size, value} = this.props;
    const g = glyph || state.get ('glyph');
    const s = size  || state.get ('size');
    const v = value || state.get ('value');

    const divStyle1 = {
      position: 'relative',
    };
    const divStyle2 = {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      width: '20px',
      height: '20px',
      textAlign: 'center',
      lineHeight: '20px',
      borderRadius: '2em',
      backgroundColor: '#00f',
      color: '#fff',
    };

    return (

      // <div>
      //   <Icon glyph={g} size={s} {...this.link ()}/>
      //   <Badge kind="float" value={v} {...this.link ()} />
      // </div>
      <div style={divStyle1}>
        <Icon glyph={g} size={s} {...this.link ()}/>
        <div style={divStyle2}>
          5
        </div>
      </div>
    );
  }
}
