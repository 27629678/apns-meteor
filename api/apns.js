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

    // console.log('T: ' + token + ', M: ' + msg + ' B: ' + badge);
    var noti = new this.apn.Notification();
    noti.badge = badge;
    noti.sound = "default";
    noti.title = 'apn-npm push';
    noti.body = msg;
    noti.mutableContent = true;
    noti.topic = "d.netease.mailmaster";
    noti.category='readAndDeletePushIdentifier';
    noti.payload = {
      p: {
        fid: 1,
        m: '43:1tbiKxsUPFQHC7KQiAAAsq',
        type: 'mail',
        u: 'yxhtest@163.com'
      }
    }
    console.log(noti);
    this.provider.send(noti, token).then((result) => {
      console.log(result);
    });
  }
}
