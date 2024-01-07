import React from 'react';
import Header from '../components/Header';
import GitPull from '../components/TeamWorkPart/GitPull';
import CommitOwnP from '../components/CommitOwn';

const TeamWork = () => {
  return (
    <main>
      <section className='right-part'>
        <Header/>
        <GitPull/>
      </section>
      <section className='left-part'>
        <CommitOwnP/>

      </section>
    </main>
  );
};

export default TeamWork;