import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Footer from '../components/Footer';
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: {},
      services: {},
      about: {},
      token: '',
      user: ''
    }
  }
  fetchPages = () => {
    axios.get('http://localhost:1337/infopages')
    .then(res => {
      this.setState({
        home: res.data[0],
        services: res.data[1],
        about: res.data[2]
      })
    })
    .catch(error => {
      console.log('An error occurred:', error);
    })
  }

  componentDidMount() {
    this.fetchPages()
  }

  handleLogin = ({email, password}) => {
    axios.post('http://localhost:1337/auth/local', {
      identifier: `${email}`,
      password: `${password}`
    })
    .then(response => {
      // Handle success.
      this.setState({
        token: response.data.jwt,
        user: response.data.user
      })
      console.log('Well done!');
      console.log('User profile', response);
      axios.get(`http://localhost:1337/dogs/2`, {
        headers: {
          Authorization: `Bearer ${response.data.jwt}`
        }
      })
      .then(response => {
        console.log(response);
      })

    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} page={this.state.home} />} />
            <Route path="/about" render={routerProps => <About {...routerProps} page={this.state.about} />} />
            <Route path="/services" render={routerProps => <Services {...routerProps} page={this.state.services} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={routerProps => <Login {...routerProps} handleLogin={this.handleLogin} />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
