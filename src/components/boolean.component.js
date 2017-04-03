import React from 'react';

export default class Boolean extends React.Component {
  render () {
    const {style, text, checked} = this.props;
    const checkprop = {
      checked: checked
    };
    return (
      <label>
        <input type="checkbox" {...checkprop}  onClick={this.onClick} {...this.link ()} />
        {text}
      </label>
    );
  }
}
