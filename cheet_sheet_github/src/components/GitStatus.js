import React from 'react'

const GitStatus = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Autres commandes</h3>
        <div className="head-bar"></div>

        <ul>
          <li>
            <p className="definition">
              <strong>git status</strong>
            </p>
            <p className="explication">état du fichier</p>
          </li>
          <li>
            <p className="definition">
              <strong>git diff</strong>
            </p>
            <p className="explication">
              affiche les modifications avant commit
            </p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default GitStatus
