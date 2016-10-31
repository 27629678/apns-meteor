import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  var apn = require('apn');
  var options = {
    token: {
      key: '/Users/APNsAuthKey_H45CDV34VF.p8',
      keyId: 'H45CDV34VF',
      teamId:'K8WE64BK54',
    },
    production: false,
  };

  var apnProvider = new apn.Provider(options);
  let token = '95ecf4ef9169e20b238b6ff692ddb2af54ea4da1cc4a75c86a2b9c60cba90e75';

  var note = new apn.Notification();
  note.badge = 130;
  note.sound = "default";
  note.alert = "hzyuxiaohua\nYou have a new message";
  note.topic = "d.netease.mailmaster";

  apnProvider.send(note, token).then((result) => {
    console.log(result);
  });
});
