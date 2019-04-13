import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import './Layout.css'

class Home extends Component {

  // parseMarkdown = () => {
  //   var md = require('markdown-it')();
  //   return result
  // }

  render() {
    return(
      <div className='staticPage'>
        <h1>{this.props.page.Title}</h1>
        <ReactMarkdown source={this.props.page.Content} />
      </div>
    )
  }

}

export default Home;


// {this.props.content.Content}
