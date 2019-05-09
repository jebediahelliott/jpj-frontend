import React from 'react';
import { mount } from 'enzyme';
import GroupClasses from './GroupClasses';

describe('<GroupClasses />', () => {
  const props = {
    title: 'GroupClasses',
    content: 'This is the services content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<GroupClasses page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
