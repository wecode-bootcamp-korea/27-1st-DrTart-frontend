import React from 'react';
import { useState } from 'react/cjs/react.development';
import './SortSelectArea.scss';

const SortSelectArea = ({ adjustList, productsList }) => {
  const [sortType, setSortType] = useState('order_quantity');

  const TYPES = {
    upDate: 'created_at',
    orderQuantity: 'order_quantity',
    likeNum: 'like_num',
  };

  const sortList = e => {
    setSortType(() => e.target.value);
    const sortProperty = TYPES[sortType];
    const sortedList =
      sortProperty === 'created_at'
        ? [...productsList].sort(
            (a, b) => Date.parse(a[sortProperty]) - Date.parse(b[sortProperty])
          )
        : [...productsList].sort((a, b) => a[sortProperty] - b[sortProperty]);
    adjustList(sortedList);
  };

  return (
    <form className="sortSelectArea">
      <select className="selectBox" onChange={sortList}>
        <option value="orderQuantity">판매량 순</option>
        <option value="upDate">신상품 순</option>
        <option value="likeNum">좋아요 순</option>
      </select>
    </form>
  );
};
export default SortSelectArea;
