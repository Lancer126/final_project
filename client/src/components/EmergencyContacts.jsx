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
        name: '',
        phone: ''
    }
  }

  render() {
    let navbar = "";
    if(window.sessionStorage.getItem('contact_name')) {
      navbar = <Navbarr />
    }

    return (
      <div>
      {navbar}

<Formik
    initialValues={{ name: "", phone: "" }}
    onSubmit={(values, { setSubmitting }) => {

      this.setState({
        name: values.name,
        phone: values.phone
      })
      
    window.event.preventDefault();
    var self = this;
    
      axios.post('/addcontact', {
        name: this.state.name,
        phone: this.state.phone,
        email: window.sessionStorage.getItem('user_email')
      })
      .then(function (response) {
        window.sessionStorage.setItem('contact_phone', self.state.phone);
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
          <label htmlFor="email">Emergency Contact</label>
          <br/>
          <label htmlFor="email">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter contact name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label htmlFor="email">Number</label>
          <input
            name="phone"
            type="text"
            placeholder="Enter contact number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone && "error"}
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      );
    }}
  </Formik>

        {/* <form onSubmit={this.handleSubmit}>
          Emergency Contact
        <br/>
        <label>
          Name
          <input type="text" name="phone1" value={this.state.name1} onChange={this.handleName1} placeholder="Enter Name"/>
        </label>
        <label>
          Phone
          <input type="text" value={this.state.phone1} onChange={this.handlePhone1} name="phone1" placeholder="1234567890"/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}

      </div>
    );
  }
}

export default EmergencyContacts;