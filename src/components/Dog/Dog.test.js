import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('<Dog />', () => {
  it('Greets the user', () => {
    const props = {
      name: 'Arya',
      notes: 'Barks at guests'
    }
    const wrapper = shallow(<Dog dog={props}/>);
    expect(wrapper.find('h1').text()).toEqual(props.name);
    expect(wrapper.find('p').text()).toEqual(props.notes);
  })
})
