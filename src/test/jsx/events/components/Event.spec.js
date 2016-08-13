import React from 'react';
import Event from 'events/components/Event';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('events / components / Event', () => {

  it('renders name', () => {
    const wrapper = mount(<Event name="pug walk" />);
    expect(wrapper).toHaveText('pug walk');
  });

});
