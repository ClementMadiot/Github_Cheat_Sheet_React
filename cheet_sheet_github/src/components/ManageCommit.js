import React from 'react';

const ManageCommit = () => {
  return (
    <article className='gray-box'>
      <div className='title-p-box'>
      <h3>Gérer les commits</h3>
      <div className='head-bar'></div>
      <div className='list-git'>

      <ul>
        <li className='definition'>
            <p><strong>git log</strong></p>
            <p><strong>git log -n2</strong></p>
            <p><strong>git show </strong> sha-1</p>
            <p><strong>git checkout</strong> sha-1</p>
            <p><strong>git checkout main</strong></p>
        </li>
        <li className='explication'>
            <p>
              liste des commits
            </p>
            <p>
              affiche les 2 derniers commits
            </p>
            <p>
              voir un commit spécifique (cliquer molette souris pour copier) 
            </p>
            <p>
              remettre la version du sha-1
            </p>
            <p>
            remettre la version la plus récent
            </p>
        </li>
      </ul>
      </div>
      </div>
    </article>
  );
};

export default ManageCommit;