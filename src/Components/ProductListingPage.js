import React, { useState } from 'react';

import tshirt from './images/T-Shirts.webp';
import bag from './images/bag.jpeg';
import bangles from './images/bangles.jpeg';
import bluetooth from './images/bluetooth.jpeg';
import bottle from './images/bottle.jpeg';
import cable from './images/cable.png';
import chudidhar from './images/chudidhar.jpeg';
import cotton from './images/cotton.jpeg';
import dryfruits from './images/dryfruits.jpeg';
import earrings from './images/earrings.jpeg';
import footwear from './images/footwear.jpeg';
import hoodie from './images/hoodie.jpeg';
import jewellery from './images/jewellery.jpeg';
import kurta from './images/kurta.jpeg';
import laptop from './images/laptop.jpeg';
import leggings from './images/leggings.jpeg';
import lehanga from './images/lehanga.jpeg';
import oneplus from './images/oneplus.jpeg';
import oppo from './images/oppo.jpeg';
import pan from './images/pan.jpeg';
import pant from './images/pant.jpeg';
import partydress from './images/partydress.jpg';
import plasticbottle from './images/plasticbottle.jpeg';
import product from './images/products.jpeg';
import realme from './images/realme.jpeg';
import sarees from './images/sarees.jpeg';
import skirt from './images/skirt.jpeg';
import sports from './images/sports.jpeg';
import tops from './images/tops.jpg';
import toys from './images/toys.jpeg';
import vivo from './images/vivo.jpeg';
import computer from './images/computer.jpeg';

const ProductListingPage = ({ addToCart }) => {
  const initialProducts = [
    { id: 1, name: 'T-Shirt', price: 999, image: tshirt },
    { id: 2, name: 'Non-stick PAN', price: 1199, image: pan },
    { id: 3, name: 'Bluetooth', price: 3000, image: bluetooth },
    { id: 4, name: 'Charger Cable', price: 250, image: cable },
    { id: 5, name: 'Laptop', price: 500000, image: laptop },
    { id: 6, name: 'Computer', price: 200000, image: computer },
    { id: 7, name: 'Vivo Y75 Mobile', price: 30000, image: vivo },
    { id: 8, name: 'Realme 5 Mobile', price: 50000, image: realme },
    { id: 9, name: 'Oppo Reno3 Pro Mobile', price: 60000, image: oppo },
    { id: 10, name: 'One Plus Mobile', price: 35000, image: oneplus },
    { id: 11, name: 'Bangles', price: 500, image: bangles },
    { id: 12, name: 'College Bag', price: 1000, image: bag },
    { id: 13, name: 'Milton Bottle', price: 1500, image: bottle },
    { id: 14, name: 'Plastic Bottle', price: 500, image: plasticbottle },
    { id: 15, name: 'Kurta Set', price: 2000, image: kurta },
    { id: 16, name: 'Lehanga', price: 5000, image: lehanga },
    { id: 17, name: 'Chudidhar', price: 750, image: chudidhar },
    { id: 18, name: 'Jewellery', price: 1250, image: jewellery },
    { id: 19, name: 'Ear Rings', price: 300, image: earrings },
    { id: 20, name: 'Kanchipuram Sarees', price: 5000, image: sarees },
    { id: 21, name: 'Jeans Tops', price: 600, image: tops },
    { id: 22, name: 'Jeans Pant', price: 600, image: pant },
    { id: 23, name: 'Cotton Sarees', price: 700, image: cotton },
    { id: 24, name: 'Party wear Dresses', price: 1500, image: partydress },
    { id: 25, name: 'Leggings Set', price: 1200, image: leggings },
    { id: 26, name: 'Skirts', price: 300, image: skirt },
    { id: 27, name: 'Hoodie', price: 1000, image: hoodie },
    { id: 28, name: 'Kids Toys', price: 1350, image: toys },
    { id: 29, name: 'Foot Wear', price: 1750, image: footwear },
    { id: 30, name: 'Beauty & Health', price: 6000, image: product },
    { id: 31, name: 'Sports & Fitness', price: 5000, image: sports },
    { id: 32, name: 'Dry Fruits', price: 1000, image: dryfruits }
  ];

  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    addToCart(product);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredProducts = initialProducts.filter(product =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <>
    <div className='search'>
      <h2>Product Listing Page</h2>
      <input type="text" placeholder="Search products" value={searchTerm} onChange={handleSearch} />
    </div> 
      <div className='output'>
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map(product => (
            <div key={product.id} className='product'>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>${product.price}</p> 
              <button className='cart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </>
    
  );
};

export default ProductListingPage;
