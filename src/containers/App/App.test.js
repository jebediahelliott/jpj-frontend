import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import axios from 'axios';

describe('<App />', () => {
  it('renders a container for the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
  })
  it('renders <Navbar />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Navbar'));
  })
  it('renders <Footer />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains('Footer'));
  })
  it('has a route for each page', () => {
    const wrapper = shallow(<App />);
    let routes = [
      "/",
      "/about",
      "/training-programs",
      "/contact",
      "/login",
      "/consultation",
      "/puppy-school",
      "/basic-program",
      "/group-classes",
      "/graduate-program",
      "/resident-training",
      "/tracking",
      "/profile"
    ]
    wrapper.find('Route').forEach(route => {
      expect(routes).toContain(route.props().path)
      routes = routes.filter(r => r !== route.props().path)
    })
  })
})
