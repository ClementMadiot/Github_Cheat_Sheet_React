import React from 'react'

const LocalVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner en local</h3>
        <div className="head-bar"></div>
        <ul>
          <li>
            <p className="definition">
              <strong>git init</strong>
            </p>
            <p className="explication">
              initialise le dépot (se mettre sur le bon dossier), mieux à faire
              depuis Github.com
            </p>
          </li>
          <li>
            <p className="definition">
              <strong>git init</strong>
            </p>
            <p className="explication">
              initialise le dépot (se mettre sur le bon dossier), mieux à faire
              depuis Github.com
            </p>
          </li>
          <li>
            <p className="definition">
              <strong>git add .</strong>
            </p>
            <p className="explication">
              ajoute toutes les modifications ( le . symbolise tout )
            </p>
          </li>
          <li>
            <p className="definition">
              <strong>git commit -m </strong> "explication"
            </p>
            <p className="explication">
              créer un nouveau commit <strong>git add </strong> pousse les
              fichiers en zone d'index, <strong> git commit</strong> les
              sauvegarde réellement dans un nouveau commit
            </p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default LocalVersion
