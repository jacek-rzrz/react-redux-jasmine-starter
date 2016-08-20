import React from 'react';

import Menu from 'menu/components/Menu';
import MenuLink from 'menu/components/MenuLink';

const MenuContainer = () => (
  <Menu>
    <MenuLink to="/counter">counter</MenuLink>
    <MenuLink to="/" onlyActiveOnIndex={true}>home</MenuLink>
  </Menu>
);

export default MenuContainer;
