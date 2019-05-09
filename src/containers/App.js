import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import TrainingPrograms from '../components/TrainingPrograms/TrainingPrograms';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Footer from '../components/Footer/Footer';
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: {},
      about: {},
      trainingPrograms: {},
      token: null,
      user: null,
      dog: null
    }
  }

  fetchPages = () => {
    axios.get('http://localhost:1337/pages')
    .then(res => {
      console.log(res);
      this.setState({
        home: res.data[0],
        about: res.data[1],
        trainingPrograms: res.data[2],
        groupClasses: res.data[3],
        graduateProgram: res.data[4],
        tracking: res.data[5],
        residentTraining: res.data[6],
        consultation: res.data[7],
        basicObedience: res.data[8],
        puppySchool: res.data[9]
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
      axios.get(`http://localhost:1337/dogs?user.username=${response.data.user.username}`, {
        headers: {
          Authorization: `Bearer ${response.data.jwt}`
        }
      })
      .then(response => {
        this.setState({
          dog: response.data[0]
        })
      })
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
  }

  handleLogout = () => {
    this.setState({
      token: null,
      user: null,
      dog: null
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar user={this.state.user} />
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} page={this.state.home} />} />
            <Route path="/about" render={routerProps => <About {...routerProps} page={this.state.about} />} />
            <Route path="/services" render={routerProps => <TrainingPrograms {...routerProps} page={this.state.services} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={routerProps => <Login {...routerProps} handleLogin={this.handleLogin} />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
