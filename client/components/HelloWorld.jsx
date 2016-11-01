import React, { Component } from 'react';

import Clock from './clock.jsx';

class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

export default class HelloWorld extends Component {
  constructor () {
    super()
    this.isProduction = false;
  }

  updateIsProduction() {
    this.isProduction = !this.isProduction;
    console.log(this.isProduction);
  }

  formatUser(user) {
    return user.last + ' ' + user.first;
  }

  render() {
    var user = new User('xiaohua', 'yu');
    return (
      <div>
        <Clock />
        <p>token:</p>
        <input type='textinput'></input>
        <p>isProduction:</p>
        <input
          type='checkbox'
          disabled="true"
          // defaultChecked={this.isProduction == true}
          onClick={this.updateIsProduction.bind(this)}
          />
      </div>
    );
  }
}
