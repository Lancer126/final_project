import React, { Component } from 'react';
import Navbarr from './Navbarr';

class EventDetails extends Component {
  constructor(props){
    super(props);
  }

  render() {

    if(this.props.events.length !== 0 ){
      var url = window.location.href.substring(28)
      console.log("url:", url);
      var events = this.props.events
      console.log("Events:", this.props.events);
      //console.log(events);

      function findEvent(id){
        for(var i = 0; i < events.length; i++){
          console.log(id)
          if (events[i].id === id){
            return events[i];
          }
        }
        return events[0]
      }
      var display = findEvent(url)


      console.log(display);

      return (
        <div>
        <Navbarr />  
        <div className="eventdetails">
          {/* photo to the top left */}
        <div id="eventfirstrow">
          <div id="detailphoto">
          <img src={display.logo? display.logo.original.url:null} style={{height:"100%",width:"100%"}}/>
          </div>
          <div id="detailsinfo" >
          <span className="whitespace">{display.start.local}</span>
          <h5 className="whitespace">{display.name.text}</h5>
          <span className="whitespace">{display.venue.name}</span>
          <span className="whitespace">{display.venue.address.address_1}</span>
          </div>
        </div>
          <div>
          <button>Attend</button>
          <button>Request Assistances</button>
          <button>Set Reminder</button>
          </div>
<div id="eventinfo">
        {display.description.text}
        </div>
        </div>
        </div>



      );
    }
    return null;
  }
}

export default EventDetails