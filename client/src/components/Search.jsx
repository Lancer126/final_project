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
      return <Event event={event} key={event.id}/>
    });
    return (
      <div>
        <h3>Price</h3>
        <form>
        <input type="radio" onClick={this.handleClick} value={true}/><label>Free</label>
        <input type="radio" onClick={this.handleClick} value={false}/><label>Paid</label>
        </form>


        <h3>Date</h3>

        <label>Before Date</label><input type="date" onChange={this.handleStartDate}/>

        <label>End Date</label><input type="date" onChange={this.handleEndDate}/>

        <h3>Interests</h3>
        <input type="checkbox"/><label>Interest Example</label>

        <label>Event Name</label><input type="text"/>

        <h3>Distance</h3>
        <input type="text" onKeyUp={this.handleInput}/>

        <button onClick={this.handleSubmit}>Submit</button>

        <h3>Search</h3>
        <input type="text" onChange={this.handleSearch} placeholder="Search events by name..."/>

        <div>
          {allEvents}
        </div>

      </div>
    );
  }
}

export default Search;