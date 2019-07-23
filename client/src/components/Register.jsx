import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', function (response) {
          alert('Your name is: ' + response.name);
        })
      }
    });
    event.preventDefault();
  }

  handleOnClick() {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        window.FB.api('/me', function (response) {
          console.log(response)
        })
      }
    });
  }

  componentDidMount() {
    window.FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          window.FB.api('/me', function (response) {
            this.setState({name: response.name});
          })
        }
      });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} placeholder="email@email.com"/>
        </label>
        <label>
          Password
          <input type="text" name="password" placeholder="plz not 1234"/>
        </label>
        <label>
          Phone
          <input type="text" name="phone" placeholder="4387778885"/>
        </label>
        <label>
          Name
          <input type="text" name="name" placeholder="Tits McGee" defaultValue={this.state.name}/>
        </label>
        <input type="submit" value="Submit" />
      </form>

        <br/>
        Already a user? <a href="/login">Login</a>

      </div>
    );
  }
}

export default Register;