import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { kStringMaxLength } from 'buffer';
import { Formik } from "formik";
import * as Yup from "yup";
import Navbarr from './Navbarr';
const axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
      <Navbarr />
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
            window.location.replace('/new');
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
        <Link to={'/register'} className="nav-link text-center" style={{ color: "black" }}>Not a user? Register HERE</Link>
      </div>
      </div>
    );
  }
}

export default Login;