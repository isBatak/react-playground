import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Hello } from 'components';

const Root = ({ store }) => (
  <Provider store={store}>
    <Hello />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
