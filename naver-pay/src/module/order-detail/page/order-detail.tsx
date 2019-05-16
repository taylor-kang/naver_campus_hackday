import React from 'react';
import './order-detail.scss';
import axios from "axios";
import Api from '../../../api';

function OrderItemList(props) {
  let items = props.items;
  let seller = props.seller;
  const itemList = items.map((item, i) =>
    <tr key={i}>
      <td className="item-id">{item.id}</td>
      <td className="item-img"></td>
      <td className="item-name">{item.name}</td>
      <td className="item-price">{item.price}</td>
      <td className="item-seller">
        <div className={'seller-info'}>
          {seller.name}<br/>
          {seller.phone}<br/>
        </div>
      </td>
      <td className="item-status">{item.status}</td>
      <td className="item-btn">버튼</td>
    </tr>
  );

  return (
    <table>
      <thead>
      <tr>
        <th>상품주문번호</th>
        <th colSpan="2">상품정보</th>
        <th>상품금액(수량)</th>
        <th>배송비/판매자</th>
        <th colSpan="2">진행상태</th>
      </tr>
      </thead>
      <tbody>
      {itemList}
      </tbody>
    </table>
  );

}

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: this.props.match.params.id,
      orderItems: null,
    };

    const orderId = this.state.orderId;
    const that = this;
    if (orderId) {
      Api.getParam('/order', orderId).then(function (res) {
        that.setState({
          orderItems: res.data.body[0]
        });
      });
    }
  }

  render() {
    const order = this.state.orderItems;

    return (
      this.state.orderItems ?
        <div className={'order-detail'}>

          <div className={'header-title'}>
            주문상세정보
          </div>
          <div className={'header-box'}>
            <label>결제일자</label>
            <span> {order.date} </span>
            <label>결제번호</label>
            <span> {order.id} </span>
          </div>
          <div className={'order-detail-table'}>
            <OrderItemList items={order.items} seller={order.seller}/>
          </div>

          <div className={'header-title'}>
            결제 금액 정보
          </div>
          <div className={'price-detail-table'}>
            <table>
              <tbody>
              <tr className={'table-header'}>
                <td className="price" width="23%">
                  상품금액
                </td>
                <td className="discount-price" width="23%">
                  할인금액
                </td>
                <td className="point-price" width="23%">
                  환불정산액/포인트 결제액
                </td>
                <td className="pay-price" rowSpan="3">
                  총금액
                </td>
              </tr>
              <tr className={'table-value'}>
                <td>{order.price}원</td>
                <td>{order.discount_price}원</td>
                <td>{order.pay_price}원</td>
              </tr>
              <tr>
                <td className="item-id">{order.pay_type}</td>
                <td colSpan="2" className="item-id">
                  {(order.pay_type === '카드결제' ? order.card_type + ' | ' + order.card_num : '')} </td>
              </tr>
              </tbody>

            </table>
          </div>

          <div className={'header-title'}>
            배송지 정보
          </div>
          <div className={'delivery-detail-table'}>
            <table>
              <tbody>
              <tr>
                <td className={'label'} width="15%">
                  수령인
                </td>
                <td className={'value'}>
                  {order.delivery_receiver}
                </td>
                <td className={'user-info'} width="30%">
                  주문자정보
                </td>
              </tr>
              <tr>
                <td className={'label'}>
                  연락처
                </td>
                <td className={'value'}>
                  {order.delivery_address}
                </td>
                <td className={'user-info'} rowSpan="3">
                  {order.user.id}<br/>
                  {order.user.phone}<br/>
                  {order.user.email}<br/>
                </td>
              </tr>
              <tr>
                <td className={'label'}>
                  배송지
                </td>
                <td className={'value'}>
                  {order.delivery_address}
                </td>
              </tr>
              <tr>
                <td className={'label'}>
                  배송메모
                </td>
                <td className={'value'}>
                  {order.delivery_memo}
                </td>
              </tr>
              </tbody>

            </table>
          </div>
        </div>
        : null
    );
  }
}

export default OrderDetail;