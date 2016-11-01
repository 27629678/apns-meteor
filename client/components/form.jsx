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
    let text = document.getElementById('msg').value;
    let msg = text.length > 0 ? text : 'hzyuxiaohua\nYou have a new message';
    let token = '95ecf4ef9169e20b238b6ff692ddb2af54ea4da1cc4a75c86a2b9c60cba90e75';
    Meteor.call('apns.send',
      { token: token, msg: msg},
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
        <input
          type = 'text'
          placeholder = 'input'
          // value = { this.state.value }
          onChange = { this.textChanged }
          id='msg'/>
        <button onClick = { this.submit }>
          submit
        </button>
      </div>
    );
  }
}
