import React, { Component } from 'react';
const axios = require('axios');

class Reminder extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return(
      <div>
        <input type="time"/>
        <input type="submit" value="Submit"/>
      </div>
    );
  }
}

export default Reminder
