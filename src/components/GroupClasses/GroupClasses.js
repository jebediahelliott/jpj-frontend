import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import '../Layout.css';

class GroupClasses extends Component {



  render() {
    return(
      <div className='staticPage'>
        <h1>{this.props.page.Title}</h1>
        <ReactMarkdown source={this.props.page.Content} />
      </div>
    )
  }

}

export default GroupClasses;
