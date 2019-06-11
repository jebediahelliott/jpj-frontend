import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';
import bannerLogo from '../images/JPJtext2.jpeg'

class Navbar extends Component {

  render() {
    return (
      <div>
        <div className="banner">
          <img src={bannerLogo} id="banner-logo" className="banner-image" alt="Logo" />
        </div>
        <nav id="navBar">
          <ul className="menu">
            <li><NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink></li>
            <li><NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink></li>
            <li id="droplink"><NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
              <ul className="dropdown">
                <li><NavLink to="/consultation" className="link" activeStyle={{color: 'black'}} exact>Consultation</NavLink></li>
                <li><NavLink to="/puppy-school" className="link" activeStyle={{color: 'black'}} exact>Puppy School</NavLink></li>
                <li><NavLink to="/basic-program" className="link" activeStyle={{color: 'black'}} exact>Basic Program</NavLink></li>
                <li><NavLink to="/group-classes" className="link" activeStyle={{color: 'black'}} exact>Group Classes</NavLink></li>
                <li><NavLink to="/graduate-program" className="link" activeStyle={{color: 'black'}} exact>Graduate Program</NavLink></li>
                <li><NavLink to="/resident-training" className="link" activeStyle={{color: 'black'}} exact>Resident Training</NavLink></li>
                <li><NavLink to="/tracking" className="link" activeStyle={{color: 'black'}} exact>Tracking</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default withRouter(Navbar);
// <img src={img2} className="banner-image" />

// Login link
// <li><NavLink to="/login" className="link" activeStyle={{color: '#F1CD4E'}} exact>Log In</NavLink></li>

// Banner background divs
// <div id="banner-image1"></div>
// <div id="banner-image2"></div>
// <div id="banner-logo"></div>
// <div id="banner-image3"></div>
// <div id="banner-image4"></div>
// <div id="banner-image5"></div>

// imgage tags to use in place of divs with backgroung images
// <img src={img1} className="banner-image" />
// <img src={img3} className="banner-image" />
// <img src={bannerLogo} id="banner-logo" className="banner-image" />
// <img src={img4} className="banner-image" />
// <img src={img5} className="banner-image" />
// <img src={img6} className="banner-image" />

// Navbar for logged in users
// if (this.props.user) {
//   return (
//     <div>
//       <div className="banner">
//       <div id="banner-image1"></div>
//       <div id="banner-image2"></div>
//       <div id="banner-logo"></div>
//       <div id="banner-image3"></div>
//       <div id="banner-image4"></div>
//       <div id="banner-image5"></div>
//       </div>
//       <nav id="navBar">
//         <ul className="menu">
//           <li><NavLink to="/" className="link" activeStyle={{color: '#F1CD4E'}} exact>Home</NavLink></li>
//           <li><NavLink to="/about" className="link" activeStyle={{color: '#F1CD4E'}} exact>About</NavLink></li>
//           <li id="droplink"><NavLink to="/training-programs" className="link" activeStyle={{color: '#F1CD4E'}} exact>Training Programs</NavLink>
//             <ul className="dropdown">
//               <li><NavLink to="/consultation" className="link" activeStyle={{color: 'black'}} exact>Consultation</NavLink></li>
//               <li><NavLink to="/puppy-school" className="link" activeStyle={{color: 'black'}} exact>Puppy School</NavLink></li>
//               <li><NavLink to="/basic-program" className="link" activeStyle={{color: 'black'}} exact>Basic Program</NavLink></li>
//               <li><NavLink to="/group-classes" className="link" activeStyle={{color: 'black'}} exact>Group Classes</NavLink></li>
//               <li><NavLink to="/graduate-program" className="link" activeStyle={{color: 'black'}} exact>Graduate Program</NavLink></li>
//               <li><NavLink to="/resident-training" className="link" activeStyle={{color: 'black'}} exact>Resident Training</NavLink></li>
//               <li><NavLink to="/tracking" className="link" activeStyle={{color: 'black'}} exact>Tracking</NavLink></li>
//             </ul>
//           </li>
//           <li><NavLink to="/contact" className="link" activeStyle={{color: '#F1CD4E'}} exact>Contact</NavLink></li>
//           <li><NavLink to="/profile" className="link" activeStyle={{color: '#F1CD4E'}} exact>Profile</NavLink></li>
//           <li><NavLink to="/login" className="link" onClick={this.props.handleLogout} activeStyle={{color: '#F1CD4E'}} exact>Log Out</NavLink></li>
//         </ul>
//       </nav>
//     </div>
//   )
// }
