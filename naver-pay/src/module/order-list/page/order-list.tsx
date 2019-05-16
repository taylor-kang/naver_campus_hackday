import React from 'react';
import OrderSummary from '../component/order-summary';
import './order-list.scss';
import Order from '../../../model/order';
import PaginationResult from '../../../model/pagination';
import {Link} from 'react-router-dom';
import axios from "axios";
import Api from "../../../api";


function OrderItemList(props) {
  let orders = props.orders;
  const itemList =[];
  orders.forEach(order => {
    order.items.forEach(item => {
      itemList.push(
        <li className="order-item" key={item.id}>
          <div className="item-info">
            <Link to={"/order/" + item.id}>
              <div className={'inner'}>
                <div className="item-thumb">
                  <img></img>
                </div>
                <div className="item-name"> {item.name} </div>
                <div className="item-price"> {item.price}원</div>
                <div className="item-date"> {order.date} </div>
                <div className="item-status"> {item.status} </div>
              </div>
            </Link>
          </div>
          <div className='seller-info'>
            <div className={'inner'}>
              <div className="seller-name"> {order.seller.name} </div>
              <div className="seller-phone"> {order.seller.phone}</div>
              <button>문의하기</button>
            </div>
          </div>
          {(item.status === '구매확정')?
          <div className='btn-list'>
              <div className={'inner'}>
                <button>교환요청</button>
                <button>구매확정연장</button>
                <button>반품요청</button>
              </div>
          </div>
            : null
          }
        </li>
      )
    })
  });
  return (
    <ul className="item-list">
      {itemList}
    </ul>
  );
}


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
      },
      orderList: null,
    };

    const userId = 'test';
    const that = this;

    if (userId) {
      Api.getParam('/orders', userId).then(function (res) {
        let orderList = [];
        res.data.body[0].orders.forEach(order => {
          orderList.push(order);
        });
        that.setState({orderList: orderList});
      });
    }
  }

  setDateRange() {
    let tmpDate = new Date();
    tmpDate = new Date(tmpDate.getFullYear(), this.state.selectedMonth, 1);
    let tmp = this.state.searchOptions;
    tmp.startDate = tmpDate;
    tmpDate = new Date(tmpDate.getFullYear(), this.state.selectedMonth + 1, 0);
    tmp.endDate = tmpDate;
    this.setState({searchOptions: tmp});
  };

  render() {
    const date = {
      date: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    return (
      this.state.orderList ?
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
                  <i className="fas fa-search"/>
                </button>
              </div>
            </form>
          </div>
          <div className={'order-table'}>
            <OrderItemList orders={this.state.orderList}/>
          </div>
        </div>
        : null
    );

  }

}

export default OrderList;