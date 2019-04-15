import React, { Component } from 'react';
import './Layout.css'
import { Form, Button } from 'react-bootstrap'


class Login extends Component {



  render() {
    return (
      <div className='staticPage'>
        <h1>Log In</h1>
        <Form>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default Login;
