import React from 'react';
import { Contact, ContactFormContainer } from 'contacts';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import { app } from 'app/reducers';
import 'jasmine-enzyme-assertions';
import 'react/lib/ReactComponentTreeDevtool';

describe('contacts / containers / ContactFormContainer (integration)', () => {

  it('renders contacts', () => {

    const store = createStore(app);

    const wrapper = mount(<ContactFormContainer />, { context: { store } });

    expect(wrapper).toContainReact(<Contact name="e1" />);
  });

});
