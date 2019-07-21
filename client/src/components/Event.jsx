import React, { Component } from 'react';

class Event extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
        <form>
          <span>{this.props.event.name.text}</span>
          <span>{this.props.event.start.local}</span>
          <p>{this.props.event.summary}</p>


        </form>
    );
  }
}

export default Event;