import React from 'react'
import { TeamWorkTitle } from '../../data/TitleData'
// import List from '../list'

const GitPull = () => {
  return (
    <article>
      {TeamWorkTitle.map((item) => (
        <article className={item.style}>
          <div className="title-p-box">
            <h3>{item.title}</h3>
            <div className="head-bar"></div>
            <ul>
              {item.defenition
                ? item.defenition.bold.map((boldItem, index) => (
                    <li key={index}>
                      <p className="definition">
                        <b>{boldItem}</b> {item.defenition.noBold[index]}
                      </p>
                      <p className="explication">
                        {item.defenition.explication[index]}
                      </p>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </article>
      ))}
    </article>
  )
}

export default GitPull
