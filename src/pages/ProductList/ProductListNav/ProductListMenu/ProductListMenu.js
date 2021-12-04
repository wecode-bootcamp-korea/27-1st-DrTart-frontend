import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListMenu.scss';
import { TRANSELATE } from '../../Transelate';

const ProductListMenu = ({ mainCategory, subCategory }) => {
  return (
    <li className="productListMenu">
      {!!subCategory ? (
        <>
          <button className="menuButton  menuDropDown">
            {TRANSELATE[mainCategory]}
          </button>
          <ul className="dropDownList">
            {subCategory.map(({ id, name }) => (
              <li className="dropDownElement" key={id}>
                <Link
                  className="dropDownLink"
                  to={`/product_list/${mainCategory}/${name}`}
                >
                  {TRANSELATE[name]}
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
