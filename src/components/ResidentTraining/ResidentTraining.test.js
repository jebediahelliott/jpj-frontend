import React from 'react';
import { mount } from 'enzyme';
import ResidentTraining from './ResidentTraining';

describe('<ResidentTraining />', () => {
  const props = {
    Title: 'ResidentTraining',
    Content: 'This is the ResidentTraining content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<ResidentTraining page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
