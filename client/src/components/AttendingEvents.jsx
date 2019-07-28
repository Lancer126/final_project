import React, { Component } from 'react';

class AttendingEvent extends Component {
  constructor(props) {
    super(props);

  }


  render() {



    return(
      <div>
        <h3>{this.props.event.name}</h3>
        {this.props.event.start_time}
        <button>Request Assistance</button>
        <button>Set Reminder</button>
      </div>
    );
  }
}

export default AttendingEvent
