import React, { Component } from 'react';
import '../Layout.css'
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <span>&copy; John P. Jones Canine Training</span>
          <span>814-769-1883</span>
          <span><a href="mailto:eichenhalle@aol.com">eichenhalle@aol.com</a></span>
          <a id="faceLink" href="https://www.facebook.com/John-P-Jones-Canine-Training-270551002841/"><i className="fab fa-facebook-square fa-2x"></i></a>
        </div>
      </div>
    )
  }
}

export default Footer
