import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('Has a title', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h1').text()).toEqual(expect.stringMatching(/Log In/));
  })
  it('Has a form with email and password', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('Form').text()).toEqual(expect.stringMatching('Email Address'))
    expect(wrapper.find('Form').text()).toEqual(expect.stringMatching('Password'))
  })
})
