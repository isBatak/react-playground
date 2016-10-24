import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { App } from './containers/App/App';
import Root from './Root';

const domContainerNode = document.getElementById('content');

ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  domContainerNode
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>,
      domContainerNode
    );
  });
}
