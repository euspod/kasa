import React from 'react';

function AppartHost({ name, picture, rating }) {

  const nameParts = name.split(' ');

  return <div className='appart-page__host'>
    <div className='appart-page__profile'>
      <div className='appart-page__names'>
        {nameParts.map((part, index) => (
          <React.Fragment key={index} >
            <span>{part}</span>
            {index < nameParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
      <img src={picture} alt="appartment host" />
    </div>
    <div className='appart-page__rating'>
      <div>

        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= rating ? 'appart-page__star' : 'appart-page__star-remaining'}>
            <i className="fa-solid fa-star"></i>
          </span>
        ))}
      </div>
    </div>
  </div>
}
export default AppartHost;