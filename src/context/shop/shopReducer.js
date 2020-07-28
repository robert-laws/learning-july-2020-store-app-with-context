import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
