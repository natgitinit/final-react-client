import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="ui pointing menu">
      <a class="active item">
        <NavLink to="/"> Home </NavLink>
      </a>
      <a class="item">
        <NavLink to="/about"> About </NavLink>
      </a>
      <a class="item">
        <NavLink to="/categories"> Categories </NavLink>
      </a>
    </div>
  );
};

export default NavBar;
