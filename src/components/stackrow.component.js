'use strict';

import React from 'react';

export default class Stackrow extends React.Component {
  render () {
    const {aligned, children} = this.props;

    const basicAlignStyle = {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: '1',
      flexBasis: '0',
      alignItems: 'center'
    };

    const elementStyle = {
      margin: '0px 3px 0px 3px'
    };

    let renderChild = function (child) {
      return (<div style={elementStyle}>{child}</div>);
    };


    if (aligned !== undefined && children !== undefined) {
      return (
        <div style={this.styles}>

          <div style={{...basicAlignStyle, justifyContent: 'flex-start'}}>
            {
              children.map ((child) => {
                if (child.props.alignLeft !== undefined) {
                  return (renderChild (child));
                }
              })
            }
          </div>
          <div style={{...basicAlignStyle, justifyContent: 'flex-end'}}>
            {
              children.map ((child) => {
                if (child.props.alignRight !== undefined) {
                  return (renderChild (child));
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
              return (renderChild (child));
            })
          }
        </div>
      );
    }
  }
}
