import React from 'react';
import { Menu, MenuLink } from 'menu';
import { shallow } from 'enzyme';
import 'jasmine-enzyme-assertions';

describe('menu / components / Menu', () => {

  it('renders children', () => {

    const jsx = (
      <Menu>
        <MenuLink to="x">item 1</MenuLink>
        <MenuLink to="y">item 2</MenuLink>
      </Menu>
    );

    const wrapper = shallow(jsx);
    expect(wrapper.find(MenuLink).at(0).render()).toHaveText('item 1');
    expect(wrapper.find(MenuLink).at(1).render()).toHaveText('item 2');
  });
});
