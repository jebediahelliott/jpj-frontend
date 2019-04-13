import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Login from '../components/Login';


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
    fetch('http://localhost:1337/infopages')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        home: res[0],
        services: res[1],
        about: res[2]
      })
    })
  }

  componentDidMount() {
    this.fetchPages()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} content={this.state.home} />} />
            <Route path="/about" render={routerProps => <About {...routerProps} content={this.state.about} />} />
            <Route path="/services" render={routerProps => <Services {...routerProps} content={this.state.services} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
