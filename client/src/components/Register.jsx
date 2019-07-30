import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import Navbarr from './Navbarr';
const axios = require('axios');

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        name: '',
        password: '',
        phone: ''
    };
  }

  render() {
    return (
      <div className="login-box">

<Formik
    initialValues={{ email: "", password: "", phone: "" }}
    onSubmit={(values, { setSubmitting }) => {

      this.setState({
        email: values.email,
        phone: values.phone,
        password: values.password
      })
      window.event.preventDefault();
      setTimeout(() => {
        const self = this;

      axios.post('/register', {
        user: this.state
      })
      .then(function (response) {
        console.log("Allo")
        window.sessionStorage.setItem('user_email', self.state.email);
        window.sessionStorage.setItem('user_phone', self.state.phone);
        self.props.history.push('/contacts')
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log("Registered", values);
        setSubmitting(false);
      }, 500);
    }}
    
    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
      phone: Yup.number()
        .required("Required")
        .min(1000000000, "Phone must be 10 chars long.")
        .max(9999999999, "Phone must be 10 chars long.")
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
          <h1>Register</h1>
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
          {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your phone number"
            className="textbox"
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
          {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
        {/* <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your name"
          className="textbox"
        />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )} */}
          <button className="btn" type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      );
    }}
  </Formik>

        <br/>
        <Link to={'/login'} className="nav-link text-center" style={{color: "black"}}>Already a user?  Login HERE</Link>

      </div>
    );
  }
}

export default Register;