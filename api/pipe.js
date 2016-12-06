import { Meteor } from 'meteor/meteor';
import APNS from './apns.js';

if (Meteor.isServer) {
  const provider = new APNS();

  Meteor.methods({
    'apns.send'({bundle_id, token, msg}) {
      provider.send(bundle_id, token, msg, 2);
    }
  });
}
