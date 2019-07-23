import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', function (response) {
          alert('Your name is: ' + response.name);
        })
      }
    });
    event.preventDefault();
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

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} placeholder="email@email.com"/>
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="plz not 1234"/>
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
        Not already a user? Register <a href="/register">here</a>

      </div>
    );
  }
}

export default Login;