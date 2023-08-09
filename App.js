import React, { useState } from 'react';

function ProductCatalog() {
  const products = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 29.99 },
    { id: 3, name: 'Product C', price: 39.99 },
    
  ];

  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
