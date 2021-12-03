import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListNav from './ProductListNav/ProductListNav';
import ProductsMain from './ProductsMain/ProductsMain';

const ProductList = () => {
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    setIsProductLoading(true);
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    setProductsList(res);
  };

  useEffect(() => {
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
