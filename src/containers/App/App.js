import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import TrainingPrograms from '../../components/TrainingPrograms/TrainingPrograms';
import Contact from '../../components/Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';
import BasicProgram from '../../components/BasicProgram/BasicProgram';
import Consultation from '../../components/Consultation/Consultation';
import GraduateProgram from '../../components/GraduateProgram/GraduateProgram';
import GroupClasses from '../../components/GroupClasses/GroupClasses';
import PuppySchool from '../../components/PuppySchool/PuppySchool';
import ResidentTraining from '../../components/ResidentTraining/ResidentTraining';
import Tracking from '../../components/Tracking/Tracking';
import Profile from '../../components/Profile/Profile';
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      home: {},
      about: {},
      trainingPrograms: {},
      groupClasses: {},
      graduateProgram: {},
      tracking: {},
      residentTraining: {},
      consultation: {},
      basicProgram: {},
      puppySchool: {},
      token: undefined,
      user: undefined,
      dogs: undefined
    }
  }

  fetchPages = () => {
    axios.get('http://localhost:1337/pages')
    .then(res => {
      this.setState({
        home: res.data[0],
        about: res.data[1],
        trainingPrograms: res.data[2],
        groupClasses: res.data[3],
        graduateProgram: res.data[4],
        tracking: res.data[5],
        residentTraining: res.data[6],
        consultation: res.data[7],
        basicProgram: res.data[8],
        puppySchool: res.data[9]
      })
    })
    .catch(error => {
      console.log('An error occurred:', error);
    })
  }

  componentDidMount() {
    this.fetchPages()
    axios.get('http://localhost:1337/dogs')
    .then(res => {
      this.setState({
        dogs: res.data
      })
    })
  }

  handleLogin = (response, dogResponse) => {
      this.setState({
        token: response.data.jwt,
        user: response.data.user,
        dog: dogResponse.data
      })
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
          <Navbar user={this.state.user} handleLogout={this.handleLogout} />
          <div className="main">
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps} page={this.state.home} />} />
            <Route path="/about" render={routerProps => <About {...routerProps} dogs={this.state.dogs} page={this.state.about} />} />
            <Route path="/training-programs" render={routerProps => <TrainingPrograms {...routerProps} page={this.state.trainingPrograms} />} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" render={routerProps => <Login {...routerProps} handleLogin={this.handleLogin} />} />
            <Route path="/consultation" render={routerProps => <Consultation {...routerProps} page={this.state.consultation} />} />
            <Route path="/puppy-school" render={routerProps => <PuppySchool {...routerProps} page={this.state.puppySchool} />} />
            <Route path="/basic-program" render={routerProps => <BasicProgram {...routerProps} page={this.state.basicProgram} />} />
            <Route path="/group-classes" render={routerProps => <GroupClasses {...routerProps} page={this.state.groupClasses} />} />
            <Route path="/graduate-program" render={routerProps => <GraduateProgram {...routerProps} page={this.state.graduateProgram} />} />
            <Route path="/resident-training" render={routerProps => <ResidentTraining {...routerProps} page={this.state.residentTraining} />} />
            <Route path="/tracking" render={routerProps => <Tracking {...routerProps} page={this.state.tracking} />} />
            <Route path="/profile" render={routerProps => this.state.user ? <Profile {...routerProps} dogs={this.state.dogs} user={this.state.user} /> : <Redirect to="/login" />} />
          </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default (App);
