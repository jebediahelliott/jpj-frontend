import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'


class App extends Component {
  testInfo = () => {
    fetch('http://localhost:1337/infopages')
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
