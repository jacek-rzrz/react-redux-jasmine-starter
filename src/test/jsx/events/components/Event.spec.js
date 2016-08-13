import React from 'react';
import Event from 'events/components/Event';
import jasmineEnzyme from 'jasmine-enzyme';
import { mount } from 'enzyme';

describe('events / components / Event', () => {

  beforeEach(() => {
    jasmineEnzyme();
  });


  it('renders name', () => {
    const wrapper = mount(<Event name="pug walk" />);
    expect(wrapper).toHaveText('pug walk');
  });

});
