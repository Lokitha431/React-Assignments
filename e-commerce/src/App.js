import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListingPage from './Components/ProductListingPage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import './Components/Style.css';
import Cart from './Components/Cart.png';
import Product from './Components/Product.png';
import Checkout from './Components/Checkout.png'
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

    return(
      <Router>
        <h1>E-Commerce Application</h1>
        <div>
            <ul className='list'>
              <li>
                <Link to="/">Products <img src={Product} alt='' /> </Link>
              </li>
              <li>
                <Link to="/cart">Cart <img src={Cart} alt='' /> </Link>
              </li>
              <li>
                <Link to="/checkout">Checkout <img src={Checkout} alt='' /> </Link>
              </li>
            </ul>
            <center>
              <Routes>
                <Route path="/" element={<ProductListingPage addToCart={addToCart} />} />
                <Route path="/cart" element={<CartPage cart={cart} />} />
                <Route path="/checkout" element={<CheckoutPage cart={cart} />} /> 
              </Routes>
            </center>
        </div>
      </Router>
    );
};
export default App;
