import React from 'react';
import { ManageCommitData } from "../data/CheatSheet" ;

const ManageCommit = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Gérer les commits</h3>
        <div className="head-bar"></div>

        <ul>
            {ManageCommitData.map(({ id, description, explication })=> (
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

export default ManageCommit
