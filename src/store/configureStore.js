import prod from './configureStore.prod';
import dev from './configureStore.dev';

const configureStore = (process.env.NODE_ENV === 'production') ? prod : dev;

export default configureStore;
