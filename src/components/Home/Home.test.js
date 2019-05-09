import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it('Renders a title', () => {
    const props = {
      title: 'Home',
      content: 'Home page content'
    }
    const wrapper = mount(<Home page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
