import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductListMenu.scss';
import { TRANSELATE } from '../../Transelate';

const ProductListMenu = ({ mainCategory, subCategory }) => {
  const navigate = useNavigate();

  const goToAllProduct = () => {
    navigate(`/product_list/${mainCategory}`);
  };

  return (
    <li className="productListMenu">
      <button
        className={`menuButton ${!!subCategory && 'menuDropDown'}`}
        onClick={goToAllProduct}
      >
        {TRANSELATE[mainCategory]}
      </button>
      {!!subCategory && (
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
      )}
    </li>
  );
};

export default ProductListMenu;
