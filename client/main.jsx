import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Hello from './components/HelloWorld.jsx';

Meteor.startup(() => {
  render(<Hello />, document.getElementById('container'));
});
