import React, { Component } from 'react';
import { Hello } from '../../components/Hello/Hello';

export default class App extends Component {
  componentDidMount() {
    console.log('App');
  }

  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}
