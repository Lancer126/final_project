var express = require('express');
var router = express.Router();
const axios = require('axios');
const accountSid = process.env.TWILLIOACCOUNTSID;
const authToken = process.env.TWILLIOAUTHTOKEN;
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

function AddMinutesToDate(date, minutes) {
  console.log("newdate trigger")
  return new Date(date.getTime() + minutes*60000);
}
function DateFormat(date){
const days = date.getDate();
const year = date.getFullYear();
const month = (date.getMonth()+1);
const hours = date.getHours();
const minutes = date.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
const strTime = days + '/' + month + '/' + year + '/ '+hours + ':' + minutes;
return strTime;
}
const now = new Date();
const next = AddMinutesToDate(now,15);

while (true) {
  setTimeout(() => {
      knex(events)
          .whereBetween('start_time', [new Date(), DateFormat(next)])
          .then((filteredEvents) => {
              filteredEvents.forEach(event => {
                client.messages
                .create({
                   body: "Hey this is eventure, just checking if everything is going well at the event. Reply no if you need us to contact your emergency contacts.",
                   from: '+15146124974',
                   to: '+15149796909'
                 })
                .then(message => console.log(message.sid));
              })
          })
  }, 900000);
};

/* GET home page. */
router.get('/event', function(req, res, next) {

  function buildURL(location_address,location_within,start_date_range_start,start_date_range_end){
    var url = "https://www.eventbriteapi.com/v3/events/search/?expand=venue&";
    url = url + location_address + location_within + start_date_range_start +start_date_range_end;
    return url;
  }
  var newURL = buildURL('location.address=montreal&', 'location.within=5km&', 'start_date.range_start=2019-08-01T00:00:01Z&', 'start_date.range_end=2019-08-05T00:00:01Z')
  console.log(newURL);
  axios({
    method: 'get',
    url: newURL,
    headers: {"Authorization": "Bearer 5EJAZWO4PXVDSST4T4RB"}
  })
    .then(function (response) {
      // handle success
      let data =  response.data.events
      //console.log(data);
      res.json(data);
    })
    .catch(function (error) {
      // handle error
      console.log('error', error);
    })
});


//receiving a text message
router.post('/sms', (req, res) => {
  let eventMessage = req.body.Body
  const twiml = new MessagingResponse();
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});

router.post('/posttomessage', (req, res) => {
client.messages
  .create({
     body: req.body.message,
     from: '+15146124974',
     to: '+15149796909'
   })
  .then(message => console.log(message.sid));

  })
  
  


module.exports = router;
