import React from 'react';
import { shallow } from 'enzyme';
import TrainingLinks from './TrainingLinks';

describe('<TrainingLinks />', () => {
  it('Has a link for each page and a log in link', () => {
    const wrapper = shallow(<TrainingLinks />);
    expect(wrapper.find('NavLink').length).toEqual(8);
  })
})
