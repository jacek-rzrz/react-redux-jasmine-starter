import React from 'react';
import { Contact, ContactList } from 'contacts';
import { List, Map } from 'immutable';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('contacts / components / ContactList', () => {

  it('renders items', () => {
    const wrapper = mount(
      <ContactList contacts={List.of(
        Map({name: 'e1'}),
        Map({name: 'e2'})
      )} />
    );
    expect(wrapper).toContainReact(<Contact name="e1" />);
    expect(wrapper).toContainReact(<Contact name="e2" />);
  });

});
