import React, { Component } from 'react';
import Event from './Event';
import CarouselPage from './carousel'

class Discover extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const events = this.props.events;
    const allEvents = events.map((event) => {
      return <Event event={event} key={event.id}/>
    });

    return (
      <div>
<CarouselPage events={events}/>
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