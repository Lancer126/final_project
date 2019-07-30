import React, { Component } from 'react';
import Reminder from './Reminder';
import Assistance from './Assistance';
import EventDetails from './EventDetails';

const moment = require('moment');

class AttendingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder_status: false,
      assistance_status: false
    };
  }

  handleReminder = (event) => {
    if(this.state.reminder_status===false){
      this.setState({reminder_status: true})
    }
    else{
      this.setState({reminder_status: false})
    }
  }

  handleAssistance = (event) => {
    if(this.state.assistance_status===false){
      this.setState({assistance_status: true})
    }
    else{
      this.setState({assistance_status: false})
    }
  }


  render() {

    var reminderBox = null;
    if(this.state.reminder_status === true){
      reminderBox = <Reminder/> ;
    }

    var requestBox = null;
    if(this.state.assistance_status === true){
      requestBox = <Assistance/> ;
    }

    return(
      <div class="container" id="myeventscomp">
        <h3>{this.props.event.name}</h3>
        
        {moment(this.props.event.start_time).format("MMM Do YY")}
        <br></br>
        <button id ="attendevntbtn" onClick={this.handleAssistance}>Request Assistance</button>
        <button id ="attendevntbtn" onClick={this.handleReminder}>Set Reminder</button>
       
        {requestBox}
        {reminderBox}
      </div>

    );
  }
}

export default AttendingEvent
