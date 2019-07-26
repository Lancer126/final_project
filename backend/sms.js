const accountSid = 'AC672ba91472c59d7d1f241135eb4b4a67';
const authToken = '8628b43d5140f36457c36ae88c246b9b';
const client = require('twilio')(accountSid, authToken);
console.log('test node js')
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15146124974',
     to: '+15149796909'
   })
  .then(message => console.log(message.sid));