import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    // Add more products as needed
  ];

  const addToWishlist = (productId) => {
    // Check if the product is not already in the wishlist
    if (!wishlist.find(item => item.id === productId)) {
      const selectedProduct = products.find(product => product.id === productId);
      setWishlist([...wishlist, selectedProduct]);
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h2>Available Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;