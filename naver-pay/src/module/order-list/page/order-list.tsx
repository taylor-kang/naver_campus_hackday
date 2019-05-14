import React from 'react';
import OrderSummary from '../component/order-summary';
import './order-list.scss'


function OrderList() {
  var date = {
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  };


  return (
    <div className={'order-list'}>
      <OrderSummary/>
      <div className={'order-filter'}>
        <form>
          <div className={'form-input month-area'}>
            <ul>
              <li>{date.month-4}월</li>
              <li>{date.month-3}월</li>
              <li>{date.month-2}월</li>
              <li>{date.month-1}월</li>
              <li>{date.month}월</li>
            </ul>
          </div>
          <div className={'form-input date-range-area'}>
            <input type="date" id="start-date" name="start-date"
                   value={date.year + '-' + date.month + '-' + date.date}/>
            ~
            <input type="date" id="end-date" name="end-date"
                   value={date.year + '-' + date.month + '-' + date.date}/>
          </div>
          <div className={'form-input order-status'}>
            <select name="status" form="carform">
              <option value="0">입금확인중</option>
              <option value="1">결제완료</option>
              <option value="2">배송확인</option>
              <option value="3">구매완료</option>
              <option value="4">취소</option>
              <option value="5">반품</option>
              <option value="6">교환</option>
            </select>
          </div>
          <div className={'form-input btn-area'}>
            <button className={'submit-btn'}>
              조회
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className={'order-table'}>

      </div>
    </div>
  );
}

export default OrderList;