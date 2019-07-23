import React, { Component } from 'react';

class Login extends Component {
  handleOnClick() {
    window.FB.getLoginStatus(function (response) {
      console.log(response)
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
        <button onClick={this.handleOnClick}>Login</button>
        <button>Register</button>
        <br />

        <div className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        ></div>

      </div>
    );
  }
}

export default Login;