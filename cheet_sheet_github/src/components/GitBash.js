import React from 'react'

const GitBash = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Naviguer dans Git Bash</h3>
        <div className="head-bar"></div>
        <div className="list-git">
          <ul>
            <li className="definition">
              <p><strong>pwd</strong></p>
              <p><strong>mkdir</strong>"dossier"</p>
              <p><strong>touch</strong>fichier.txt</p>
              <p><strong>ls</strong></p>
              <p><strong>ls -la</strong></p>
              <p><strong>cd</strong>dossier</p>
              <p><strong>cd ..</strong>Remonter d'un dossier</p>
            </li>
            <li className="explication">
              <p>savoir dans quel dossier je suis</p>
              <p>créer un dossier (Make Directory)</p>
              <p>liste le dossier courant</p>
              <p>liste tout plus précisément  que ls</p>
              <p>aller dans le dossier (Change Directory)</p>
              <p>Remonter d'un dossier</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default GitBash
