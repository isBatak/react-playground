import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { DevTools } from 'containers';
import { Hello } from 'components';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Hello />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
