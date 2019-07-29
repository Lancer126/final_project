import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbarr from './Navbarr';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    window.sessionStorage.setItem('user_email', "");
    window.sessionStorage.setItem('user_phone', "");
    window.sessionStorage.setItem('user_name', "");
    window.sessionStorage.setItem('contact_name', "");
    window.sessionStorage.setItem('contact_phone', "");
    window.location.replace('/discover');
  }

  render() {

    let email = window.sessionStorage.getItem('user_email');
    let phone = window.sessionStorage.getItem('user_phone');
    let name = window.sessionStorage.getItem('user_name');
    let contact_name = window.sessionStorage.getItem('contact_name');
    let contact_phone = window.sessionStorage.getItem('contact_phone');
    return (
        <div>
        <Navbarr />

<h3>Name: {name}</h3>

<h3>Email: {email}</h3>
<br/>
<h2>Emergency Contact</h2>
<h3>{contact_name}: {contact_phone}</h3>
<Link to={'/contacts'} className="nav-link"><button>Edit</button></Link>
<br/>
<h3>Phone: {phone}</h3>
<h4>Check-in</h4>
<br/>
<button onClick={this.onLogout}>Logout</button>

        </div>
    );
  }
}

export default Login;