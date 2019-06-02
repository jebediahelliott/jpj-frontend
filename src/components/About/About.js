import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../Layout.css'


class About extends Component {



  render() {
    return(
      <div className='staticPage'>
        <h1>About</h1>
        <p>
          I developed a deep love and respect for dogs at an early age. My family had German Shepherds throughout my childhood that were my favorite companions. At 13, I got a Siberian Husky named Max. Max lived for 19 years and was a great teacher in my life. After Max passed on, I rescued a German Shepherd named, curiously enough, Max. Max had many challenging issues, but with patience, love, a healthy lifestyle, and training, he too became a wonderful dog. I will forever be indebted to both Max’s. They were the driving inspiration behind my desire to help people do the best they can for their dogs. I pursued my life’s dream in 1999 to learn more about training dogs and did an apprenticeship with Randy Kromer of Kromerhaus Kennels. It was here that I learned to train dogs at all levels. I have now been a professional dog trainer for 18 years. I continue to train owners and their dogs in Obedience and Behavior Modification, AKC Obedience, Tracking, Search and Rescue, Personal Protection, and Police K-9. I believe that it is a trainer’s job to save dogs’ lives. Lack of training is the number one killer of dogs. My job as a trainer is to educate owners to effectively communicate with their dogs so they can enjoy their companions as friends and family members.
        </p>
        <h3>Training Certifications</h3>
        <ul>
          <li>
            Certified Police K-9 and Schutzhund Trainer: Kromerhaus Kennels, 2000
          </li>
          <li>
            Certified in Basic Obedience, Kennel Management and Canine First Aid: Kromerhaus Kennels, 2000
          </li>
          <li>
            Certified Police K-9 Trial and Training Decoy: UPCKA, 2000
          </li>
        </ul>
      </div>
    )
  }

}

export default About;
