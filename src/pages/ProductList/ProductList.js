import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListNav from './ProductListNav/ProductListNav';
import ProductsMain from './ProductsMain/ProductsMain';
import SortedProducts from './SortedProducts/SortedProducts';
import './ProductList.scss';

const ProductList = () => {
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    setProductsList(res);
  };

  useEffect(() => {
    (async () => {
      setIsProductLoading(true);
      await fetchData();
      setIsProductLoading(false);
    })();
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
          <Route
            path="/:mainCategory"
            element={<SortedProducts productsList={productsList} />}
          />
          <Route
            path="/:mainCategory/:subCategory"
            element={<SortedProducts productsList={productsList} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default ProductList;
