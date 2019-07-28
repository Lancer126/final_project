import React, { Component } from 'react';
import EventDetails from './EventDetails';
const axios = require('axios');

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
      



        <div className="eventbox">
          <div>
          <a href={link}>{this.props.event.name.text}</a>
          </div>
          {this.props.event.logo? <img className="eventboximg" src={this.props.event.logo.original.url} /> : null}

          <span>{this.props.event.start.local}</span>
          <p>{this.props.event.summary}</p>

          <button onClick={this.handleClick}>Attend</button>

        </div>


    );
  }
}

export default Event;