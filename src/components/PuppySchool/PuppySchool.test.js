import React from 'react';
import { mount } from 'enzyme';
import PuppySchool from './PuppySchool';

describe('<PuppySchool />', () => {
  const props = {
    title: 'PuppySchool',
    content: 'This is the PuppySchool content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<PuppySchool page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
