import React, { Component } from 'react';

class Event extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="eventbox">
          <div>
          <h3>{this.props.event.name.text}</h3>
          </div>
          {this.props.event.logo? <img className="eventboximg" src={this.props.event.logo.original.url} /> : null}

          <span>{this.props.event.start.local}</span>
          <p>{this.props.event.summary}</p>


        </div>
    );
  }
}

export default Event;