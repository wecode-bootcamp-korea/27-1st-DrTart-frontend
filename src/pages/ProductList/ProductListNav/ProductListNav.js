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
          <button className="menuButton  menuDropDown">디저트</button>
          <ul className="dropDownList">
            <li className="dropDownElement">타르트</li>
            <li className="dropDownElement">케이크</li>
            <li className="dropDownElement">마카롱</li>
            <li className="dropDownElement">쿠키</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default ProductListNav;
