import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { kStringMaxLength } from 'buffer';
const axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailIsInDatabase = this.emailIsInDatabase.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  emailIsInDatabase(email) {
    let state = false;
    axios.get(`/getEmail?email=${email}`)
    .then(function (response) {
      alert(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.password && this.state.email) {
      if( this.emailIsInDatabase(this.state.email)) {
        this.props.history.push('/map')
      }
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
    window.FB.XFBML.parse();
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
          <input type="text" name="password" value={this.state.password} onChange={this.handlePassword} placeholder="plz not 1234"/>
        </label>
        <input type="submit" value="Submit" />
      </form>

        <br/>

        <div className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        ></div>
        <br/>
        Not already a user? Register <Link to={'/register'} className="nav-link">here</Link>

      </div>
    );
  }
}

export default Login;