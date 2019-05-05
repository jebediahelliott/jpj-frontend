import React from 'react';
import { mount } from 'enzyme';
import GroupClasses from './GroupClasses';

describe('<GroupClasses />', () => {
  const props = {
    Title: 'GroupClasses',
    Content: 'This is the services content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<GroupClasses page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
