import React, { Component } from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Event extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="eventbox">
          <div>
          <a href="/event/:id">{this.props.event.name.text}</a>
          </div>
          {this.props.event.logo? <img className="eventboximg" src={this.props.event.logo.original.url} /> : null}

          <span>{this.props.event.start.local}</span>
          <p>{this.props.event.summary}</p>

          <button>Attend</button>

        </div>


    );
  }
}

export default Event;