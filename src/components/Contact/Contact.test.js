import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  it('Renders a title', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('h1').text()).toMatch(/Contact Us/);
  })
  it('Renders a form to take user info', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('Form').text()).toEqual(expect.stringMatching('Email'))
    expect(wrapper.find('Form').text()).toEqual(expect.stringMatching('Tell Us About Your Furry Friend'))
    expect(wrapper.find('Form').text()).toEqual(expect.stringMatching('Phone Number'))
  })
})
