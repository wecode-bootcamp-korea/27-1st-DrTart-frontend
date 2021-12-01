import React from 'react';

const ModalBuyNow = () => {
  return (
    <div className="ModalBuyNow">
      <button className="closeBtn" type="button">
        <i class="fas fa-times" />
      </button>
      <img src="" alt="" />
      <div>
        <div>
          <div>GIFT</div>
          <div>SALE</div>
        </div>
        <h3>시카페어 세럼</h3>
        <p>#1시간진정세럼</p>
        <p>68,000원</p>
        <ul>
          <li>구매정보</li>
          <li>추가 사은품</li>
        </ul>
        <div>
          <dl>
            <dt>적립금</dt>
            <dd>950원</dd>
          </dl>
          <dl>
            <dt>수량</dt>
            <dd>
              <div>
                <button>
                  <i class="fas fa-minus" />
                </button>
                <input type="text" value="1" readOnly />
                <button>
                  <i class="fas fa-plus" />
                </button>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>사은품</dt>
            <dd>시카페어 크림 15ml</dd>
            <dd>1</dd>
          </dl>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>시카페어크림 15ml</p>
                <p>1개</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <p>총 구매금액</p>
          <p>36,000원</p>
        </div>
        <button>바로구매</button>
      </div>
    </div>
  );
};
export default ModalBuyNow;
