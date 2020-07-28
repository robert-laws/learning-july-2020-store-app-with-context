import React, { useContext } from 'react';
import ShopContext from '../context/shop/shopContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const shopContext = useContext(ShopContext);

  const { cart } = shopContext;

  return (
    <nav>
      <NavLink exact to='/'>
        Products
      </NavLink>
      <NavLink exact to='/cart'>
        Cart {cart.length ? `(${cart.length})` : ''}
      </NavLink>
      <NavLink exact to='/about'>
        About Us
      </NavLink>
    </nav>
  );
};

export default Navigation;
