import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../Layout.css'


class About extends Component {



  render() {
    let source = 'http://localhost:1337'
    if (this.props.dogs) {
      source += this.props.dogs[0].picture[0].url
    }
    console.log(source);
    return(
      <div className='staticPage'>
        <h1>{this.props.page.title}</h1>
        <img src={source} />
        <ReactMarkdown source={this.props.page.content} />
      </div>
    )
  }

}

export default About;
