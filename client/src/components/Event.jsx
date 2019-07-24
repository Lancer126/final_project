import React, { Component } from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Event extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="eventbox">
          <div>
          <a href="/eventdetails">{this.props.event.name.text}</a>
          </div>
          {this.props.event.logo? <img className="eventboximg" src={this.props.event.logo.original.url} /> : null}

          <span>{this.props.event.start.local}</span>
          <p>{this.props.event.summary}</p>

          <button>Attend</button>



      <Switch>
            <Route path='/eventdetails' render={() => <EventDetails event={this.props.event} />} />

      </Switch>
        </div>
      </Router>

    );
  }
}

export default Event;