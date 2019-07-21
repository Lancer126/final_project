import React, { Component } from 'react';
import Event from './Event';

class Discover extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const events = this.props.events;
    console.log(this.props.events);
    const allEvents = events.map((event) => {
      return <Event event={event} key={event.id}/>
    });
    return (
      <div>

        <h3>Discover</h3>

        <h3>Trending</h3>

        <h3>Upcoming</h3>

        <div>
        {allEvents}
        </div>

        </div>
    );
  }
}

export default Discover;