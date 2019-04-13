import React, { Component } from 'react';

class Home extends Component {

  render() {
    return(
      <div>
        <h1>{this.props.content.Title}</h1>
        <p>{this.props.content.Content}</p>
      </div>
    )
  }

}

export default Home;
