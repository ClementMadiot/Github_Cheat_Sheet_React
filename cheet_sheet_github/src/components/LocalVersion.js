import React from 'react';
import { LocalVersionData } from '../data/CheatSheet';
const LocalVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner en local</h3>
        <div className="head-bar"></div>
        <ul>
          {LocalVersionData.map(({ id, description, explication })=> (
            <li key={id}>
            <p className="definition">
              <b>{description.bold}</b>{description.noBold}
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

export default LocalVersion
