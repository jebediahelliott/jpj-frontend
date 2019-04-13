import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

class Home extends Component {

  // parseMarkdown = () => {
  //   var md = require('markdown-it')();
  //   return result
  // }

  render() {
    return(
      <div>
        <h1>{this.props.content.Title}</h1>
        <ReactMarkdown source={this.props.content.Content} />
      </div>
    )
  }

}

export default Home;


// {this.props.content.Content}
