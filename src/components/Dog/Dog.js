import React, { Component } from 'react'
import '../Layout.css';

class Dog extends Component {


  render() {
    let source = 'http://localhost:1337'
    if (this.props.dogs) {
      source += this.props.dogs[0].picture[0].url
      return (
        <div>
          <h2>{this.props.dogs[0].name}</h2>
          <img src={source} alt={this.props.dogs[0].name} />
          <h3>Traning Notes</h3>
          <p>{this.props.dogs[0].notes}</p>
        </div>
      )
    }else {
      return null
    }
  }

}

export default Dog;
