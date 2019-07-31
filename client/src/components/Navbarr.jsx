import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


class Navbarr extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
    let login_profile = "";
    let myevents = "";
    let logout = "";
    if (window.sessionStorage.getItem('user_email')) {
      login_profile = <Link to={'/profile'} className="nav-link"> Profile </Link>
      myevents = <Link to={'/myevents'} className="nav-link"> My Events </Link>
      logout = <Link onClick={this.onLogout} className="nav-link">Logout</Link>
    }
    else {
      login_profile = <Link to={'/login'} className="nav-link">Login</Link>
    }

    return (
      <Navbar id="navbarr" light expand="md">
        <NavbarBrand id='titleNav' href="/discover">Eventure</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem id='menutitle'>

              <Link to={'/map'} className="nav-link"> Map </Link>
            </NavItem>
            <NavItem id='menutitle'>
              <Link to={'/discover'} className="nav-link"> Discover </Link>
            </NavItem>
            <NavItem id='menutitle'>
              {myevents}
            </NavItem>
            <NavItem id='menutitle'>
              {login_profile}
            </NavItem>
            <NavItem id='menutitle'>
              {logout}
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>

    );
  }
}
export default Navbarr;