import React from 'react'
import Logo from '../images/logo-github.png'
import { Link } from 'react-router-dom'


const Header = () => {

  const OwnWork = 'Versionner son travail'
  // const TeamWork = 'Travailler en travail'
  return (
    <header>
      <img src={Logo} alt="Icon Github" />
      <div className="title-home">
        <h1>GitHub Cheat Sheet</h1>
        <div className="Link-Title">
          <h2 >{OwnWork}</h2>
          <Link className="Link-btn" to={`/TeamWork`}>
            <div className='arrow right'></div>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header
