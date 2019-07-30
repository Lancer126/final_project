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
<h3>{name}</h3>
<h3>{email}</h3>
<h3>{phone}</h3>
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
<button className="btn" onClick={this.onLogout}>Logout</button>
</div>
</div>


//         <div>
//         <Navbarr />
//         <div className="profile-box">
// <h1>Profile</h1>
// <br/>
// <h3>{name}</h3>
// <h3>{email}</h3>
// <h3>{phone}</h3>
// <br/>
// <h2>Emergency Contact</h2>
// <h3>{contact_name}</h3>
// <h3>{contact_phone}</h3>
// <Link to={'/contacts'} className="nav-link"><button>Edit</button></Link>
// <br/>
// <br/>
// <button onClick={this.onLogout}>Logout</button>
//         </div>
//         </div>
    );
  }
}

export default Login;