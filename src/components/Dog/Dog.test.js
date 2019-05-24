import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('<Dog />', () => {
  it('Greets the user', () => {
    const props = [
      {
        id: 1,
        name: "Arya",
        notes: "Spoiled rotten",
        picture: [
          {
            url: "/uploads/6d83cf94c1fd44c58e05f136e54c0845.jpg"
          }
        ]
      }
    ]
    const wrapper = shallow(<Dog dogs={props}/>);
    expect(wrapper.find('h2').text()).toEqual(`${props[0].name}`);
    expect(wrapper.find('p').text()).toEqual(props[0].notes);
  })
})
