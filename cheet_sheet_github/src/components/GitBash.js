import React from 'react';
import { GitBashData } from '../data/CheatSheet';

const GitBash = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Naviguer dans Git Bash</h3>
        <div className="head-bar"></div>
          <ul>
          {GitBashData.map(({ id, description, explication })=> (
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

export default GitBash
