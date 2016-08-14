import React from 'react';
import Event from 'events/components/Event';
import EventList from 'events/components/EventList';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('events / containers / EventListContainer', () => {

  it('renders name', () => {
    const wrapper = mount(
      <EventList events={List.of(Map({name: 'e1'}))} />
    );
    expect(wrapper).toContainReact(<Event name="e1" />);
  });

});
