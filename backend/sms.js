var express = require('express');
var router = express.Router();
const axios = require('axios');
const accountSid = 'AC672ba91472c59d7d1f241135eb4b4a67';
const authToken = '63d0ed7cce81e5e6936b369f0635aa40';
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig['development']);
const moment = require('moment');

const bodyParser = require('body-parser');

const setTime = setInterval(SearchEvents, 3000);

function AddMinutesToDate(date, minutes) {
  console.log("newdate trigger")
  return new Date(date.getTime() + minutes*60000);
}


const newDate = moment().format();
const next = moment().add(1, 'minutes');

function SearchEvents() {
  knex("events")
  .whereBetween('start_time', [newDate, next])
  .then((filteredEvents) => {
    console.log("after then")
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
}