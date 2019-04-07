import React from 'react';
import { shallow } from 'enzyme';
import Services from './Services';

describe('<Services />', () => {
  it('Renders a title', () => {
    const wrapper = shallow(<Services />);
    expect(wrapper.find('h1').text()).toMatch(/Services/);
  })
})
