import React from 'react';
import { mount } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('Renders a title', () => {
    const props = {
      title: 'About',
      content: 'This is content for the About page.'
    }
    const wrapper = mount(<About page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
