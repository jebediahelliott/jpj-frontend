import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('Displays contact info', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('.footer-content').text()).toEqual(expect.stringMatching('John P. Jones'))
    expect(wrapper.find('.footer-content').text()).toEqual(expect.stringMatching('eichenhalle@aol.com'))
    expect(wrapper.find('.footer-content').text()).toEqual(expect.stringMatching('814-769-1883'))
  })
})
