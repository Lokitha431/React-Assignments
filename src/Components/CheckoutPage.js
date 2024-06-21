import React from 'react';
const CheckoutPage = ({ cart }) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Checkout Page</h2>
      <div className='product'>
        <h3>Summary</h3>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );  
};

export default CheckoutPage;