import React from 'react';
import { Contact, ContactList } from 'contacts';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('contacts / containers / ContactListContainer', () => {

  it('renders name', () => {
    const wrapper = mount(
      <ContactList contacts={List.of(Map({name: 'e1'}))} />
    );
    expect(wrapper).toContainReact(<Contact name="e1" />);
  });

});
