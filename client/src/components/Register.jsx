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

  componentDidMount() {
    document.body.classList.remove('loginBg');
    document.body.classList.add('registerBg');
  }

  // componentDidMount() {
  //   window.FB.getLoginStatus(response => {
  //       if (response.status === 'connected') {
  //         window.FB.api('/me', response => {
  //           this.setState({
  //             name: response.name,
  //             email: response.email,
  //             phone: response.phone
  //           });
  //         })
  //       }
  //     });
  // }

  render() {
    return (
      <div className="login-box">

<Formik
    initialValues={{ email: "", password: "", phone: "", name: "" }}
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
        .max(9999999999, "Phone must be 10 chars long."),
      name: Yup.string()
        .required("Required")
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

        {/* <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="email@email.com"/>
        </label>
        <label>
          Password
          <input type="text" value={this.state.password} onChange={this.handlePassword} name="password" placeholder="plz not 1234"/>
        </label>
        <label>
          Phone
          <input type="text" name="phone" value={this.state.phone} onChange={this.handlePhone} placeholder="4387778885"/>
        </label>
        <label>
          Name
          <input type="text" name="name" value={this.state.name} onChange={this.handleName} placeholder="Tits McGee"/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}

        <br/>
        Already a user? <Link to={'/login'} className="nav-link">Login</Link>

      </div>
    );
  }
}

export default Register;