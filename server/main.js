import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var apn = require('apn');
  console.log(apn);
});
