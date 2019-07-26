const axios = require ("axios")
const moment = require('moment');

const eventArray = [61297232673,
  53253569861,
  35885870605,
  61522649902,
  58389716213]

  exports.seed = function(knex){
    const promises = eventArray.map((eventID)=> {

      return axios({
        method: 'get',
        url: 'https://www.eventbriteapi.com/v3/events/'+ eventID,
        headers: {"Authorization": "Bearer "+process.env.EVENTBRITE_TOKEN}
      })
        .then(function (response) {
          // handle success
          let data =  response.data
          return knex('events').insert({
            name: data.name.text,
           // photo: data.logo?data.logo.orginal.url: null,
            //description: data.summary,
            start_time: moment().format(),
            end_time: data.end.local,
            organizer: data.organization_id,
            //price: data.is_free,
            location: data.venue_id,
            tag: data.category_id
          })
          //console.log(data);
          
        })
        .catch(function (error) {
          // handle error
          console.log('error', error);
        })
      
      //axios api call
      
    });
    return Promise.all([...promises]);
  }