import React from 'react';
import './left-sc.scss'

function LeftSection (){
  return (
    <div className='left-section'>
      <div className='user-info'>
        <span className={'profile_img'}>
          <i className="fas fa-user-circle"></i>
        </span>
        <span className={'name'}>
          {'강태희'} 님
        </span>
        <span className={'npoint'}>
          네이버 페이 포인트<br/>
          <strong>{ 10000 } 원</strong>
        </span>
      </div>
    </div>
  );
}

export default LeftSection;