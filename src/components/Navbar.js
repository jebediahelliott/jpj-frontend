import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="banner">

        </div>
        <div id="navBar">
          <NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
          <NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink>
          <NavLink to="/services" className="link" activeStyle={{color: '#F1CD4E'}} exact>Services</NavLink>
          <NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink>
          <NavLink to="/login" className="link" activeStyle={{color: '#F1CD4E'}} exact>Log In</NavLink>
        </div>
      </div>
    )
  }

}

export default Navbar;
