'use strict';

import React from 'react';

export default class Stackrow extends React.Component {
  render () {
    const {aligned, children} = this.props;

    console.log (children);

    const basicAlignStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: '1',
      flexBasis: '0',
      alignItems: 'center',
      border: '1px solid green'
    };

    if (aligned !== undefined && children !== undefined) {
      return (
        <div style={this.styles}>

          <div style={{...basicAlignStyle, justifyContent: 'flex-start'}}>
            {
              children.map ((child) => {
                if (child.props.alignLeft !== undefined) {
                  return (<div style={{margin: '0px 3px 0px 3px'}}>{child}</div>);
                }
              })
            }
          </div>
          <div style={{...basicAlignStyle, justifyContent: 'flex-end'}}>
            {
              children.map ((child) => {
                if (child.props.alignRight !== undefined) {
                  return (<div style={{margin: '0px 3px 0px 3px'}}>{child}</div>);
                }
              })
            }
          </div>

        </div>
      );
    } else {
      return (
        <div style={this.styles}>
          {
            children.map ((child) => {
              return (<div style={{margin: '0px 3px 0px 3px'}}>{child}</div>);
            })
          }
        </div>
      );
    }
  }
}
