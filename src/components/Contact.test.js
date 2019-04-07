import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  it('Renders a title', () => {
    const wrapper = shallow(<Contact />)
    expect(wrapper.find('h1').text()).toMatch(/Contact Us/)
  })
})
