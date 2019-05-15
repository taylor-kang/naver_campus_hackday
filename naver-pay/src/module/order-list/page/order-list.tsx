import React from 'react';
import OrderSummary from '../component/order-summary';
import './order-list.scss';
import Order from '../../../model/order';
import PaginationResult from '../../../model/pagination';
import {Link} from 'react-router-dom';


class OrderList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: null,
      searchOptions: {
        startDate: Date,
        endDate: Date,
        status: '',
      },
      resultOptions: {
        startDate: Date,
        endDate: Date,
        status: '',
      }
    };
  }

  setDateRange() {
    let tmpDate = new Date();
    tmpDate = new Date(tmpDate.getFullYear(), this.state.selectedMonth, 1);
    let tmp = this.state.searchOptions;
    tmp.startDate = tmpDate;
    tmpDate = new Date(tmpDate.getFullYear(), this.state.selectedMonth+1, 0);
    tmp.endDate = tmpDate;
    this.setState({searchOptions: tmp});
  };

  render() {
    const date = {
      date: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    const items = [{
      "id": 1,
      "user_id": "2",
      "date": "2017-04-22T00:07:07.000Z",
      "price": 100,
      "discount_price": 10,
      "pay_price": 90,
      "pay_type": "카드결제",
      "card_num": "7237-9503-1951-9534",
      "card_type": "신한카드",
      "pay_date": "2017-04-22T00:10:00.000Z",
      "seller_id": 50,
      "delivery_receiver": "이호정",
      "delivery_address": "인천광역시 금천구 정자동 200-1번지 503호",
      "delivery_memo": null
    }, {
      "id": 3,
      "user_id": "2",
      "date": "2017-04-25T14:33:53.000Z",
      "price": 189000,
      "discount_price": 0,
      "pay_price": 189000,
      "pay_type": "카드결제",
      "card_num": "8649-5785-2173-3011",
      "card_type": "신한카드",
      "pay_date": "2017-04-25T14:36:46.000Z",
      "seller_id": 30,
      "delivery_receiver": "박호영",
      "delivery_address": "부산광역시 분당구 정자동 봇들마을 1109호",
      "delivery_memo": "소화전에 넣어주세요."
    }, {
      "id": 4,
      "user_id": "2",
      "date": "2017-04-30T14:42:39.000Z",
      "price": 155000,
      "discount_price": 0,
      "pay_price": 155000,
      "pay_type": "카드결제",
      "card_num": "9689-4674-9496-9147",
      "card_type": "삼성카드",
      "pay_date": "2017-04-30T14:45:32.000Z",
      "seller_id": 45,
      "delivery_receiver": "홍민준",
      "delivery_address": "경기도 수원시 강남구 관양동 200-1번지 201호",
      "delivery_memo": null
    }, {
      "id": 5,
      "user_id": "2",
      "date": "2017-05-05T00:20:43.000Z",
      "price": 7000,
      "discount_price": 0,
      "pay_price": 7000,
      "pay_type": "카드결제",
      "card_num": "9231-1497-9813-6984",
      "card_type": "신한카드",
      "pay_date": "2017-05-05T00:23:36.000Z",
      "seller_id": 23,
      "delivery_receiver": "진민현",
      "delivery_address": "부산광역시 분당구 서현1동 힐스테이트 1차 802호",
      "delivery_memo": null
    }];

    const itemList = items.map(function (item) {
      return (
        <li className="order-item" key={item.id}>
          <div className="item-info">
            <Link to={"/order/" + item.id}>
              <div className={'inner'}>
                <div className="item-thumb">
                  <img></img>
                </div>
                <div className="item-name"> {item.id} </div>
                <div className="item-price"> {item.price}원</div>
                <div className="item-date"> {item.date} </div>
                <div className="item-status"> {'결제 완료'} </div>
              </div>
            </Link>
          </div>
          <div className='seller-info'>
            <div className={'inner'}>
              <div className="seller-name"> {'캣츠드림'} </div>
              <div className="seller-phone"> {'010-5034-3333'}</div>
              <button>문의하기</button>
            </div>
          </div>
          <div className='btn-list'>
            <div className={'inner'}>
              <button>교환요청</button>
              <button>구매확정연장</button>
              <button>반품요청</button>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className={'order-list'}>
        <OrderSummary/>
        <div className={'order-filter'}>
          <form>
            <div className={'form-input month-area'}>
              <ul>
                <li>
                  <a onClick={() => {
                    this.state.selectedMonth = date.month - 5;
                    this.setDateRange();
                  }}>
                    {date.month - 4}월
                  </a>
                </li>
                <li>
                  <a onClick={() => {
                    this.state.selectedMonth = date.month - 4;
                    this.setDateRange();
                  }}>
                    {date.month - 3}월
                  </a>
                </li>
                <li>
                  <a onClick={() => {
                    this.state.selectedMonth = date.month - 3;
                    this.setDateRange();
                  }}>
                    {date.month - 2}월
                  </a>
                </li>
                <li>
                  <a onClick={() => {
                    this.state.selectedMonth = date.month - 2;
                    this.setDateRange();
                  }}>
                    {date.month - 1}월
                  </a>
                </li>
                <li>
                  <a onClick={() => {
                    this.state.selectedMonth = date.month - 1;
                    this.setDateRange();
                  }}>
                    {date.month}월
                  </a>
                </li>
              </ul>
            </div>
            <div className={'form-input date-range-area'}>
              <input type="date" id="start-date" name="start-date"
                     onChange={(e) => {
                       let tmp = this.state.searchOptions;
                       tmp.startDate = new Date(e.target.value);
                       this.setState({searchOptions: tmp});
                     }}/>
              ~
              <input type="date" id="end-date" name="end-date"
                     onChange={(e) => {
                       let tmp = this.state.searchOptions;
                       tmp.endDate = new Date(e.target.value);
                       this.setState({searchOptions: tmp});
                     }}/>
            </div>
            <div className={'form-input order-status'}>
              <select name="status" form="carform"
                      onChange={(e) => {
                        let tmp = this.state.searchOptions;
                        tmp.status = e.target.value;
                        this.setState({searchOptions: tmp});
                      }}
              >
                <option value="입금확인중">입금확인중</option>
                <option value="결제완료">결제완료</option>
                <option value="배송확인">배송확인</option>
                <option value="구매완료">구매완료</option>
                <option value="취소">취소</option>
                <option value="반품">반품</option>
                <option value="교환">교환</option>
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
          <ul className="item-list">
            {itemList}
          </ul>
        </div>
      </div>
    );

  }

}

export default OrderList;