export default class APNS {
  constructor() {
    var options = {
      token: {
        key: '/Users/APNsAuthKey_H45CDV34VF.p8',
        keyId: 'H45CDV34VF',
        teamId:'K8WE64BK54',
      },
      production: false,
    };

    this.apn = require('apn');
    this.provider = new require('apn').Provider(options);

    console.log('APNS.init, apn: ' + (typeof this.apn));
  }

  send(token, msg, badge) {
    new SimpleSchema ({
      token: {type: String},
      msg: {type: String},
      badge:{type: Number}
    }).validate({token, msg, badge});

    console.log('T: ' + token + ', M: ' + msg + ' B: ' + badge);
    var note = new this.apn.Notification();
    note.badge = 1;
    note.sound = "default";
    note.alert = "hzyuxiaohua\nYou have a new message";
    note.topic = "d.netease.mailmaster";
    this.provider.send(note, token).then((result) => {
      console.log(result);
    });
  }
}
