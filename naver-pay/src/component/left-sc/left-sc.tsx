import React from 'react';
import './left-sc.scss';
import {connect} from "react-redux";

const currentUser = {id: 3, name: "Taehee Kang", phone: "010-5045-5768", email: "taehee.taylor.kang@gmail.com"};


class LeftSection extends React.Component {


  constructor() {
    super();

  }
  render() {

    return (
      <div className='left-section'>
        <div className='user-info'>
        <span className={'profile_img'}>
          <i className="fas fa-user-circle"></i>
        </span>
          <span className={'name'}>
          {currentUser.name} 님
        </span>
          <span className={'npoint'}>
          네이버 페이 포인트<br/>
          <strong>{10000} 원</strong>
        </span>
        </div>
      </div>
    );
  }

}

export default LeftSection;