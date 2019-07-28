import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const axios = require('axios');

class EmergencyContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name1: '',
        phone1: '',
        name2: '',
        phone2: '',
        name3: '',
        phone3: ''
    };

    this.handlePhone1 = this.handlePhone1.bind(this);
    this.handleName1 = this.handleName1.bind(this);
    this.handlePhone2 = this.handlePhone2.bind(this);
    this.handleName2 = this.handleName2.bind(this);
    this.handlePhone3 = this.handlePhone3.bind(this);
    this.handleName3 = this.handleName3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhone1(event) {
    this.setState({phone1: event.target.value});
  }

  handleName1(event) {
    this.setState({name1: event.target.value});
  }

  handlePhone2(event) {
    this.setState({phone2: event.target.value});
  }

  handleName2(event) {
    this.setState({name2: event.target.value});
  }

  handlePhone3(event) {
    this.setState({phone3: event.target.value});
  }

  handleName3(event) {
    this.setState({name3: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var self = this;
    
      axios.post('/addcontact', {
        name: this.state.name1,
        phone: this.state.phone1,
        email: window.sessionStorage.getItem('user_email')
      })
      .then(function (response) {
        window.sessionStorage.setItem('contact_phone', this.state.phone1);
        window.sessionStorage.setItem('contact_name', this.state.name1);
        self.props.history.push('/map')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          Emergency Contact
        <br/>
        <label>
          Name
          <input type="text" name="phone1" value={this.state.name1} onChange={this.handleName1} placeholder="Tits McGee"/>
        </label>
        <label>
          Phone
          <input type="text" value={this.state.phone1} onChange={this.handlePhone1} name="phone1" placeholder="4387778885"/>
        </label>
        <input type="submit" value="Submit" />
      </form>

      </div>
    );
  }
}

export default EmergencyContacts;