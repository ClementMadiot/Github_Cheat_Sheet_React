import React from 'react';
import { TeamWorkTitleLeft } from '../../data/TitleData'
import CommitOwnP from '../CommitOwn';

const Gitignore = () => {
  return (
    <section className='left-part'>
      {TeamWorkTitleLeft.map((item) => (
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
<CommitOwnP/>
    </section>
  );
};

export default Gitignore;