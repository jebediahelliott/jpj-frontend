import React from 'react';
import { mount } from 'enzyme';
import TrainingPrograms from './TrainingPrograms';

describe('<TrainingPrograms />', () => {
  const props = {
    Title: 'TrainingPrograms',
    Content: 'This is the TrainingPrograms content'
  }
  it('Renders a title', () => {
    const wrapper = mount(<TrainingPrograms page={props} />);
    expect(wrapper.find('h1').text()).toEqual(props.Title);
    expect(wrapper.find('p').text()).toEqual(props.Content);
  })
})
