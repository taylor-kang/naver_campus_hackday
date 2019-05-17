import React from 'react';
import "./header.scss"
import {Link} from 'react-router-dom';


function Header (){
  return (
    <div className='header'>
      <div className='content'>
        <div className='homeLink'>
          <Link to={`/order`}>
            Naver Campus Hackday
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;