import React from 'react'
import Logo from '../../images/logo-github.png'
import { Link } from 'react-router-dom'


const Header = () => {

  const TeamWork = 'Travailler en équipe'
  return (
    <header>
      <img src={Logo} alt="Icon Github" />
      <div className="title-home">
        <h1>GitHub Cheat Sheet</h1>
        <div className="Link-Title">
          <h2 >{TeamWork}</h2>
          <Link className="Link-btn" to={`/`}>
            <div className='arrow left '></div>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header
