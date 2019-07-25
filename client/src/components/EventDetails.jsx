import React, { Component } from 'react';

class EventDetails extends Component {
  constructor(props){
    super(props);
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
          <h3>{display.name.text}</h3>
          <p>{display.description.text}</p>
          <button>Request Assistances</button>
          <button>Set Reminder</button>

        </div>

      );
    }
    return null;
  }
}

export default EventDetails