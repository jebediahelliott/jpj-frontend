import React from 'react';
import { mount } from 'enzyme';
import BasicObedienceProgram from './BasicObedienceProgram';

describe('<BasicObedienceProgram />', () => {
  const props = {
    Title: 'BasicObedienceProgram',
    Content: 'This is the BasicObedienceProgram content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<BasicObedienceProgram page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
