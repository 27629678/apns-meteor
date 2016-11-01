import React from 'react';

import Clock from '../components/clock.jsx';
import Toggle from '../components/toggle.jsx';

export default class App extends React.Component {

  btnHandler() {
    console.log('hello.');
  }

  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <button onClick={this.btnHandler}>hello</button>
      </div>
    );
  }
}
