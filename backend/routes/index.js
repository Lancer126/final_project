var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/event', function(req, res, next) {

  function buildURL(location_address,location_within,start_date_range_start,start_date_range_end){
    var url = "https://www.eventbriteapi.com/v3/events/search/?";
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

module.exports = router;
