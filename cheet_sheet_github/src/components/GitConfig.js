import React from 'react'

const GitConfig = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Initialisation de Git</h3>
        <div className="head-bar"></div>

        <ul className='git_config_list'>
          <li>
            <p className="definition">
              <strong>git config --global user.name</strong>
            </p>
            <p className="explication">"Mon Nom"</p>
          </li>
          <li>
            <p className="definition">
              <strong>git config --global user.email</strong>
            </p>
            <p className="explication">mon email</p>
          </li>
          <li>
            <p className="definition">
              <strong>git config --global --list</strong>
            </p>

            <p className="explication">Affiche nom et email</p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default GitConfig
