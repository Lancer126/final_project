import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {



  render() {
    let email = window.sessionStorage.getItem('user_email');
    let phone = window.sessionStorage.getItem('user_phone');
    let name = window.sessionStorage.getItem('user_name');
    let contact_name = window.sessionStorage.getItem('contact_name');
    let contact_phone = window.sessionStorage.getItem('contact_phone');
    return (
        <div>

<h3>Name</h3>

<h3>{email}</h3>

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