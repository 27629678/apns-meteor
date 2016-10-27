import { Meteor } from 'meteor/meteor';

function greetMe(user) {
  console.log(variable);
  var variable = 1;
  console.log(variable);
  return 'Hi, ' + user;
}

Meteor.startup(() => {
  // code to run on server at startup

  console.log(greetMe('hzyuxiaohua'));

  var apn = require('apn');
  console.log(apn);
});
