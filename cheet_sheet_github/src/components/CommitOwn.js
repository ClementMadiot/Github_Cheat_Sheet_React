import React from 'react';
import imgCatGit from "../images/cat-github.png"

const CommitOwnP = () => {
  return (
    <article className='commit-project'>
    <aside className="black-box">
      <div className="title-p-box">
        <h3>Commit son projet</h3>
        <div className="head-bar"></div>

          <ul>
            <li>
            <p><strong>git add .</strong></p>
            <p><strong>git commit -m</strong>"message"</p>
            <p><strong>git push -u origin main</strong></p>
            </li>
          </ul>

      </div>
    </aside>
        <aside className="img-git">
          <img src={imgCatGit} alt="logo animal de github" />
        </aside>

    </article>
  );
};

export default CommitOwnP;