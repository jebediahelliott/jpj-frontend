import React from 'react';
import { mount } from 'enzyme';
import Consultation from './Consultation';

describe('<Consultation />', () => {
  const props = {
    title: 'Consultation',
    content: 'This is the Consultation content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<Consultation page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
