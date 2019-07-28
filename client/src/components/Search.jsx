import React, { Component } from 'react';
import Event from './Event';
const axios = require('axios');

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      free: null,
      distance: 5,
      price: 10,
      start_date: 69,
      end_date: 10,
      events: this.props.events
    }
  }

  handleClick = (event) => {
    if(event.target.checked){
      console.log(event.target.value)
      this.setState({free: event.target.value})

    }
  }

  handleStartDate = (event) => {
    console.log(event.target.value);
    this.setState({start_date: event.target.value});
  }

  handleEndDate = (event) => {
    console.log(event.target.value);
    this.setState({end_date: event.target.value});
  }

  handleInput = (event) => {
    if(event.key === 'Enter'){
      console.log(event.target.value);
      this.setState({price: event.target.value});
    }

  }

  handleSubmit = (event) => {
      //console.log('status is: ', this.state.free)
      const allEvents = this.props.events.filter(item=>item.is_free.toString() === this.state.free);

      console.log(allEvents);
      this.setState({events: allEvents});

      /*axios.post('/event', {
        data: this.state
      })
      .then(function (response) {
        console.log('response sent: ', response);
      })
      .catch(function (error) {
        console.log(error);
      });*/
  }

  handleSearch = (event) => {
      const allEvents = this.props.events.filter(item=>item.name.text.toLowerCase().includes(event.target.value.toLowerCase()) );

      console.log(allEvents);
      this.setState({events: allEvents});
  }

  render() {
    console.log(this.state.events)
    var allEvents = this.state.events.map((event) => {
      return (
        <div className="col-md-4">
      <Event event={event} key={event.id}/>
      </div>

      )
    });
    return (
      <div>
       <h4>Search Eventure</h4>
        <form>
        <input type="radio" name="group1" onClick={this.handleClick} value={true}/><label>Free</label>
        <input type="radio" name="group1"onClick={this.handleClick} value={false}/><label>Paid</label>

  

        </form>
        <input type="text" onChange={this.handleSearch} placeholder="Search events by name..."/>
        <button onClick={this.handleSubmit}>Search</button>
        <div className = "container">
          <div className="row" style={{padding:"10px"}}>
          {allEvents}
        </div>
        </div>

      </div>
    );
  }
}

export default Search;