import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
        <div>
          <button>Login</button>
          <button>Register</button>
          <br/>
          <a href="/auth/facebook">Login with Facebook</a>

        </div>
    );
  }
}

export default Login;