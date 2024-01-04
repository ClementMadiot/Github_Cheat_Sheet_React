import React from 'react'

const OnlineVersion = () => {
  return (
    <article className="green-box">
      <div className="title-p-box">
        <h3>Versionner sur un dépôt distant</h3>
        <div className="head-bar"></div>
        <div className="list-git">
          <ul>
            <li className="definition">
              <p><strong>git clone</strong> lien Github</p>
              <p><strong>git push -u origin main</strong></p>
              <p><strong>git push -f origin main</strong></p>
            </li>
            <li className="explication">
              <p>récupérer le travail depuis le dépôt distant</p>
              <p>pousse les modifications vers le serveur</p>
              <p>pouuse de force les modifications (manipuler avec précaution)</p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default OnlineVersion
