import React, { Component } from 'react'
import '../Layout.css';
import Dog from '../Dog/Dog';

class Profile extends Component {


  render() {
    console.log(this.props);
    return (
      <div className="staticPage">
        <h1>Welcome {this.props.user.username}</h1>
        <Dog dog={this.props.dog} />
      </div>
    )
  }

}

export default Profile;
