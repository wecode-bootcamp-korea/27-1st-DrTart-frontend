import React, { useState, useEffect } from 'react';
import ProductListNav from './ProductListNav/ProductListNav';
import Product from './Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    await setProductsList(res);
  };

  console.log(productsList);

  useEffect(() => {
    setIsProductLoading(true);
    fetchData();
    setIsProductLoading(false);
  }, []);

  return (
    <div className="productList">
      <ProductListNav />
      <div className="productContentsWrapper">
        <div className="productListHead">현재 판매하는 제품</div>
        <div className="productListContainer">
          {productsList.map(product => (
            <Product
              key={product.id}
              productName={product.korean_name}
              productPrice={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
