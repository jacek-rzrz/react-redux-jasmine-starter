import React from 'react';
import { ContactForm } from 'contacts';
import { mount } from 'enzyme';
import { Map } from 'immutable';
import 'jasmine-enzyme-assertions';

describe('contacts / components / ContactForm', () => {

  let contact;

  beforeEach(() => {
    contact = Map({
      name: 'bob',
      date: '05 Nov 2016'
    });
  });

  it('has header `New contact` when contact not specified', () => {
    const wrapper = mount(<ContactForm />);
    expect(wrapper.find('h2')).toHaveText('New contact');
  });

  it('has header `Edit contact` when contact specified', () => {
    const wrapper = mount(<ContactForm contact={contact} />);
    expect(wrapper.find('h2')).toHaveText('Edit contact');
  });

  it('shows empty fields when contact not specified', () => {
    const wrapper = mount(<ContactForm />);
    expect(wrapper.find('.name')).toHaveValue('');
    expect(wrapper.find('.date')).toHaveValue('');
  });

  it('populates values when contact specified', () => {
    const wrapper = mount(<ContactForm contact={contact} />);
    expect(wrapper.find('.name')).toHaveValue('bob');
    expect(wrapper.find('.date')).toHaveValue('05 Nov 2016');
  });

});
