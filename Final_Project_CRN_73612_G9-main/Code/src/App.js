import React from 'react';
import './App.css';
import Home from './Pages/Pages'
import SignIn from './Pages/SignIn'

import SignUpPage from './Components/SignUp/SignUpPage'
import SignInPage from './Components/SignIn/SignInPage'
import Contact from './Components/ContactUs/Contact'
import Admin from './Components/Admin/Admin'

import ProductsPage from './Components/Products/productsPage';
import Cart from './Components/Cart/Cart.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} exact element={<Home />} />
        <Route path="/signin" component={SignInPage} exact element={<SignInPage />} />
        <Route path="/signup" component={SignUpPage} exact element={<SignUpPage />} />
        <Route path="/products" component={ProductsPage} exact element={<ProductsPage />} />
        <Route path="/cart" component={Cart} exact element={<Cart />} />
        <Route path="/contactus" component={Contact} exact element={<Contact />} />
        <Route path="/signup" component={SignUpPage} exact element={<SignUpPage />} />
        <Route path="/admin" component={Admin} exact element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;
