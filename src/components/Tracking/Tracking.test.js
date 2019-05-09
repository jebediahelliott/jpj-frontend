import React from 'react';
import { mount } from 'enzyme';
import Tracking from './Tracking';

describe('<Tracking />', () => {
  const props = {
    title: 'Tracking',
    content: 'This is the Tracking content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<Tracking page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
