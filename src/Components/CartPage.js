import React from 'react';
const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart Page </h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartPage;