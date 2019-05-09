import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class TrainingLinks extends Component {


  render() {
    return (
      <div id="training-links">
        <NavLink to="/consultation" className="link" activeStyle={{color: '#F1CD4E'}} exact>Consultation</NavLink>
        <NavLink to="/puppy-school" className="link" activeStyle={{color: '#F1CD4E'}} exact>Puppy School</NavLink>
        <NavLink to="/basic-program" className="link" activeStyle={{color: '#F1CD4E'}} exact>Basic Program</NavLink>
        <NavLink to="/group-classes" className="link" activeStyle={{color: '#F1CD4E'}} exact>Group Classes</NavLink>
        <NavLink to="/graduate-program" className="link" activeStyle={{color: '#F1CD4E'}} exact>Graduate Program</NavLink>
        <NavLink to="/resident-training" className="link" activeStyle={{color: '#F1CD4E'}} exact>Resident Training</NavLink>
        <NavLink to="/tracking" className="link" activeStyle={{color: '#F1CD4E'}} exact>Tracking</NavLink>
      </div>
    )
  }
}

export default TrainingLinks;
