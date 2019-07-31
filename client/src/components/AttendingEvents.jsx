import React, { Component } from 'react';
import Reminder from './Reminder';
import Assistance from './Assistance';
import EventDetails from './EventDetails';
const axios = require('axios');


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

  handleDelete = (event) => {

    axios.post('/event/delete', {
      data: this.props.event.id
    })
    .then(function (response) {
      console.log('response sent: ', response);
    })
    .catch(function (error) {
      console.log(error);
    });

    window.location.replace('/myevents');
  }

  render() {

    var reminderBox = null;
    if(this.state.reminder_status === true){
      reminderBox = <Reminder/> ;
    }

    const handleToggleAssistance = () =>{
      this.setState({
        assistance_status: false
      })
    }

    var requestBox = null;
    if(this.state.assistance_status === true){
      requestBox = <Assistance handleToggleAssistance={handleToggleAssistance}/> ;
    }

    return(
      <div class="container" id="myeventscomp">
        <h3>{this.props.event.name}</h3>

        <span className='happening'>Happening on:</span>{moment(this.props.event.start_time).format("MMM Do YYYY Do , h:mm")}
        <br></br>
        <button id ="attendevntbtn" onClick={this.handleAssistance}>Contact Organizer</button>
        <button id ="attendevntbtn" onClick={this.handleReminder}>Set Check-in</button>
        <button id ="attendevntbtn" onClick={this.handleDelete}>Delete</button>

        {requestBox}
        {reminderBox}
      </div>

    );
  }
}

export default AttendingEvent
