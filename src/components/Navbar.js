import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/login">Log In</a>
      </div>
    )
  }

}

export default Navbar;
