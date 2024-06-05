import React from 'react';
const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      <div>
        {cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;