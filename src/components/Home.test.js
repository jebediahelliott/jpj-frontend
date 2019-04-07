import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it('Renders a title', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('h1').text()).toMatch(/Home/)
  })
})
