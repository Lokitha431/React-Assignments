import React, { useState } from 'react';

const ProductListingPage = ({ addToCart }) => {
  const [products, setProducts] = useState([
    // { id: 1, name: 'Mobile', price: 10 },
    // { id: 2, name: 'Product 2', price: 20 },
    // { id: 3, name: 'Product 3', price: 30 }
  ]);

  const [newProduct, setNewProduct] = useState({ id: '', name: '', price: '' });
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToCart(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.id && newProduct.name && newProduct.price) {
      setProducts([...products, { ...newProduct, price: parseFloat(newProduct.price) }]);
      setNewProduct({ id: '', name: '', price: '' }); 
    } else {
      alert('Enter all the details');
    }
  };


  return (
    <div>
      <h2>Product Listing Page</h2>
      <div>
        <h3>Add New Product</h3>
        <input type="number" name="id" placeholder="  Product ID" value={  newProduct.id} onChange={handleInputChange} /><br></br><br></br>
        <input type="text" name="name" placeholder="  Product Name" value={  newProduct.name} onChange={handleInputChange} /><br></br><br></br>
        <input type="number" name="price" placeholder="  Product Price" value={  newProduct.price} onChange={handleInputChange} /><br></br><br></br>
        <button className='product' onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className='cart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;