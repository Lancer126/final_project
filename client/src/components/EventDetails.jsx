import React, { Component } from 'react';

class EventDetails extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const url = window.location.href.substring(28)
    const events = this.props.events
    console.log(this.props);
    //console.log(events);
    const display = events.find(function(element) {
      return element.id = url;
    });

    console.log(display);

    return (
      <div>
        <h3> display.name.text </h3>
        <button>Request Ass</button>
        <button>Set Reminder</button>

      </div>

    );
  }
}

export default EventDetails