import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Map from './components/Map';
import Discover from './components/Discover';
import Search from './components/Search';
import Tickets from './components/Tickets';
import Aid from './components/Aid';
import Profile from './components/Profile';
import Register from './components/Register';
import EventDetails from './components/EventDetails';
import EmergencyContacts from './components/EmergencyContacts';
import Test from './components/carousel';
import './App.css';
import MyEvents from './components/MyEvents'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      email: ''
    }
  }

  componentDidMount() {
    fetch('/event').then(data => data.json()).then(response => this.setState({ events: response }));
    if(window.sessionStorage.getItem('user_email')) {
      this.setState({email: window.sessionStorage.getItem('user_email')})
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>

            <Route path='/login' component={Login} />
            <Route path='/map' render={() => <Map events={this.state.events} />} />
            <Route path='/discover' render={() => <Discover events={this.state.events} />} />
            <Route path='/search' render={() => <Search events={this.state.events} />} />
            <Route path='/tickets' component={Tickets} />
            <Route path='/aid' component={Aid} />
            <Route path='/profile' component={Profile} />
            <Route path='/register' component={Register} />
            <Route path='/event/:id' render={() => <EventDetails events={this.state.events} />} />
            <Route path='/profile' component={Profile} />
            <Route path='/test' render={() => < Test events={this.state.events} />} />
            <Route path='/myevents' component={MyEvents} />
            <Route path='/contacts' component={EmergencyContacts} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;