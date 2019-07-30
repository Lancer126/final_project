import React, { Component } from 'react';
import EventDetails from './EventDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const axios = require('axios');

const moment = require('moment');

class Event extends Component {

  constructor(props){
    super(props);
  }

  handleClick = (event) => {
    console.log(event.target.value);
    axios.post('/event', {
      data: this.props.event
    })
    .then(function (response) {
      console.log('response sent: ', response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    const link = '/event/'+this.props.event.id;
    return (
      <div>


      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	<div class="flipper">
		<div class="front">
    <h4>{this.props.event.name.text}</h4>
    {this.props.event.logo? <img className="eventboximg" style={{maxHeight:"180px", maxWidth: "auto"}} src={this.props.event.logo.original.url} /> : null}
		</div>
		<div class="back">
    <h4>{this.props.event.name.text}</h4>
    <span>{moment(this.props.event.start.local).format("MMM Do YY")}</span>
          <p>{this.props.event.summary}...</p>
          {/* <Link to={link}><button>More Info</button></Link> */}
          <Link to={link} className="nav-link"><button id = "evntbtn"> More Info </button></Link>
		</div>
	</div>
</div>
</div>
    );
  }
}

export default Event;