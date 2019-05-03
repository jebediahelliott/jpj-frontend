import React, { Component } from 'react';
import './Layout.css'
import { Form, Button } from 'react-bootstrap'


class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleLogin(this.state)
    this.props.history.push('/profile')
  }


  render() {
    return (
      <div className='staticPage'>
        <h1>Log In</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={this.state.email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} />
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
