import React from 'react';
import BANNER from '../assets/blitz.png';

const Header = () => {
  return (
    <div className="banner-blitz">
      <img src={BANNER} alt="Collage blitz img" className="blitz-bg" />
    </div>
  );
};

export default Header;
