import React, { Component } from 'react';
import '../Layout.css';

class GroupClasses extends Component {



  render() {
    return(
      <div className='staticPage'>
      <h1>Group Classes</h1>
      <h3>Beginner Group Class</h3>
      <p>
        The beginer's group class is an important part of our training program. In this class you get to practice and improve all of the skills you and your dog have learned, but in a more challenging environment. Everyone and their dog in this class is at approximately the same level of training.
      </p>
      <h3>Advanced Group Class</h3>
      <p>
        Advanced group class is for the dog/handler teams that are ready for a mor demanding challenge to promote better skills in both the handler and dog. The class offers more difficult excercises in the a closer proximity tot he other dog/handler teams requiring tmore teamwork from you and your dog.
      </p>
      <h4>Pricing</h4>
      <p>
        Five classes: $85
        Ten classes: $130
      </p>
      </div>
    )
  }

}

export default GroupClasses;
