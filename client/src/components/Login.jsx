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
  }

  componentDidMount() {
    document.body.classList.add('loginBg');
  }

  componentWillDismount() {
    document.body.classList.remove('loginBg');
  }

  render() {
    return (
      <div className="login-box">

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

        fetch('/login', {
          method:'POST',
          headers:{ "Content-Type" : "application/json" },
          body: JSON.stringify({ email: values.email,  password: values.password })
        })
          .then(function(response) {
            return response.json();
          })
          .then( user => {
            window.sessionStorage.setItem("user_name", user.name);
            window.sessionStorage.setItem("user_email", user.email);
            window.sessionStorage.setItem("user_phone", user.phone);
            window.sessionStorage.setItem("contact_name", user.contact_name);
            window.sessionStorage.setItem("contact_phone", user.contact_phone);
            window.location.replace('/discover');
          })
          .catch(e => {
            console.log(e)
          })
      }
      , 500);
      
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
          <h1>Login</h1>
          {/* <i className="fa fa-user" aria-hidden="true"></i> */}
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="textbox"
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="textbox"
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button className="btn" type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
        <br/>

        {/* <div className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="continue_with"
          data-auto-logout-link="true"
          data-use-continue-as="true"
        ></div> */}
        Not already a user?<Link to={'/register'} className="nav-link">Register</Link>

      </div>
    );
  }
}

export default Login;