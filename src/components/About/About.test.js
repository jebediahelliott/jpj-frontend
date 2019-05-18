import React from 'react';
import { mount } from 'enzyme';
import About from './About';

describe('<About />', () => {
  const props = {
    title: 'About',
    content: 'This is content for the About page.'
  }
  it('Renders a title', () => {
    const wrapper = mount(<About page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
  })
  it('Renders page content', () => {
    const wrapper = mount(<About page={props} />);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
