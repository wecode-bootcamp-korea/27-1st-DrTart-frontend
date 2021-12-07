import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import './styles/router.scss';
import ProductInfoBox from './components/ProductInfoBox/ProductInfoBox';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="appContents">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-list/*" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order/" element={<Order />} />
          <Route path="/productinfo" element={<ProductInfoBox />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
