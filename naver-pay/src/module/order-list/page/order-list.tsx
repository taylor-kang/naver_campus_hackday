import React from 'react';
import OrderSummary from '../component/order-summary';
import './order-list.scss';
import Order from '../../../model/order';
import PaginationResult from '../../../model/pagination';
import {Link} from 'react-router-dom';
import axios from "axios";
import Api from "../../../api";

function formatDate(date) {
  if (date == null) return null;
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function OrderItemList(props) {
  let orders = props.orders;
  const status = ['결제완료', '결제중', '배송중', '배송완료', '구매확정'];
  const itemList = [];
  orders.forEach(order => {
    order.items.forEach(item => {
      itemList.push(
        <li className="order-item" key={item.id}>
          <div className="item-info">
            <Link to={"/order/" + order.id}>
              <div className={'inner'}>
                <div className="item-thumb">
                  <img/>
                </div>
                <div className="item-name"> {item.name} </div>
                <div className="item-price"> {item.price}원</div>
                <div className="item-date"> {order.date.toString().slice(0, 10)} </div>
                <div className="item-status">
                  <span className={'status'+ status.indexOf(item.status)}>{item.status}</span>
                </div>
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
          {(item.status === '구매확정') ?
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
      );
    });
  });
  return (
    <ul className="item-list">
      {itemList}
    </ul>
  );
}


class OrderList extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: 'test',
      selectedMonth: null,
      searchOptions: {
        startDate: null,
        endDate: null,
        status: null,
      },
      orderList: null,
    };

    this.submitFilter = this.submitFilter.bind(this);
    this.setDateRange = this.setDateRange.bind(this);

    const that = this;
    if (this.state.userId) {
      formatDate;
      Api.getParam('/orders', this.state.userId).then(function (res) {
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


  submitFilter() {
    Api.getParam('/orders', this.state.userId, {
      startDate: formatDate(this.state.searchOptions.startDate),
      endDate: formatDate(this.state.searchOptions.endDate),
      status: this.state.searchOptions.status,
    }).then((res) => {
      if (res.data.body[0]) {
        console.log(res.data.body[0]);
        let orderList = [];
        res.data.body[0].orders.forEach(order => {
          orderList.push(order);
        });
        this.setState({orderList: orderList});
      }
    });
  }

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
            <div className={'form-input month-area'}>
              <ul>
                <li onClick={() => {
                  this.setState({selectedMonth: date.month - 5}, this.setDateRange);
                }}>
                  {date.month - 4}월
                </li>
                <li onClick={() => {
                  this.setState({selectedMonth: date.month - 4}, this.setDateRange);
                }}>
                  {date.month - 3}월
                </li>
                <li onClick={() => {
                  this.setState({selectedMonth: date.month - 3}, this.setDateRange);
                }}>
                  {date.month - 2}월
                </li>
                <li onClick={() => {
                  this.setState({selectedMonth: date.month - 2}, this.setDateRange);
                }}>
                  {date.month - 1}월
                </li>
                <li onClick={() => {
                  this.setState({selectedMonth: date.month - 1}, this.setDateRange);
                }}>
                  {date.month}월
                </li>
              </ul>
            </div>
            <div className={'form-input date-range-area'}>
              <input type="date"
                     onChange={(e) => {
                       let tmp = this.state.searchOptions;
                       tmp.startDate = new Date(e.target.value);
                       this.setState({searchOptions: tmp});
                     }}/>
              ~
              <input type="date"
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
                      }}>
                <option value="null">선택</option>
                <option value="0">결제완료</option>
                <option value="1">결제중</option>
                <option value="2">배송중</option>
                <option value="3">배송완료</option>
                <option value="4">구매확정</option>
              </select>
            </div>
            <div className={'form-input btn-area'}>
              <button className={'submit-btn'} onClick={this.submitFilter}>
                조회
                <i className="fas fa-search"/>
              </button>
            </div>
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