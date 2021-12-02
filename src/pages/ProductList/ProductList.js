import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListNav from './ProductListNav/ProductListNav';

import ProductsMain from './ProductsMain/ProductsMain';
import './ProductList.scss';

const ProductList = () => {
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    await setProductsList(res);
  };

  useEffect(() => {
    setIsProductLoading(true);
    fetchData();
    setIsProductLoading(false);
  }, []);

  return (
    <div className="productList">
      <ProductListNav />
      {!isProductLoading && (
        <Routes>
          <Route
            path="/"
            element={<ProductsMain productsList={productsList} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default ProductList;
