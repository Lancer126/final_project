import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import Navbarr from './Navbarr';
const axios = require('axios');

class EmergencyContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_name: '',
        name: '',
        phone: ''
    }
  }

  componentDidMount() {
    document.body.classList.add('loginBg');
  }

  render() {
    let navbar = "";
    if(window.sessionStorage.getItem('contact_name')) {
      navbar = <Navbarr />
    }

    return (
      <div>
      <div className="login-box">

<Formik
    initialValues={{ user_name: window.sessionStorage.getItem('user_name') ? window.sessionStorage.getItem('user_name') : "", name: "", phone: "" }}
    onSubmit={(values, { setSubmitting }) => {

      this.setState({
        user_name: values.user_name,
        name: values.name,
        phone: values.phone
      })
      
    window.event.preventDefault();
    var self = this;
    
      axios.post('/addcontact', {
        user_name: this.state.user_name,
        name: this.state.name,
        phone: this.state.phone,
        email: window.sessionStorage.getItem('user_email')
      })
      .then(function (response) {
        window.sessionStorage.setItem('contact_phone', self.state.phone);
        window.sessionStorage.setItem('user_name', self.state.user_name);
        if(window.sessionStorage.getItem('contact_name')){
          window.sessionStorage.setItem('contact_name', self.state.name);
          self.props.history.push(`/profile`);
        }
        else {
          window.sessionStorage.setItem('contact_name', self.state.name);
          window.location.replace('/discover');
        }
      })
      .catch(function (error) {
        console.log(error);
      });

      
    }}
    
    validationSchema={Yup.object().shape({
      user_name: Yup.string()
        .required("Required"),
      name: Yup.string()
        .required("Required"),
      phone: Yup.number()
        .required("Required.")
        .min(1000000000, "Phone must be 10 chars long.")
        .max(9999999999, "Phone must be 10 chars long."),
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
          <h1>Profile</h1>
          <input
          type="text"
          name="user_name"
          value={values.user_name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your name"
          className="textbox"
        />
          {errors.user_name && touched.user_name && (
            <div className="input-feedback">{errors.user_name}</div>
          )}
          <br/>
          <br/>
          <input
            name="name"
            type="text"
            placeholder="Emergency contact name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="textbox"
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <input
            name="phone"
            type="text"
            placeholder="Emergency contact number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="textbox"
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
          <button className="btn" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      );
    }}
  </Formik>
      <br/>
      <h6>This is a placeholder paragraph.</h6>
      Yeah.
      </div>
      </div>
    );
  }
}

export default EmergencyContacts;