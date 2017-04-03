import Electrum from 'electrum';
import {React} from 'electrum';

class _Launcher extends React.Component {
  render () {
    const navContainer = {
      height:     '100%',
      background: '#336699',
      color:      'rgb(255, 255, 255)',
      boxShadow:  '5px 5px 10px rgba(#101114, 1)',
      zIndex:     2
    };

    const activityContainer = {
      display:        'flex',
      alignItems:     'stretch',
      justifyContent: 'center',
      flexDirection:  'column',
      flexFlow:       'column wrap'
    };

    return (
      <nav style={navContainer} data-view='Launcher'>
        <div style={activityContainer}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export const Launcher = Electrum.wrap ('Launcher', _Launcher);
