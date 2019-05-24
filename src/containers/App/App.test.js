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
  it('calls fetchPages when it mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'fetchPages');
    instance.componentDidMount();

    expect(spy).toBeCalled();
  })
  describe('fetchPages', () => {
    it('makes a GET request', () => {
      const wrapper = shallow(<App />);
      const instance = wrapper.instance()
      const spy = jest.spyOn(axios, 'get');
      instance.componentDidMount();
      expect(spy).toHaveBeenCalled();
    })
    it('sets the state', async () => {
      const pages = [
        { title: 'Home', content: 'Home content' },
        { title: 'About', content: 'About content'},
        { title: 'Training Programs', content: 'Training Programs content' },
        { title: 'Group Classes', content: 'Group Classes content' },
        { title: 'Graduate Program', content: 'Graduate Program content' },
        { title: 'Tracking', content: 'Tracking content' },
        { title: 'Resident Training', content: 'Resident Training content' },
        { title: 'Consultation', content: 'Consultation content' },
        { title: 'Basic Program', content: 'Basic Program content' },
        { title: 'Puppy School', content: 'Puppy School content' }
      ];
      const resp = {data: pages};
      const wrapper = shallow(<App />);
      const instance = wrapper.instance()
      const getMock = jest.spyOn(axios, 'get');
      getMock.mockResolvedValue(resp)
      await instance.componentDidMount();
      expect(wrapper.state()).toEqual(//{...pages, token: undefined, user: undefined, dogs: undefined})
        {
          home: { title: 'Home', content: 'Home content' },
          about: { title: 'About', content: 'About content' },
          trainingPrograms: { title: 'Training Programs', content: 'Training Programs content' },
          groupClasses: { title: 'Group Classes', content: 'Group Classes content' },
          graduateProgram: { title: 'Graduate Program', content: 'Graduate Program content' },
          tracking: { title: 'Tracking', content: 'Tracking content' },
          residentTraining: { title: 'Resident Training', content: 'Resident Training content' },
          consultation: { title: 'Consultation', content: 'Consultation content' },
          basicProgram: { title: 'Basic Program', content: 'Basic Program content' },
          puppySchool: { title: 'Puppy School', content: 'Puppy School content' },
          token: undefined,
          user: undefined,
          dogs: undefined
        }
      )
    })
  })
})
