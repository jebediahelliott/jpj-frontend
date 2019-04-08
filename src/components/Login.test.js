import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('Has a title', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('h1').text()).toMatch(/Log In/);
  })
})
