import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Specifications({ title, contents }) {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const sliderTrigger = () => {
    setActive(!active);
  };

  return (
    <div className='appart-page__specs'>
      <div className='appart-page__specifications '>
        <div className={`appart-page__spec-bar ${active ? 'active' : ''}`}>
          {title}
          <i onClick={sliderTrigger} className={`fa-solid fa-chevron-down xl appart-page__trigger${active ? '-active' : ''}`}></i>
        </div>
        <div className={`appart-page__spec-paragraph${active ? '-active' : isAboutPage ? '-about' : ''}`}>
          {contents}
        </div>
      </div>
    </div>
  );
}

export default Specifications;