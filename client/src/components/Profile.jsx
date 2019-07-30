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
      <div className="container profile-box">
<h1 className="text-center">Profile</h1>
<br/>
  <div className="row justify-content-center">
    <div className="col-md text-left">
    <h1>Info</h1>
<br/>
<img style={{maxHeight:"180px", maxWidth: "auto"}} src='https://vignette.wikia.nocookie.net/to-hollywood-and-beyond/images/e/ec/McLovin_superbad.jpg/revision/latest?cb=20160320024827' />
<span>Name: {name}</span>
<span>E-mail: {email}</span>
<span>Phone number: {phone}</span>
    </div>
    <div className="col-md text-left">
    <h1>Emergency Contact</h1>
    <br/>
    <h3>{contact_name}</h3>
    <h3>{contact_phone}</h3>
    <Link to={'/contacts'} className="nav-link"><button className='btn edit'>Edit</button></Link>
    </div>
  </div>
<br/>


</div>
</div>

    );
  }
}

export default Login;