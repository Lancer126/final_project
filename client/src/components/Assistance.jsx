import React, { Component } from 'react';
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


    return(
      <div>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default Assistance
