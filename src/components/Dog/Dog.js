import React, { Component } from 'react'
import '../Layout.css';

class Dog extends Component {


  render() {
    let source = 'http://localhost:1337'
    if (this.props.dogs) {
      source += this.props.dogs[0].picture[0].url
      return (
        <div>
          <h1>{this.props.dogs[0].name}</h1>
          <img src={source} alt={`picture of ${this.props.dogs[0].name}`} />
          <p>{this.props.dogs[0].notes}</p>
        </div>
      )
    }else {
      return null
    }
  }

}

export default Dog;
