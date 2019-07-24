// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC672ba91472c59d7d1f241135eb4b4a67';
const authToken = '63d0ed7cce81e5e6936b369f0635aa40';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15146124974',
     to: '+15149796909'
   })
  .then(message => console.log(message.sid));

  