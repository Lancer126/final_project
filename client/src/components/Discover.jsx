import React, { Component } from 'react';
import Event from './Event';
import CarouselPage from './carousel'
import allEventbutton from "./alleventsbutton"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <div className="container">
        <CarouselPage events={events}/>
        <div className="allEventsButton">
          <Link to='/search'><allEventbutton/></Link>
        </div> 
      </div> 
    );
  }
}

export default Discover;