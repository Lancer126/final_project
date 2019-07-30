import React, { Component } from 'react';
import Navbarr from './Navbarr';
const axios = require('axios');

class Aid extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.body.classList.remove('loginBg');
    document.body.style.background= "white";
  }

  handleChange(event) {
    console.log("test",event.target.value)
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/posttomessage', {
      message: this.state.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
     

  <div>
  <Navbarr />
      <h3>Warning Text</h3>
<button>Request Aid Now</button>
<form onSubmit={this.handleSubmit}>

  <input type="text" className="chat-message" value={this.state.value} onChange={this.handleChange}/>
</form>
</div>
    );
  }
}

export default Aid;