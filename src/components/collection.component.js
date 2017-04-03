import {React} from 'electrum';

/******************************************************************************/

export default class Collection extends React.Component {

  render () {
    const {state, style, theme} = this.props;
    const keys = state.keys;
    const template = this.props.template || <div>Missing template</div>;
    return (
      <section style={style} data-collection>
        {keys.map (key => template (state.select (key), theme))}
      </section>
    );
  }
}
