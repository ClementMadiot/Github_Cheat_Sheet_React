import React from 'react';

const GitConfig = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Initialisation de Git</h3>
        <div className="head-bar"></div>
        <div className="list-git">
          <ul>
            <li className="definition">
            <p><strong>git config --global user.name</strong></p>
            <p><strong>git config --global user.email</strong></p>
            <p><strong>git config --global --list</strong></p>
            </li>
            <li className="explication">
              <p>"Mon Nom"</p>
              <p>mon email</p>
              <p>Affiche nom et email</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default GitConfig;