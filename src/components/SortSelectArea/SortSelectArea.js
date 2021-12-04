import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './../SortSelectArea/SortSelectArea.scss';

const SortSelectArea = () => {
  const [sortedData, setSortedData] = useState([]);
  const [sortType, setSortType] = useState('update');

  useEffect(() => {
    fetch('http://localhost:3000/data/product_data_sort.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setSortedData(data);
      });

    const sortArray = type => {
      const types = {
        update: 'up_date',
        reviewNum: 'review_num',
        likeNum: 'like_num',
      };

      const sortProperty = types[type];

      const sorted = [...sortedData].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );

      setSortedData(sorted);
    };

    return () => {
      sortArray(sortType);
    };
  }, [sortType]);

  return (
    <form className="sortSelectArea">
      <select
        className="selectBox"
        onChange={e => {
          setSortType(e.target.value);
        }}
      >
        <option value="update">신상품 순</option>
        <option value="reviewNum">리뷰 순</option>
        <option value="likeNum">좋아요 순</option>
      </select>
    </form>
  );
};
export default SortSelectArea;
