import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // synthetic event
    // https://facebook.github.io/react/docs/events.html
    e.preventDefault();
    this.setState((prevState) => {
      return { isToggleOn: !prevState.isToggleOn }
    });
  }

  render() {
    return (
      <button onClick={ this.handleClick }>
        { this.state.isToggleOn ? 'On' : 'Off' }
      </button>
    );
  }
}
