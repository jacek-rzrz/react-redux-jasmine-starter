import React from 'react';
import { MenuLink } from 'menu';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import 'jasmine-enzyme-assertions';

describe('menu / components / MenuLink', () => {

  it('renders Link component', () => {
    const wrapper = shallow(<MenuLink to="/">home</MenuLink>);
    expect(wrapper.type()).toEqual(Link);
  });

  it('passes props to Link', () => {
    const wrapper = mount(<MenuLink to="/" className="lnk">home</MenuLink>);
    expect(wrapper).toHaveProp('to', '/');
    expect(wrapper).toHaveProp('className', 'lnk');
    expect(wrapper).toHaveText('home');
  });

  it('sets `activeClassName` prop', () => {
    const wrapper = shallow(<MenuLink to="/">home</MenuLink>);
    expect(wrapper).toHaveProp('activeClassName');
  });
});
