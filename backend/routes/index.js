var express = require('express');
var router = express.Router();
const axios = require('axios');
const accountSid = process.env.TWILLIOACCOUNTSID;
console.log(accountSid)
const authToken = process.env.TWILLIOAUTHTOKEN;
console.log(authToken)
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');
//knex config file
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig['development']);
const moment = require('moment');

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

const setTime = setInterval(searchEvents, 900000);

const newDate = moment();
const next = moment().add(15, 'minutes');

//Checks if the email exists
async function emailChecker(email) {
  const res = await knex("users").where('email', email);
  if (res[0]) {
    return res[0].id;
  }
  else {
    return false;
  }
}

//Checks if the password matches
async function passwordChecker(email, password) {
  const res = await knex("users").where('email', email);
  console.log("Res:", res)
  if (res.length === 0) {
    return false;
  }
  else {
    console.log(res[0].password)
    console.log(password)
    return res[0].password === password;
  }
}


function searchEvents() {
  console.log("timenow", newDate)
  console.log("time15", next)
  knex("events")
  .select('start_time')
  .then((allTimes)=>{
    unixArray=[]
    for(index of allTimes){
      let unixTime= moment(allTimes[index]).unix()
      if(unixTime < moment(next).unix() && unixTime > moment(newDate).unix()){

        unixArray.push(unixTime)
        unixArray.forEach(event => {
        client.messages
        .create({
           body: "Hey this is eventure, just checking if everything is going well at the event. Reply no if you need us to contact your emergency contacts.",
           from: '+15146124974',
           to: '+15149796909'
         })
        .then(message => console.log(message.sid));
      })

    }else{console.log('event not in time frame')}

    }
  })

}


/* GET home page. */
router.get('/event', function (req, res, next) {

  function buildURL(location_address, location_within, start_date_range_start, start_date_range_end) {
    var url = "https://www.eventbriteapi.com/v3/events/search/?expand=venue,ticket_classes&";
    url = url + location_address + location_within + start_date_range_start + start_date_range_end;
    return url;
  }
  var newURL = buildURL('location.address=montreal&', 'location.within=9km&', 'start_date.range_start=2019-08-01T00:00:01Z&', 'start_date.range_end=2019-08-05T00:00:01Z')

  axios({
    method: 'get',
    url: newURL,
    headers: { "Authorization": "Bearer 5EJAZWO4PXVDSST4T4RB" }
  })
    .then(function (response) {
      // handle success
      let data =  response.data.events
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

console.log(req.body)
  if (req.body.Body == 'no') {
    console.log('test')
    twiml.message('ok, have a great time');
  } else if (req.body.Body == 'yes') {
    twiml.message('Were on it');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }


  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
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

router.post('/register', (req, res) => {
  let name = req.body.user.name.split(' ');
  let email = knex('users')
  .where({'email': req.body.user.email})
  .then(result => {
    if(result.length !== 0){
      res.status(400).json({message: 'Email already in use.'});
    }
  })
 console.log(email)
  return knex('users')
    .insert({
      first_name: name[0],
      last_name: name[1],
      email: req.body.user.email,
      password: req.body.user.password,
      phone_number: Number.parseInt(req.body.user.phone)
    })
    .then(() => res.sendStatus(201))
    .error(err => console.log(err))
    .catch(e => console.log(e))
})

router.post('/addcontact', (req, res) => {
    return knex('users')
    .where({'email': req.body.email})
    .update({
      emergency_contact_name: req.body.name,
      emergency_contact_number: Number.parseInt(req.body.phone)
    })
    .then(() => res.sendStatus(201))
    .error(err => console.log(err))

})

router.post('/login', (req, res) => {
  knex('users')
    .where({'email': req.body.email})
    .then((resu) => {
        if(resu[0].password === req.body.password) {
          res.status(200).json({phone: resu[0].phone_number, email: resu[0].email, name: resu[0].last_name ? resu[0].first_name+" "+resu[0].last_name : resu[0].first_name,
            contact_phone: resu[0].emergency_contact_number, contact_name: resu[0].emergency_contact_name})
        }
        else {
          res.status(400)
        }
    })
    .error(err => console.log(err))
    .catch(err => console.log(err))
})

module.exports = router;