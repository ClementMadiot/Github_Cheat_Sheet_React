import React from 'react'

const GitBash = () => {
  return (
    <article className="gray-box">
      <div className="title-p-box">
        <h3>Naviguer dans Git Bash</h3>
        <div className="head-bar"></div>
          <ul>
            <li>
              <p className="definition">
                <strong>pwd</strong>
              </p>
              <p className="explication">savoir dans quel dossier je suis</p>
            </li>
            <li>
              <p className="definition">
                <strong>mkdir</strong> "dossier"
              </p>
              <p className="explication">créer un dossier (Make Directory)</p>
            </li>
            <li>
              <p className="definition">
                <strong>touch</strong> "file"
              </p>
              <p className="explication">créer un fichier</p>
            </li>
            <li>
              <p className="definition">
                <strong>ls</strong>
              </p>
              <p className="explication">liste le dossier courant</p>
            </li>
            <li>
              <p className="definition">
                <strong>ls -la</strong>
              </p>
              <p className="explication">liste tout plus précisément que ls</p>
            </li>
            <li>
              <p className="definition">
                <strong>cd</strong> dossier
              </p>
              <p className="explication">
                aller dans le dossier (Change Directory)
              </p>
            </li>
            <li>
              <p className="definition">
                <strong>cd ..</strong>
              </p>

              <p className="explication">Remonter d'un dossier</p>
            </li>
          </ul>
      </div>
    </article>
  )
}

export default GitBash
