import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import axios from 'axios';

describe('<App />', () => {
  it('renders a container for the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
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
        {
          title: 'About',
          content: 'About content'
        },
        {
          title: 'Training Programs',
          content: 'Training content'
        }
      ];
      const resp = {data: pages};
      const wrapper = shallow(<App />);
      const instance = wrapper.instance()
      const getMock = jest.spyOn(axios, 'get');
      getMock.mockResolvedValue(resp)
      await instance.componentDidMount();
      expect(wrapper.state()).toEqual(
        {
          home: { title: 'About', content: 'About content' },
          about: { title: 'Training Programs', content: 'Training content' },
          trainingPrograms: undefined,
          groupClasses: undefined,
          graduateProgram: undefined,
          tracking: undefined,
          residentTraining: undefined,
          consultation: undefined,
          basicProgram: undefined,
          puppySchool: undefined,
          token: undefined,
          user: undefined,
          dogs: undefined
        }
      )
    })
  })
})
