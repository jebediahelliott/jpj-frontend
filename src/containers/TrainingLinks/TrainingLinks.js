import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TrainingLinks extends Component {


  render() {
    return (
      <div id="training-links">
        <NavLink to="/consultation" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/puppy-school" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/basic-obedience" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/group-classes" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/graduate-program" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/resident-training" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
        <NavLink to="/tracking" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink>
      </div>
    )
  }
}

export default TrainingLinks;
