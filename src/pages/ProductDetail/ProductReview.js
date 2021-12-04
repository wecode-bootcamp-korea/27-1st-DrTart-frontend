import React from 'react';

import './ProductReview.scss';

export default function ProductReview() {
  return (
    <div className="detailWrap">
      <ul className="detailMenu">
        <li>상세정보</li>
        <li>리뷰</li>
        <li>정보안내</li>
      </ul>
      <form className="reviewInputBox">
        <textarea
          className="reviewInput"
          placeholder="새로운 리뷰를 등록해주세요."
        >
          ddd
        </textarea>
        <button className="submitBtn">리뷰 등록하기</button>
      </form>
    </div>
  );
}
