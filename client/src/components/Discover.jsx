import React, { Component } from 'react';
import Event from './Event';
import CarouselPage from './carousel'
import allEventbutton from "./alleventsbutton"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbarr from './Navbarr';

class Discover extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    document.body.classList.remove('loginBg');
  }

  render() {
    const events = this.props.events;
    const allEvents = events.map((event) => {
      return <Event event={event} key={event.id}/>
    });

    return (
      <div>
      <Navbarr />
      <div className="container">
        <CarouselPage events={events}/>
        <div className="allEventsButton">
          <Link to='/search'><allEventbutton/></Link>
        </div> 
      </div> 
      </div>
    );
  }
}

export default Discover;