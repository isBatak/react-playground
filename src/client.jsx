import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'store';
import { AppContainer } from 'react-hot-loader';
import { Root } from 'containers';

const store = configureStore();
const domContainerNode = document.getElementById('content');

ReactDOM.render(
  <AppContainer>
    <Root
      store={store}
    />
  </AppContainer>,
  domContainerNode
);

if (module.hot) {
  module.hot.accept('./containers/Root/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextRoot = require('./containers/Root/Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextRoot
          store={store}
        />
      </AppContainer>,
      domContainerNode
    );
  });
}
