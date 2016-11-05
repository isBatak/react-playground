import prod from './Root.prod';
import dev from './Root.dev';

const Root = (process.env.NODE_ENV === 'production') ? prod : dev;

export default Root;
