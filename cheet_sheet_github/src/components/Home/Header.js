import React, { useState } from 'react'
import Logo from '../../images/logo-github.png'
import { Link } from 'react-router-dom'


const Header = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked)
  }

  
  const OwnWork = 'Versionner son travail'
  const TeamWork = 'Travailler en travail'
  return (
    <header className='Home-Header'>
      <img src={Logo} alt="Icon Github" />
      <div className="title-home">
        <h1>GitHub Cheat Sheet</h1>
        <div className="Link-Title">
          <h2 >{isButtonClicked ? TeamWork : OwnWork }</h2>
          {/* <h2>{TeamWork}</h2> */}
          <Link className="Link-btn" to={`/TeamWork`}>
            <div className={`arrow ${isButtonClicked ? 'left' : 'right'}`} onClick={handleClick}></div>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header
