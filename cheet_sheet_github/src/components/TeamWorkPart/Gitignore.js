import React from 'react';
// import { TeamWorkLeft } from '../../data/TeamWorkData'
import { TeamWorkLeft } from '../../data/HomeData'
import CommitOwnP from '../CommitOwn';

const Gitignore = () => {
  return (
    <section className='left-part'>
      {TeamWorkLeft.map((item, index) => (
        <article key={index} className={item.style}>
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