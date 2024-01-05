import React from 'react'

const ManageCommit = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Gérer les commits</h3>
        <div className="head-bar"></div>

        <ul>
          <li>
            <p className="definition">
              <strong>git log</strong>
            </p>
            <p className="explication">liste des commits</p>
          </li>
          <li>
            <p className="definition">
              <strong>git log -n2</strong>
            </p>
            <p className="explication">affiche les 2 derniers commits</p>
          </li>
          <li>
            <p className="definition">
              <strong>git log -n2</strong>
            </p>
            <p className="explication">
              voir un commit spécifique (cliquer molette souris pour copier)
            </p>
          </li>
          <li>
            <p className="definition">
              <strong>git show </strong> sha-1
            </p>
            <p className="explication">affiche les 2 derniers commits</p>
          </li>
          <li>
            <p className="definition">
              <strong>git checkout</strong> sha-1
            </p>
            <p className="explication">remettre la version du sha-1</p>
          </li>
          <li>
            <p className="definition">
              <strong>git checkout main</strong>
            </p>
            <p className="explication">remettre la version la plus récent</p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default ManageCommit
