var express = require('express');
var router = express.Router();
const axios = require('axios');
const accountSid = 'AC672ba91472c59d7d1f241135eb4b4a67';
const authToken = '63d0ed7cce81e5e6936b369f0635aa40';
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');

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

router.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  const message = res.message()

  console.log("backend test", message)

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});




module.exports = router;
