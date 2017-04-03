import Electrum from 'electrum';
import {React} from 'electrum';
import {Collection} from '../../all-components';
import tabTemplate from './tab-template.js';

class _Tabs extends React.Component {
  render () {
    const navContainer = {
      flex:            0.1,
      color:           '#222222',
      backgroundColor: '#f5f5f5',
      zIndex:          1
    };

    const activityContainer = {
      display:        'flex',
      flexDirection:  'row',
      flexWrap:       'no-wrap',
      justifyContent: 'flex-start'
    };

    return (
      <nav style={navContainer} data-view='Tabs'>
        <Collection
          {...this.link ('activities')}
          style={activityContainer}
          template={(key) => tabTemplate (key, this.props)} />
      </nav>
    );
  }
}

export const Tabs = Electrum.wrap ('Tabs', _Tabs);
