import { Meteor } from 'meteor/meteor';
import APNS from './apns.js';

if (Meteor.isServer) {
  const provider = new APNS();

  Meteor.methods({
    'apns.send'({token, msg}) {
      provider.send(token, msg, 2);
    }
  });
}
