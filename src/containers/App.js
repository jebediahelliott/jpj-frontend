import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


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

      </div>
    );
  }
}

export default App;
