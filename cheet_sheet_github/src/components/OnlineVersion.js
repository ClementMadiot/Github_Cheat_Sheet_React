import React from 'react';
import { OnlineVersionData } from '../data/CheatSheet';

const OnlineVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner sur un dépôt distant</h3>
        <div className="head-bar"></div>

        <ul>
      {OnlineVersionData.map(({ id, description, explication }) => (
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

export default OnlineVersion
