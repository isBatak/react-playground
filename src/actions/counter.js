export const INCREMENT = 'app/COUNTER_INCREMENT';
export const DECREMENT = 'app/COUNTER_DECREMENT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
