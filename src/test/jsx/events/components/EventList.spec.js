import React from 'react';
import { Event, EventList } from 'events';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('events / components / EventList', () => {

  it('renders items', () => {
    const wrapper = mount(
      <EventList events={List.of(
        Map({name: 'e1'}),
        Map({name: 'e2'})
      )} />
    );
    expect(wrapper).toContainReact(<Event name="e1" />);
    expect(wrapper).toContainReact(<Event name="e2" />);
  });

});
