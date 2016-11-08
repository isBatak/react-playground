import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { DevTools, Home } from 'containers';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Home />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
