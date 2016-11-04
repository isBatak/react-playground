import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Hello } from 'components';
import { DevTools } from 'containers';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  componentDidMount() {}

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Hello />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
