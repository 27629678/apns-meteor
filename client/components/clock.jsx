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

  /*
  * 不可以直接更新state，如：this.state.date = new Date();
  * 正确的更新姿势为：this.setState({ date: new Date() });
  * state的更新操作为异步操作，出于性能的考量会将多个update操作放在一起操作；
  * 所以，props和state的更新时，不可以信赖彼此的状态，可以使用如下方式：
  * this.setState((prevState, props) => {
  *   counter: prevState.counter + props.increments
  * });
  */

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
