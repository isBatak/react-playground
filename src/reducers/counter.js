import { INCREMENT, DECREMENT } from 'actions/counter';

const initalState = {
  value: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
