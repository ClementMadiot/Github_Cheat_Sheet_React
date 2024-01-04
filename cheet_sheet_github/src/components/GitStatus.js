import React from 'react';

const GitStatus = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Autres commandes</h3>
        <div className="head-bar"></div>
        <div className="list-git">
          <ul>
            <li className="definition">
            <p><strong>git status</strong></p>
            <p><strong>git diff</strong></p>
            </li>
            <li className="explication">
              <p>état du fichier</p>
              <p>affiche les modifications avant commit</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default GitStatus;