import React from 'react';
import './order-summary.scss'

class OrderSummary extends React.Component {

  // constructor(props) {
  //   //   super(props);
  //   //   this.
  //   //
  //   // }
  //   //
  //   // componentDidMount() {
  //   //
  //   //   // TODO: [GET] /summay
  //   //   var orderSummary: {
  //   //     on_delivery: number,
  //   //     delivery_complete: number,
  //   //     cancel: number
  //   //   }
  //   //   //
  //   //   //
  //   //   //
  //   //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   //   //   .then(response => {
  //   //   //     return response.json();
  //   //   //   }).then(result => {
  //   //   //   this.setState({
  //   //   //     users:result
  //   //   //   });
  //   //   // });
  //   // }

  render() {
    return (
      <div className='order-summary'>
        <div className='summary_menu'>
          <ul>
            <li>쇼핑</li>
            <li>컨텐츠</li>
            <li>QR결제</li>
            <li>예약</li>
            <li>제휴카드</li>
          </ul>
        </div>
        <div className={'summary_content'}>
          <ul>
            <li className={'ship1'}>
              배송중
              <i className="fas fa-truck"></i>
              {/*{orderSummary.on_delivery}*/}
            </li>
            <li className={'ship2'}>
              배송완료
              <i className="fas fa-box"></i>
              {/*{orderSummary.on_delivery}*/}
            </li>
            <li className={'ship3'}>
              취소/반품/교환
              <i className="fas fa-exchange-alt"></i>
              {/*{orderSummary.on_delivery}*/}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default OrderSummary;

