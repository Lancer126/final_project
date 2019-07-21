import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Map from './components/Map';
import Discover from './components/Discover';
import Search from './components/Search';
import Tickets from './components/Tickets';
import Aid from './components/Aid';
import Profile from './components/Profile';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    events: [
      //{name: 'catalina wine mixer'},
      //{name: 'osheaga'}
    ]
  }
}

 componentDidMount() {
   fetch('/event').then(data => data.json()).then(response => this.setState({events: response}));

   console.log(this.state);
 }

  render() {
    return (
    <Router>
        <div>
        <h1>Eventure</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
          <button><Link to={'/'} className="nav-link"> Login </Link></button>
          <button><Link to={'/map'} className="nav-link"> Map </Link></button>
          <button><Link to={'/discover'} className="nav-link"> Discover </Link></button>
          <button><Link to={'/search'} className="nav-link"> Search </Link></button>
          <button><Link to={'/tickets'} className="nav-link"> Tickets </Link></button>
          <button><Link to={'/aid'} className="nav-link"> Aid </Link></button>
          <button><Link to={'/profile'} className="nav-link"> Profile </Link></button>
        
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/map' component={Map} />
              <Route path='/discover' render={() => <Discover events={this.state.events} /> } />
              <Route path='/search'  component={Search}/>
              <Route path='/tickets' component={Tickets}/>
              <Route path='/aid' component={Aid}/>
              <Route path='/profile' component={Profile}/>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;