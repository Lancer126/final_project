import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div>
        <h3>Price</h3>
<input type="checkbox"/><label>$</label>
<input type="checkbox"/><label>$$</label>
<input type="checkbox"/><label>$$$</label>

<h3>Date</h3>

<label>Before Date</label><input type="date"/>

<label>End Date</label><input type="date"/>

<h3>Interests</h3>
<input type="checkbox"/><label>Interest Example</label>

<label>Event Name</label><input type="text"/>

<button>Search</button>
        </div>
    );
  }
}

export default Search;