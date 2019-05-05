import React, { Component } from 'react'
import '../Layout.css';

class Profile extends Component {


  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
      </div>
    )
  }

}

export default Profile;
