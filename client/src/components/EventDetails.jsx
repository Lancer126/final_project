import React, { Component } from 'react';
import Navbarr from './Navbarr';


const moment = require('moment');

class EventDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: this.props.events
    }
  }

  handleClick = (event) => {
    /*console.log(event.target.value);
    axios.post('/event', {
      data: this.props.event
    })
    .then(function (response) {
      console.log('response sent: ', response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }

  render() {

    if(this.props.events.length !== 0 ){
      var url = window.location.href.substring(28)
      console.log(url);
      var events = this.props.events
      console.log(this.props);
      //console.log(events);

      function findEvent(id){
        for(var i = 0; i < events.length; i++){
          if (events[i].id === id){
            return events[i];
          }
        }
      }
      var display = findEvent(url)


      console.log(display);

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

          <button className="buttonevent" style={{maxHeight:"75%"}}>Attend</button>
          <button className="buttonevent" style={{maxHeight:"75%"}}>Request Assistances</button>
          <button className="buttonevent" style={{maxHeight:"75%"}}>Set Reminder</button>
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