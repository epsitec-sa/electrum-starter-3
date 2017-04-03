import Electrum from 'electrum';
import {React} from 'electrum';

class _StatusBar extends React.Component {
  render () {
    const {state} = this.props;

    const navContainer = {
      flex:       0.1,
      background: '#222222',
      color:      '#666666',
      boxShadow:  '5px 5px 30px rgba(#101114, 0.94)',
      zIndex:     1
    };

    return (
      <nav style={navContainer} data-view='Status bar'>
        {this.props.children}
      </nav>
    );
  }
}

export const StatusBar = Electrum.wrap ('StatusBar', _StatusBar);
