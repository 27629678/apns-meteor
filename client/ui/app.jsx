import React from 'react';

import Form from '../components/form.jsx';
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
        <Form />
        <button onClick={this.btnHandler}>hello</button>
      </div>
    );
  }
}
