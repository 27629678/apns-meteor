import React from 'react';

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
    alert(this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type = 'text'
          placeholder = 'input'
          // value = { this.state.value }
          onChange = { this.textChanged }/>
        <button onClick = { this.submit }>
          submit
        </button>
      </div>
    );
  }
}
