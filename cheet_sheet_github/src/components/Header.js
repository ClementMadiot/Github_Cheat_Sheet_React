import React from 'react';
import Logo from '../images/logo-github.png'


const Header = () => {
  
  const OwnWork = 'Versionner son travail'
  // const TeamWork = 'Travailler en travail'
  return (
    <header>
    <img src={Logo} alt="Icon Github" />
        <div className='title-home'>
        <h1>GitHub Cheat Sheet</h1>
        <h2>{OwnWork}</h2>
        {/* <h2>{TeamWork}</h2> */}
        </div>
      </header>
  );
};

export default Header;