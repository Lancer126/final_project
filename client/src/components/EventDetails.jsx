import React, { Component } from 'react';
import Navbarr from './Navbarr';
const axios = require('axios');


const moment = require('moment');

class EventDetails extends Component {
  constructor(props){
    super(props);

  }

  handleClick = (event) => {
    var e = this.props.events.find(function(element) {
                return element.id == window.location.href.substring(28);
            })
    axios.post('/event', {
      data: e
    })
    .then(function (response) {
      console.log('response sent: ', response);
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.replace('/myevents');
  }

  render() {

    if(this.props.events.length !== 0 ){
      var url = window.location.href.substring(28)

      var events = this.props.events


      function findEvent(id){
        for(var i = 0; i < events.length; i++){

          if (events[i].id === id){
            return events[i];
          }
        }
        return events[0]
      }
      var display = findEvent(url)

      return (
        <div>
        <Navbarr/>
        <div className="centertoview">
        <div className="eventdetails">
          {/* photo to the top left */}
        <div id="eventfirstrow">
          <div id="detailphoto">
          <img src={display.logo? display.logo.original.url:null} style={{height:"100%",width:"100%"}}/>
          </div>
          <div id="detailsinfo" >
          <span className="whitespace">{moment(display.start.local).format("MMM Do YY")}</span>
          <h5 className="whitespace">{display.name.text}</h5>
          <span className="whitespace">{display.venue.name}</span>
          <span className="whitespace">{display.venue.address.address_1}</span>
          </div>
        </div>
          <div id="eventbuttons">
            <div id="eventspace">

          <button className="buttonevent" style={{maxHeight:"75%"}} onClick={this.handleClick}>Attend</button>

            </div>
          </div>

        <div id="eventinfo" dangerouslySetInnerHTML={{__html:display.description.html}}>
        </div>
        </div>
        </div>
        </div>



      );
    }
    return null;
  }
}

export default EventDetails