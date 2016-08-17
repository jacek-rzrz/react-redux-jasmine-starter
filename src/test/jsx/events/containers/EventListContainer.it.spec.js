import React from 'react';
import { Event, EventListContainer, createEvent } from 'events';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { app } from 'app/reducers';
import 'jasmine-enzyme-assertions';
import 'react/lib/ReactComponentTreeDevtool';

describe('events / containers / EventListContainer (integration)', () => {

  it('renders events', () => {

    const store = createStore(app);
    store.dispatch(createEvent({ name: 'e1' }));

    const wrapper = mount(<EventListContainer />, { context: { store } });

    expect(wrapper).toContainReact(<Event name="e1" />);
  });

});
