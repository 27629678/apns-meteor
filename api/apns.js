export default class APNS {
  constructor() {
    var options = {
      token: {
        key: '/Users/APNsAuthKey_JCYGYK5MLP.p8',
        keyId: 'JCYGYK5MLP',
        teamId:'K8WE64BK54',
      },
      production: false,
    };

    this.apn = require('apn');
    this.provider = new require('apn').Provider(options);

    console.log('APNS.init, apn: ' + (typeof this.apn));
  }

  send(bundle_id, token, msg, badge) {
    new SimpleSchema ({
      token: {type: String},
      msg: {type: String},
      badge:{type: Number}
    }).validate({token, msg, badge});

    var silent = new this.apn.Notification();
    silent.topic = bundle_id;
    silent.contentAvailable = true;

    this.provider.send(silent, token).then((result) => {
      console.log(result);
    });

    // console.log('T: ' + token + ', M: ' + msg + ' B: ' + badge);
    var noti = new this.apn.Notification();
    noti.badge = badge;
    noti.sound = "default";
    noti.title = 'apn-npm push';
    noti.body = msg;
    noti.mutableContent = true;
    noti.topic = bundle_id;
    noti.category='readAndDeletePushIdentifier';
    noti.payload = {
      p: {
        fid: 1,
        m: '43:1tbiKxsUPFQHC7KQiAAAsq',
        type: 'mail',
        u: 'yxhtest@163.com'
      }
    }
    console.log('sending: \n\tbundle_id' + noti.topic + '; \n\ttoken:' + token);

    let promise = this.provider.send(noti, token);
    promise.then((result) => {
      console.log('over.');
    })
  }
}
