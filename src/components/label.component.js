import {React} from 'electrum';

export default class Label extends React.Component {
  render () {
    const {style} = this.props;
    return (
      <label style={style} onClick={this.onClick} {...this.link ()}>
        {this.props.children}
      </label>
    );
  }
}
