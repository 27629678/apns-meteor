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

/*

{
    "body":"{"aps":{"alert":"钦南\nii","badge":1,"category":"readAndDeletePushIdentifier","mutable-content":1,"sound":"testSound"},"p":{"fid":1,"m":"30:1tbiHgn+cFSISIpMbwABsl","type":"mail","u":"youxiangtest123456@163.com"}}",
    "token":"11685452986B66473BC7B80A7DE39BD73E7FD7CDE818CDA048E6A6AEE5B6C953"
}
*/
