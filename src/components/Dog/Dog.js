import React, { Component } from 'react'
import '../Layout.css';

class Profile extends Component {


  render() {
    return (
      <div>
        <h1>{this.props.dog.name}</h1>
        <p>{this.props.dog.notes}</p>
      </div>
    )
  }

}

export default Profile;
