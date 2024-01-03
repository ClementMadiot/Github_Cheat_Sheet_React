import React from 'react';
import Logo from '../images/logo-github.png'


const Header = () => {
  return (
    <header>
    <img src={Logo} alt="Icon Github" />
        <div>
        <h1>GitHub heat Sheet</h1>
        <h2>Versionner son travail</h2>
        </div>
      </header>
  );
};

export default Header;