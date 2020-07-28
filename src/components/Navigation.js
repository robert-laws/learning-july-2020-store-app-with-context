import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to='/'>
        Products
      </NavLink>
      <NavLink exact to='/cart'>
        Cart
      </NavLink>
      <NavLink exact to='/about'>
        About Us
      </NavLink>
    </nav>
  );
};

export default Navigation;
