import React from 'react';
import { Contact, ContactListContainer, createContact } from 'contacts';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { app } from 'app/reducers';
import 'jasmine-enzyme-assertions';
import 'react/lib/ReactComponentTreeDevtool';

describe('contacts / containers / ContactListContainer (integration)', () => {

  it('renders contacts', () => {

    const store = createStore(app);
    store.dispatch(createContact({ name: 'e1' }));

    const wrapper = mount(<ContactListContainer />, { context: { store } });

    expect(wrapper).toContainReact(<Contact name="e1" />);
  });

});
