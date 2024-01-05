import React from 'react';
import { GitConfigData } from '../data/CheatSheet';

const GitConfig = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Initialisation de Git</h3>
        <div className="head-bar"></div>

        <ul className='git_config_list'>
        {GitConfigData.map(({ id, description, explication })=> (
          <li key={id}>
            <p className="definition">
              <b>{description.bold}</b> {description.noBold}
            </p>
            <p className="explication">
              {explication}
            </p>
          </li>
            ))}
        </ul>
      </div>
    </article>
  )
}

export default GitConfig
