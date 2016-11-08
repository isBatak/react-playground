import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Home } from 'containers';

const Root = ({ store }) => (
  <Provider store={store}>
    <Home />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
