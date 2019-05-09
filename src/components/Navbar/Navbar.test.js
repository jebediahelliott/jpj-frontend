import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('Has a link for each page and a log in link', () => {
    const wrapper = shallow(<Navbar.WrappedComponent />);
    expect(wrapper.find('NavLink').length).toEqual(5);
  })
})
