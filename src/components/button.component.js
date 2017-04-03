import {React} from 'electrum';

export default class Button extends React.Component {
  render () {
    return (
      <button style={this.styles} value={this.read ()} onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </button>
    );
  }
}
