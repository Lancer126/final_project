import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const axios = require('axios');

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: []
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handlePhone(event) {
    this.setState({phone: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.interests.length > 0) {
      axios.post('/adduser', {
        categories: this.state.categories
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else {
      alert("You can't have empty fields");
    }
  }

  handleOnClick() {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', function (response) {
          console.log(response)
        })
      }
    });
  }

  componentDidMount() {
    window.FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          window.FB.api('/me', response => {
            this.setState({
              name: response.name,
              email: response.email,
              phone: response.phone
            });
          })
        }
      });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="email@email.com"/>
        </label>
        <label>
          Password
          <input type="text" value={this.state.password} onChange={this.handlePassword} name="password" placeholder="plz not 1234"/>
        </label>
        <label>
          Phone
          <input type="text" name="phone" value={this.state.phone} onChange={this.handlePhone} placeholder="4387778885"/>
        </label>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleName} placeholder="Tits McGee"/>
        </label>
        <input type="submit" value="Submit" />
      </form>

        <br/>
        Already a user? <Link to={'/login'} className="nav-link">Login</Link>

      </div>
    );
  }
}

export default Categories;