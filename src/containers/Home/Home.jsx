import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions/counter';
import { Counter } from 'components';

@connect(
  store => ({
    value: store.counter.value,
  }),
  {
    increment,
    decrement,
  }
)
export default class Home extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  componentDidMount() {}

  render() {
    return (
      <Counter
        value={this.props.value}
        onIncrement={this.props.increment}
        onDecrement={this.props.decrement}
      />
    );
  }
}
