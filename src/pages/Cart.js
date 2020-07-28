import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShopContext from '../context/shop/shopContext';

const Cart = () => {
  const shopContext = useContext(ShopContext);

  const { cart, removeProductFromCart } = shopContext;

  if (cart.length === 0) {
    return (
      <section className='cart-section'>
        <div>
          <h1>There are no products in your cart.</h1>
          <hr />
          <Link className='return-link' to='/'>
            Return to Products Page
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='cart-section'>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <div className='cart-info'>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div className='cart-action'>
              <button onClick={() => removeProductFromCart(product.id)}>
                Remove From Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;
