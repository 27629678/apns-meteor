import { Meteor } from 'meteor/meteor';
import React from 'react';
import '../../api/pipe.js';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.textChanged = this.textChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  textChanged(event) {
    event.persist();  // 若不调用该方法，出于性能的考量，event出了作用域后置为null
    this.setState(() => {
      return { value: event.target.value };
    });
  }

  submit() {
    let text = document.getElementById('message').value;
    let bundle_id = document.getElementById('bundle_id').value;
    let token = document.getElementById('token').value;
    let msg = text.length > 0 ? text : 'hzyuxiaohua\nYou have a new message';
    // let token = '4c99a6a919b88f6aabb316c39ec29f5b9ac4c1ecf1d044785e80e6f8f92af719';
    Meteor.call('apns.send',
      { bundle_id: bundle_id, token: token, msg: msg},
      (err, res) => {
        if (err) {
          alert(err);
        }
        else {
          console.log('success, res: ' + res);
        }
      });
  }

  render() {
    return (
      <div>
        <br></br>
        <label>Bundle Id:</label>
        <input
          type = 'text'
          placeholder = 'input bundle id ...'
          onChange = { this.textChanged }
          id = 'bundle_id'/>
        <br></br>
        <label>message:</label>
        <input
          type = 'text'
          placeholder = 'input the message ...'
          onChange = { this.textChanged }
          id='message'/>
        <br></br>
        <label>Device Token:</label>
        <input
          type = 'text'
          placeholder = 'input device token ...'
          onChange = { this.textChanged }
          id = 'token'/>
        <br></br>
        <button onClick = { this.submit }>
          submit
        </button>
      </div>
    );
  }
}
