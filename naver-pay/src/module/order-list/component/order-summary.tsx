import React from 'react';
import './order-summary.scss'

function OrderSummary() {
  return (
    <div className='order-summary'>
      <div className='summary_menu'>
        <ul>
          <li>쇼핑</li>
          <li>컨텐츠</li>
          <li>QR결</li>
          <li>예약</li>
          <li>제휴카드</li>
        </ul>
      </div>
      <div className={'summary_content'}>
        <ul>
          <li>배송중</li>
          <li>배송완료</li>
          <li>취소/반품/교환</li>
        </ul>
      </div>
    </div>
  );
}

export default OrderSummary;

