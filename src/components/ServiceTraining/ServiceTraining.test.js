import React from 'react';
import { mount } from 'enzyme';
import ServiceTraining from './ServiceTraining';

describe('<ServiceTraining />', () => {
  const props = {
    title: 'ServiceTraining',
    content: 'This is the ServiceTraining content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<ServiceTraining page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
