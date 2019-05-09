import React from 'react';
import { mount } from 'enzyme';
import BasicProgram from './BasicProgram';

describe('<BasicProgram />', () => {
  it('Renders a title', () => {
    const props = {
      title: 'BasicProgram',
      content: 'BasicProgram page content'
    }
    const wrapper = mount(<BasicProgram page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.title);
    expect(wrapper.find('p').text()).toEqual(props.content);
  })
})
