import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import '../Layout.css'


class Contact extends Component {

  render() {
    return(
      <div className='staticPage'>
        <h1>Contact Us</h1>
        <Form>
          <Form.Group controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="contactPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="555-555-5555" />
          </Form.Group>
          <Form.Group controlId="contactEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="contactDescription">
            <Form.Label>Tell Us About Your Furry Friend</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }

}

export default Contact;
