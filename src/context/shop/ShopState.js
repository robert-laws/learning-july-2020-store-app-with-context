import React, { useReducer } from 'react';
import ShopContext from './shopContext';
import shopReducer from './shopReducer';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../types';

const ShopState = ({ children }) => {
  const initialState = {
    products: [
      { id: 'p1', title: 'Coat Rack', price: 22.54 },
      { id: 'p2', title: 'Pencil Sharpener', price: 4.72 },
      { id: 'p3', title: 'Washing Machine', price: 142.35 },
      { id: 'p4', title: 'Floor Mat', price: 14.32 },
      { id: 'p5', title: 'Baseball', price: 9.53 },
    ],
    cart: [],
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopState;
