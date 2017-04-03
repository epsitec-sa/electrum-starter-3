import React from 'react';
import act from './actuators.js';
import {Label} from '../../all-components';
import Electrum from 'electrum';
export default (state, props) => {
  let active = false;
  const activity = state.get ();
  if (!activity) {
    return null;
  }
  const key = activity.parent.split ('.').pop ();
  const path = key + '.' + activity.id;
  if (path === props.state.get ('mainActivityKey')) {
    active = true;
  }
  const tabLabel = {
    transformOrigin: 'initial',
    cursor:          'pointer',
    color:           '#222222',
    padding:         '5px 30px',
    overflow:        'hidden',
    textOverflow:    'ellipsis',
    whiteSpace:      'nowrap'
  };

  const tabContainer = {
    flex:            0.1,
    backgroundColor: active ? '#cccccc' : 'none',
    order:           key,
    content:         '\'\'',
    zIndex:          1,
    transform:       'perspective(5px) rotateX(2deg)',
    transformOrigin: 'bottom',
    borderTop:       '.1em solid #cccccc',
    borderLeft:      '.1em solid #cccccc',
    borderRight:     '.1em solid #cccccc',
    borderBottom:    'none',
    borderRadius:    '10px 10px 0 0',
    boxShadow:       '0 2px hsla(0,0%,100%,.5) inset'
  };

  return (
    <Label
        key={path}
        style={tabContainer}
        action={act.SELECT_TAB ({path: path})}
        {...Electrum.link (props)} >
        <div style={tabLabel}>
          {activity.id}
        </div>
    </Label>
  );
};
