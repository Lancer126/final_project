import React, { Component } from 'react';
import Navbarr from './Navbarr';

class Tickets extends Component {
  render() {
    return (
        <div>
        <Navbarr />
        
<h2>Event Name</h2>
<h3>Description</h3>
<button>Purchase</button>
<button>Watchlist</button>

<h2>Location (map)</h2>
<h2>Event Picture</h2>

        </div>
    );
  }
}

export default Tickets;