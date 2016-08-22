import React from 'react';
import { Contact } from 'contacts';
import { mount } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('contacts / components / Contact', () => {

  it('renders name', () => {
    const wrapper = mount(<Contact name="pug walk" />);
    expect(wrapper).toHaveText('pug walk');
  });

});
