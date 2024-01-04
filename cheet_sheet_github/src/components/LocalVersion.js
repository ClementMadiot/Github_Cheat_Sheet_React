import React from 'react'

const LocalVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner en local</h3>
        <div className="head-bar"></div>
        <div className="list-git">
          <ul>
            <li className='definition'>
              <p>
                <strong>git init</strong>
              </p>
              <p>git add .</p>
              <p>
                <strong>git commit -m </strong> "explication"
              </p>
            </li>
            <li className='explication'>
              <p>
                initialise le dépot (se mettre sur le bon dossier), mieux à
                faire depuis Github.com
              </p>

              <p>ajoute toutes les modifications ( le . symbolise tout )</p>
              <p>
                créer un nouveau commit <strong>git add </strong> pousse les
                fichiers en zone d'index, <strong> git commit</strong> les
                sauvegarde réellement dans un nouveau commit
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default LocalVersion
