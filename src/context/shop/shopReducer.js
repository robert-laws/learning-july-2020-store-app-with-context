import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const match = state.cart.find((item) => item.id === action.payload.id);

      if (match) {
        const newQuantity = match.quantity + 1;

        return {
          ...state,
          cart: [
            ...state.cart.filter((item) => item.id !== action.payload.id),
            { ...action.payload, quantity: newQuantity },
          ],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
