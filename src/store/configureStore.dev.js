import { createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { DevTools } from 'containers';
import rootReducer from 'reducers/rootReducer';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('reducers/rootReducer', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
