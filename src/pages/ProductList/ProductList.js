import React from 'react';
import ProductListNav from './ProductListNav/ProductListNav';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productList">
      <ProductListNav />
      <div className="contentsWrapper">
        <div className="productContainer"></div>
      </div>
    </div>
  );
};

export default ProductList;
