import React, { Component } from 'react';
import './Layout.css'

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <span>John P. Jones</span>
        <span>814-769-1883</span>
        <span>eichenhalle@aol.com</span>
        <a id="faceLink" href="https://www.facebook.com/John-P-Jones-Canine-Training-270551002841/">Facebook</a>
      </div>
    )
  }
}

export default Footer
