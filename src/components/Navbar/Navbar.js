import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    if (this.props.user) {
      return (
        <div>
          <div className="banner"></div>
          <nav id="navBar">
            <ul className="menu">
              <li><NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink></li>
              <li><NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink></li>
              <li id="droplink"><NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="/consultation" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Consultation</NavLink></li>
                  <li><NavLink to="/puppy-school" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Puppy School</NavLink></li>
                  <li><NavLink to="/basic-program" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Basic Program</NavLink></li>
                  <li><NavLink to="/group-classes" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Group Classes</NavLink></li>
                  <li><NavLink to="/graduate-program" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Graduate Program</NavLink></li>
                  <li><NavLink to="/resident-training" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Resident Training</NavLink></li>
                  <li><NavLink to="/tracking" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Tracking</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink></li>
              <li><NavLink to="/profile" className="link" activeStyle={{color: '#F1CD4E'}} exact>Profile</NavLink></li>
              <li><NavLink to="/login" className="link" onClick={this.props.handleLogout} activeStyle={{color: '#F1CD4E'}} exact>Log Out</NavLink></li>
            </ul>
          </nav>
        </div>
      )
    }
    return (
      <div>
        <div className="banner"></div>
        <nav id="navBar">
          <ul className="menu">
            <li><NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink></li>
            <li><NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink></li>
            <li id="droplink"><NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
              <ul className="dropdown">
                <li><NavLink to="/consultation" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Consultation</NavLink></li>
                <li><NavLink to="/puppy-school" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Puppy School</NavLink></li>
                <li><NavLink to="/basic-program" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Basic Program</NavLink></li>
                <li><NavLink to="/group-classes" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Group Classes</NavLink></li>
                <li><NavLink to="/graduate-program" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Graduate Program</NavLink></li>
                <li><NavLink to="/resident-training" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Resident Training</NavLink></li>
                <li><NavLink to="/tracking" className="link" activeStyle={{color: 'rgb(132,14,5)'}} exact>Tracking</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink></li>
            <li><NavLink to="/login" className="link" activeStyle={{color: '#F1CD4E'}} exact>Log In</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default withRouter(Navbar);
