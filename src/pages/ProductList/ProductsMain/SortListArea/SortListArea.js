import React from 'react';

const SortListArea = () => {
  const enabledWrap = () => {
    console.log('열렸다 참깨');
  };

  return (
    <div className="sortListArea">
      <div className="selectBox">
        <button className="title" type="button" onClick={enabledWrap}>
          신상품 순
        </button>
        <ul className="selList">
          <li>
            <input type="radio" id="newRank" checked />
            <label htmlFor="newRank">신상품 순</label>
          </li>
          <li>
            <input type="radio" id="reviewRank" />
            <label htmlFor="reviewRank">리뷰 순</label>
          </li>
          <li>
            <input type="radio" id="likeRank" />
            <label htmlFor="likeRank">좋아요 순</label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SortListArea;
