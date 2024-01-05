import React from 'react';
import { GitStatusData } from '../data/CheatSheet';

const GitStatus = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Autres commandes</h3>
        <div className="head-bar"></div>

        <ul>
        {GitStatusData.map(({ id, description, explication })=> (
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

export default GitStatus
