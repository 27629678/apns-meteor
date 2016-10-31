import React, { Component } from 'react';

export default class HelloWorld extends Component {
  constructor () {
    super()
    this.isProduction = false;
  }

  updateIsProduction() {
    this.isProduction = !this.isProduction;
    console.log(this.isProduction);
  }

  render() {
    return (
      <div>
        <h1>Hello, World.</h1>
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
