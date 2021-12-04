import React, { useEffect, useState } from 'react';
import ProductListMenu from './ProductListMenu/ProductListMenu';
import './ProductListNav.scss';

const ProductListNav = () => {
  const [isProductNavLoading, setIsProductNavLoading] = useState(false);
  const [productNavData, setProductNavData] = useState([]);

  useEffect(() => {
    (async () => {
      setIsProductNavLoading(true);
      await productNavFetchData();
      setIsProductNavLoading(false);
    })();
  }, []);

  const productNavFetchData = async () => {
    const data = await fetch('/data/product_nav_data.json');
    const res = await data.json();
    setProductNavData(res);
  };

  return (
    <nav className="productListNav">
      <div className="productListNavContainer">
        <h1 className="productListNavHead">제품</h1>
        <ul className="productListMenuContainer">
          <ProductListMenu mainCategory="모든 제품" />
          {!isProductNavLoading &&
            productNavData.map(({ id, name, category }) => (
              <ProductListMenu
                key={id}
                mainCategory={name}
                subCategory={category}
              />
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default ProductListNav;
