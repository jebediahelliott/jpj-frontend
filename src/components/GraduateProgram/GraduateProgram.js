import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import '../Layout.css';

class GraduateProgram extends Component {



  render() {
    return(
      <div className='staticPage'>
        <h1>{this.props.page.title}</h1>
        <ReactMarkdown source={this.props.page.content} />
      </div>
    )
  }

}

export default GraduateProgram;
