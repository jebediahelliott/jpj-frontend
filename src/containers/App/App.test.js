import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import axios from 'axios';

// jest.mock('axios');

describe('<App />', () => {
  it('renders a container for the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toEqual(1);
  })
  it('calls fetchPages when it mounts', () => {
    const pages = [
      {
        title: 'About',
        content: 'About content'
      },
      {
        title: 'Training Programs',
        content: 'Training content'
      }
    ];
    const resp = {data: pages};
    const wrapper = shallow(<App />);
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'fetchPages');
    instance.componentDidMount();
    // const instance = wrapper.instance();
    // axios.get.mockResolvedValue(resp);
    expect(spy).toBeCalled();

  })
})
