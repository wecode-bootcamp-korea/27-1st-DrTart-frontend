import React from 'react';
import './ProductListMenu.scss';

const ProductListMenu = ({ list_name, small_category }) => {
  return (
    <li className="productListMenu">
      {!!small_category ? (
        <>
          <button className="menuButton  menuDropDown">{list_name}</button>
          <ul className="dropDownList">
            {small_category.map(({ id, name }) => (
              <li className="dropDownElement" key={id}>
                {name}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button className="menuButton">{list_name}</button>
      )}
    </li>
  );
};

export default ProductListMenu;
