import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    console.log(this.props)
    if (this.props.user) {
      return (
        <div>
          <div className="banner"></div>
          <div id="navBar">
            <NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
            <NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink>
            <NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
            <NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink>
            <NavLink to="/" className="link" onClick={this.props.handleLogout} activeStyle={{color: '#F1CD4E'}} exact>Log Out</NavLink>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div className="banner"></div>
        <div id="navBar">
          <NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
          <NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink>
          <NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
          <NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink>
          <NavLink to="/login" className="link" activeStyle={{color: '#F1CD4E'}} exact>Log In</NavLink>
        </div>
      </div>
    )
  }

}

export default withRouter(Navbar);
