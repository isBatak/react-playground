import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from 'containers';

const domContainerNode = document.getElementById('content');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  domContainerNode
);

if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      domContainerNode
    );
  });
}
