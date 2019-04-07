import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('Renders a title', () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find('h1').text()).toMatch(/About/)
  })
})
