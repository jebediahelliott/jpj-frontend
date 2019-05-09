import React from 'react';
import { mount } from 'enzyme';
import GraduateProgram from './GraduateProgram';

describe('<GraduateProgram />', () => {
  it('Renders a title', () => {
    const props = {
      title: 'GraduateProgram',
      content: 'GraduateProgram page content'
    }
    const wrapper = mount(<GraduateProgram page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
