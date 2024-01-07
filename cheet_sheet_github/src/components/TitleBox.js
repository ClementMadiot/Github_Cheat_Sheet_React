import React from 'react'
import { HomeTitle } from '../data/TitleData'
import { OnlineVersionData } from '../data/CheatSheet'
import List from './list'

const TitleBox = () => {
  return (
    <article>
      {HomeTitle.map(({ id, title, style }) => (
        <article className={`${style}`}>
          <div id={`${id}`} className="title-p-box">
            <h3>{title}</h3>
            <div className="head-bar"></div>
            <ul>
              {OnlineVersionData.map(({ id, description, explication }) => (
                <List
                  id={`${id}`}
                  description={description}
                  explication={explication}
                />
              ))}
            </ul>
          </div>
        </article>
      ))}
    </article>
  )
}

export default TitleBox
