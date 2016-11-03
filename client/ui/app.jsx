import React from 'react';

import Form from '../components/form.jsx';
import Clock from '../components/clock.jsx';
import Toggle from '../components/toggle.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Form />
      </div>
    );
  }
}
