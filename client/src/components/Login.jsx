import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { kStringMaxLength } from 'buffer';
import { Formik } from "formik";
import * as Yup from "yup";
const axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  componentDidMount() {
    window.FB.XFBML.parse();
  }

  render() {
    return (
      <div>

  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {

      this.setState({
        email: values.email,
        password: values.password
      })
      
      window.event.preventDefault();
      setTimeout(() => {
        const self = this;

      axios.post('/login', {
        user: this.state
      })
      .then(function (response) {
        window.sessionStorage.setItem('user_email', self.state.email);
        console.log(response);
        self.props.history.push('/discover')
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log("Logged In", values);
        setSubmitting(false);
      }, 500);
    }}
    
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>

        {/* <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="email@email.com"/>
        </label>
        <label>
          Password
          <input type="text" name="password" value={this.state.password} onChange={this.handlePassword} placeholder="plz not 1234"/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}

        <br/>

        <div className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        ></div>
        <br/>
        Not already a user? Register <Link to={'/register'} className="nav-link">here</Link>

      </div>
    );
  }
}

export default Login;