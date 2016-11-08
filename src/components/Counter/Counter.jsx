import React, { PropTypes } from 'react';

const Counter = props => (
  <div>
    <div>
      {props.value}
    </div>
    <button onClick={props.onDecrement}>
      -
    </button>
    <button onClick={props.onIncrement}>
      +
    </button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Counter;
