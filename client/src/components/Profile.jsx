import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
        <div>
            
        <h3>Picture</h3>

<h3>Name</h3>

<h3>Email</h3>

<h3>Emergency Contacts</h3>

<h4>Check-in</h4>





<h3>Phone Number</h3>

<Link to={'/login'} className="nav-link">Login</Link>
<br/>
<Link to={'/register'} className="nav-link">Register</Link>

        </div>
    );
  }
}

export default Login;