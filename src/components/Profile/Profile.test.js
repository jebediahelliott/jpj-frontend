import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
  it('Greets the user', () => {
    const props = {
      username: 'Jeb'
    }
    const wrapper = shallow(<Profile user={props}/>);
    expect(wrapper.find('h1').text()).toEqual(expect.stringMatching(props.username))
  })
})
