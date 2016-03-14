'use strict';

import React from 'react';

export default class Stackrow extends React.Component {
  render () {
    const {aligned, children} = this.props;

    let childrenArray = Array.isArray (children) ? children : [children];


    const basicAlignStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    };

    const elementStyle = {
      margin: '0px 3px 0px 3px',
      border: '1px solid green',
      flexBasis: '0'
    };

    let renderChild = function (child) {
      if (child.props.expanded === true) {
        return (<div style={{...elementStyle, flexGrow: '1'}}>{child}</div>);
      } else {
        return (<div style={{...elementStyle}}>{child}</div>);
      }
    };

    let renderAlignedChildren = function (children, justify) {
      let grow = children.filter ((child) => child.props.expanded === true).length > 0 ? '1' : '0';

      return (
        <div style={{...basicAlignStyle, flexGrow: grow, justifyContent: justify}}>
          {
            children.map ((child) => {
              return (renderChild (child));
            })
          }
        </div>
      );
    };

    if (childrenArray !== undefined) {
      if (aligned === true) {
        return (
          <div style={this.styles}>
            {renderAlignedChildren (childrenArray.filter ((child) => child.props.alignLeft === true), 'flex-start')}

            {renderAlignedChildren (childrenArray.filter ((child) => child.props.alignRight === true), 'flex-end')}
          </div>
        );
      } else {
        return (
          <div style={this.styles}>
            {
              childrenArray.map ((child) => {
                return (renderChild (child));
              })
            }
          </div>
        );
      }
    } else {
      return null;
    }
  }
}
