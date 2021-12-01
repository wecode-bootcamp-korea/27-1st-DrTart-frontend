import React from 'react';
import './ProductListNav.scss';

function ProductListNav() {
  return (
    <nav className="productListNav">
      <h1 className="productListNavHead">제품</h1>
      <ul className="productListMenuContainer">
        <li className="productListMenu">
          <button className="menuButton">모든 제품</button>
        </li>
        <li className="productListMenu">
          <button className="menuButton">종류별 제품</button>
        </li>
        <li className="productListMenu">
          <button className="menuButton">브랜드별 제품</button>
        </li>
        <li className="productListMenu">
          <button className="menuButton">음료</button>
        </li>
      </ul>
    </nav>
  );
}

export default ProductListNav;
