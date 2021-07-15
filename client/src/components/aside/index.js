import './aside.scss';
import React from 'react';

function Aside({ detailsResponse, searchKeyword }) {
  let details = '';
  if (detailsResponse) {
    details = detailsResponse.msg;
  }

  return (
    <aside className='aside'>
      <div className='aside__container'>
        <div className='aside__content'>
          <div className='aside__title'>
            <h5 id='search-keyword'>SearchKeyword</h5>
          </div>
          <div className='aside__text'>{searchKeyword}</div>
        </div>
        <div className='aside__content'>
          <div className='aside__title'>
            <h5 id='details'>Details</h5>
          </div>
          <div className='aside__text'>{details}</div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
