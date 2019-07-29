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
      <div>

<Formik
    initialValues={{ email: "", password: "", phone: "", name: "" }}
    onSubmit={(values, { setSubmitting }) => {

      this.setState({
        email: values.email,
        phone: values.phone,
        name: values.name,
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
        window.sessionStorage.setItem('user_name', self.state.name);
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
          <label htmlFor="email"> Phone </label>
          <input
            type="text"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="00000000000"
            className={errors.phone && touched.phone && "error"}
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
        <label htmlFor="email"> Name </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="John Wick"
        />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
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