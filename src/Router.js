import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Product from './pages/ProductList/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import './styles/router.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="appContents">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product_list/*" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order/:pageType" element={<Order />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
