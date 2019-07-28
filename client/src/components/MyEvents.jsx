import React, { Component } from 'react';
import AttendingEvent from './AttendingEvents';

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch('/myevents')
         .then(function(response) {
           return response.json();
         })
         .then( data => {
           console.log('RECEIVING DATA IS: ', data)
           this.setState({events: data});

         })
         .catch(e => {
           console.log(e)
         })
  }

  render() {

    const attendingEvents = this.state.events.map((event) => {
      return <AttendingEvent event={event} key={event.id}/>
    });

    return(
      <div>
        <h2>My Events </h2>
        {attendingEvents}

      </div>
    );
  }
}

export default MyEvents
