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
      about: {}
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

  handleLogin = () => {
    axios.post('http://localhost:1337/auth/local', {
      identifier: 'test@email.com',
      password: 'Ragnar99!'
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response);
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
            <Route path="/login" component={Login} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
