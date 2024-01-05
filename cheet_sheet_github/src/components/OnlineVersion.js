import React from 'react'

const OnlineVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner sur un dépôt distant</h3>
        <div className="head-bar"></div>

        <ul>
          <li>
            <p className="definition">
              <strong>git clone</strong> lien Github
            </p>
            <p className="explication">
              récupérer le travail depuis le dépôt distant
            </p>
          </li>

          <li>
            <p className="definition">
              <strong>git push -u origin main</strong>
            </p>
            <p className="explication">
              pousse les modifications vers le serveur
            </p>
          </li>
          <li>
            <p className="definition">
              <strong>git push -f origin main</strong>
            </p>
            <p className="explication">
              pousse de force les modifications (manipuler avec précaution)
            </p>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default OnlineVersion
