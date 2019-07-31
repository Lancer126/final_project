import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbarr from './Navbarr';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    document.body.classList.remove('loginBg');
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
      <section className="profile-card">
      <img className="pfp" src="https://blogtimenow.com/wp-content/uploads/2014/06/hide-facebook-profile-picture-notification.jpg" width="80px" height="80px"/>
      <h2 className='profile-name'>{name}</h2>
      <h3 className='profile-header'>Basic Info</h3>
      <span className='field'>Email: </span> <span>{email}</span>
      <br></br>
      <span className='field'>Phone Number: </span> <span>{phone}</span>
      <section className='sicko'>
      <h3 className='profile-header-e'>Emergency Contact</h3> <a href='/contacts'>Edit</a>
      </section>
      <span className='field'>Emergency Contact Name: </span> <span>{contact_name}</span>
      <br></br>
      <span className='field'>Emergency Contact Number: </span> <span>{contact_phone}</span>
      <br></br>



      </section>
      </div>
    );
  }
}

export default Login;