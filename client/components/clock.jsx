import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log('Clock Component Mounted.');
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    console.log('Clock Component will be unmounted.');
  }

  render () {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
      </div>
    );
  }
}
