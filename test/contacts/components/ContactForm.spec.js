import React from 'react';
import { ContactForm } from 'contacts';
import { mount } from 'enzyme';
import { Map } from 'immutable';
import 'jasmine-enzyme-assertions';

describe('contacts / components / ContactForm', () => {

  let contact, onSubmit, editForm, createForm;

  beforeEach(() => {
    contact = Map({
      name: 'bob',
      date: '05 Nov 2016'
    });
    onSubmit = jasmine.createSpy('onSubmit');
    editForm = mount(<ContactForm contact={contact} onSubmit={onSubmit} />);
    createForm = mount(<ContactForm onSubmit={onSubmit} />);
  });

  it('has header `New contact` when contact not specified', () => {
    expect(createForm.find('h2')).toHaveText('New contact');
  });

  it('has header `Edit contact` when contact specified', () => {
    expect(editForm.find('h2')).toHaveText('Edit contact');
  });

  it('shows empty fields when contact not specified', () => {
    expect(createForm.find('.name')).toHaveValue('');
    expect(createForm.find('.date')).toHaveValue('');
  });

  it('populates values when contact specified', () => {
    expect(editForm.find('.name')).toHaveValue('bob');
    expect(editForm.find('.date')).toHaveValue('05 Nov 2016');
  });

  it('invokes the callback when form submits', () => {
    createForm.find('.name').simulate('change', { target: { value: 'charlie' } });

    // createForm.find('button').simulate('click');

    // mount() does not support event propagation:
    // https://github.com/airbnb/enzyme/issues/308
    // so simulating button click does not cause form to submit.
    // invoking directly:
    createForm.simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });

});
