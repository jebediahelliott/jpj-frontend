import React from 'react';
import { mount } from 'enzyme';
import Services from './Services';

describe('<Services />', () => {
  const props = {
    Title: 'Services',
    Content: 'This is the services content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<Services page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
