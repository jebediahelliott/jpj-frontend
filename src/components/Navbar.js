import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div id="navBar">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/services" className="link">Services</Link>
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/login" className="link">Log In</Link>
      </div>
    )
  }

}

export default Navbar;
