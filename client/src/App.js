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
import Categories from './components/Categories';
import EmergencyContacts from './components/EmergencyContacts';
import Test from './components/test';
import './App.css';
import Navbarr from './components/Navbarr';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('/event').then(data => data.json()).then(response => this.setState({ events: response }));

    console.log(this.state);
  }



  render() {
    return (
      <Router>
        <div>
          <Navbarr events={this.state} />
          <Switch>

            <Route exact path='/login' component={Login} />
            <Route path='/map' render={() => <Map events={this.state.events} />} />
            <Route path='/discover' render={() => <Discover events={this.state.events} />} />
            <Route path='/search' component={Search} />
            <Route path='/tickets' component={Tickets} />
            <Route path='/aid' component={Aid} />
            <Route path='/profile' component={Profile} />
            <Route path='/register' component={Register} />
            <Route path='/event/:id' render={() => <EventDetails events={this.state.events} />} />
            <Route path='/profile' component={Profile} />
            <Route path='/test' render={() => < Test events={this.state.events} />} />
            

            <Route path='/categories' component={Categories} />
            <Route path='/contacts' component={EmergencyContacts} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;