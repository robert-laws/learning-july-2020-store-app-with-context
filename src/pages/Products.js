import React, { useContext } from 'react';
import ShopContext from '../context/shop/shopContext';

const Products = () => {
  const shopContext = useContext(ShopContext);

  const { products, addProductToCart } = shopContext;

  if (!products) {
    return (
      <section className='products-section'>
        <h1>No Products</h1>
      </section>
    );
  }

  return (
    <section className='products-section'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className='product-info'>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div className='product-action'>
              <button onClick={() => addProductToCart(product)}>
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
