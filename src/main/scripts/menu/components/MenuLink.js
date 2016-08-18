import React from 'react';
import { Link } from 'react-router';

const MenuLink = (props) => (
  <Link { ...props } activeClassName="link-active" />
);

export default MenuLink;
