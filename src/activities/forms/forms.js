import {React} from 'electrum';
import {Button} from '../../all-components';
import act from './actuators.js';

export default class Forms extends React.Component {
  render () {
    return (
      <div>
        <h1>Forms Wizard Demo</h1>
        <Button {...this.link ()} action={act.START_WIZARD}>
          Start wizard...
        </Button>
      </div>
    );
  }
}
