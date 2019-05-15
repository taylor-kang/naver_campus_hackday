import React from 'react';
import './order-detail.scss';

class OrderDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.orderId = this.props.match.params.id;
  }

  render() {
    const order = {
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
    };

    return (
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
            <tr>
              <td className="item-id">January</td>
              <td className="item-img">$100</td>
              <td className="item-name">$100</td>
              <td className="item-price">$100</td>
              <td className="item-seller">$100</td>
              <td className="item-status">$100</td>
              <td className="item-btn">$100</td>
            </tr>
            <tr>
              <td className="item-id">January</td>
              <td className="item-img">$100</td>
              <td className="item-name">$100</td>
              <td className="item-price">$100</td>
              <td className="item-seller">$100</td>
              <td className="item-status">$100</td>
              <td className="item-btn">$100</td>
            </tr>
            </tbody>

          </table>
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
              <td className="pay-price" rowspan="3">
                총금액
              </td>
            </tr>
            <tr className={'table-value'}>
              <td>{'January'}원</td>
              <td>$100 원</td>
              <td>$100 원</td>
            </tr>
            <tr>
              <td className="item-id">카드간편결제</td>
              <td colSpan="2" className="item-id">신한 카드</td>
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
                {'강태희'}
              </td>
              <td className={'user-info'} width="30%">
                주문자정보
              </td>
            </tr>
            <tr>
              <td className={'label'} >
                연락처
              </td>
              <td className={'value'}>
                {'강태희'}
              </td>
              <td className={'user-info'} rowSpan="3">
                {'강태희'}<br/>
                {'010-5045-5768'}<br/>
                {'@naver.com'}<br/>
              </td>
            </tr>
            <tr>
              <td className={'label'} >
                배송지
              </td>
              <td className={'value'}>
                {'강태희'}
              </td>
            </tr>
            <tr>
              <td className={'label'} >
                배송메모
              </td>
              <td className={'value'}>
                {'강태희'}
              </td>
            </tr>
            </tbody>

          </table>
        </div>
        <h1>{"this is order-detail"}</h1>
        {this.orderId}
      </div>
    );
  }
}

export default OrderDetail;