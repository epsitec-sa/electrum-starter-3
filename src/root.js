import Electrum from 'electrum';
import {React} from 'electrum';
import {Theme} from 'electrum-theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DataDispatch from './activities/all-in-one/data-dispatch.js';
import DataEvents from './activities/all-in-one/data-events.js';
import DataTable1 from './activities/all-in-one/data-table1.js';
import DataTable2 from './activities/all-in-one/data-table2.js';
import DataRecurrence from './activities/all-in-one/data-recurrence.js';
import DataRecurrences from './activities/all-in-one/data-recurrences.js';
import DataNotes from './activities/all-in-one/data-notes.js';
import DataGlyphs from './activities/all-in-one/data-glyphs.js';

import * as Colors from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';

const theme = {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.red,
    borderColor: Colors.grey300,
    disabledColor: fade (Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  }
};

class _Root extends React.Component {

  constructor (props) {
    super (props);
    window.document.dataDispatch = DataDispatch.data;
    window.document.dataEvents = DataEvents.data;
    window.document.dataTable1 = DataTable1.data;
    window.document.dataTable2 = DataTable2.data;
    window.document.dataRecurrence = DataRecurrence.data;
    window.document.dataRecurrences = DataRecurrences.data;
    window.document.dataNotes = DataNotes.data;
    window.document.dataGlyphs = DataGlyphs.data;
    window.document.mock = true;
  }

  componentWillMount () {
    Electrum.bus.attach (this);
  }

  componentWillUnmount () {
    Electrum.bus.detach (this);
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: getMuiTheme (theme),
    };
  }

  render () {
    const {store, themes} = this.props;
    const state = store.root;
    const amState = state.select ('activity-manager');
    const currentTheme = themes[state.get ('currentThemeIndex') % themes.length];
    const mainActivityPath = amState.get ('mainActivityPath');
    const mainActivity = state.select (mainActivityPath);
    console.log (mainActivity);
    const View = mainActivity.get ('view');
    console.log (state);
    return (
      <main data-main-activity={mainActivityPath}>
        <View state={state.select (mainActivityPath)} theme={Theme.create (currentTheme)}  />
      </main>
    );
  }
}

export const Root = Electrum.wrap ('Root', _Root);
