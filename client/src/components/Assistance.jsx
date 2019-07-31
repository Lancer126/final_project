import React, { Component } from 'react';
import Modal from './modalWindow.jsx'
const axios = require('axios');

class Assistance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/posttomessage', {
      message: this.state.message
    })
    .then(function (response) {
      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    const modalStyle = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0,0.5)"
      }
    };

    return(
      <div>
        <Modal
        isModalOpen={true}
        closeModal={() => {}}
        style={modalStyle}>
          <div>
          <button id="xbutton" onClick={this.props.handleToggleAssistance}  type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="connecttoevent">Connecting you to event organizer.</h4>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" value="Submit" onClick={this.handleSubmit && this.props.handleToggleAssistance}/>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Assistance
