import React from 'react';
import { mount } from 'enzyme';
import BasicProgram from './BasicProgram';

describe('<BasicProgram />', () => {
  it('Renders a title', () => {
    const props = {
      Title: 'BasicProgram',
      Content: 'BasicProgram page content'
    }
    const wrapper = mount(<BasicProgram page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
