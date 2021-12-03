import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListMenu.scss';

const ProductListMenu = ({ mainCategory, subCategory }) => {
  return (
    <li className="productListMenu">
      {!!subCategory ? (
        <>
          <button className="menuButton  menuDropDown">{mainCategory}</button>
          <ul className="dropDownList">
            {subCategory.map(({ id, name }) => (
              <li className="dropDownElement" key={id}>
                <Link
                  className="dropDownLink"
                  to={`/product_list/${mainCategory}/${subCategory}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button className="menuButton">{mainCategory}</button>
      )}
    </li>
  );
};

export default ProductListMenu;
